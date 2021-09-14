<template>
  <div>
    <div class="ktaubpgq_box">
      <div class="ktatvjjh_box">
        <!-- replayer container -->
        <div ref="ktavnoi7_ref"></div>
      </div>

      <div class="ktatxgj8_box">
        <div class="ktaudtgs_box">
          <el-input v-model="password" placeholder="请输入密码"></el-input>
          <el-input v-model="uid" placeholder="请输入 uid"></el-input>
        </div>
        <div class="ktauf2dw_box">
          <el-button @click="reconnect"> 重连服务器 </el-button>
          <el-button @click="watchUser"> 查看用户 </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  name: "rrweb-play",
  data() {
    return {
      password: "",
      uid: "",
      replayer: null,
      client_id: null,
    };
  },
  computed: {
    config() {
      return {
        url: "wss://remote.513902.xyz:443/wss",
        bind_url: "/websocket/bindUid",
        uid: this.$cookie.get("PHPSESSID"),
      };
    },
  },
  methods: {
    async init_created() {
      // 连接 socket
      requirejs(["vueNativeSocket"], (vueNativeSocket) => {
        Vue.use(vueNativeSocket.default, this.config.url, {
          connectManually: true,
        });

        this.$connect();
        this.init_websocket();
      });
    },
    init_websocket() {
      // 是否是 第一个 event
      let isFirstEvent = true;

      // 监听 message
      const handleCloseError = () => {
        clearTimeout(handleCloseError.timeout);

        handleCloseError.timeout = setTimeout(() => {
          this.$message.error("websocket disconnect");
        }, 1000);
      };
      this.$socket.addEventListener("close", handleCloseError);
      this.$socket.addEventListener("error", handleCloseError);
      this.$socket.addEventListener("message", async (event) => {
        let data_json = {};

        try {
          data_json = JSON.parse(event.data);
        } catch (error) {
          return console.error(error);
        }
        switch (data_json.type) {
          case "init":
            this.client_id = data_json.client_id;

            // 绑定用户
            await this.$post(this.config.bind_url, {
              client_id: this.client_id,
              uid: this.config.uid,
            });
            // 通知 websocket server, 已完成初始化
            this.$socket.send(
              JSON.stringify({
                type: "inited",
              })
            );
            break;
          case "event":
            {
              requirejs(["rrweb"], (rrweb) => {
                // 解包
                let event = rrweb.unpack(data_json.event);

                if (isFirstEvent) {
                  isFirstEvent = false;
                  // 直播模式
                  this.replayer.startLive(event.timestamp - 500);
                }

                this.replayer.addEvent(event);
              });
            }
            break;
          case "success":
            this.$message.success(data_json.success);
            break;
          case "error":
            this.$message.error(data_json.error);
            break;
        }
      });
    },
    async init_mounted() {
      // 初始化 rrweb-player
      requirejs(["rrweb"], (rrweb) => {
        this.replayer = new rrweb.Replayer([], {
          root: this.$refs.ktavnoi7_ref,
          liveMode: true,
        });
      });
    },
    async reconnect() {
      if (this.$socket.readyState !== WebSocket.OPEN) {
        this.$disconnect();
        this.$connect();
        this.init_websocket();
      }
    },
    async watchUser() {
      let params = {
        password: this.password,
        client_id: this.client_id,
        uid: this.uid,
      };
      // 加入组
      await this.$post("/websocket/joinGroup", params);
      // 全新请求记录一次
      await this.$post("/websocket/record_checkout", params);
    },
  },
  created() {
    this.init_created();
  },
  mounted() {
    this.init_mounted();

    window.replayer = this;
  },
};
</script>

<style lang="less">
.ktaubpgq_box {
  text-align: center;
}
.ktatvjjh_box {
  display: inline-block;
  &:before,
  &:after {
    content: "";
    display: table;
    clear: both;
  }
}
.ktatxgj8_box {
  margin-top: 50px;
}
.ktaudtgs_box {
  display: inline-block;
  width: 300px;
}
.ktauf2dw_box {
  margin-top: 20px;
}
</style>