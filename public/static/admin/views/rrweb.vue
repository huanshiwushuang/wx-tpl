<template>
    <div>
        <div class="ktaubpgq_box">
            <div class="ktatvjjh_box">
                <!-- replayer container -->
                <div ref="ktavnoi7_ref"></div>
            </div>

            <div class="ktatxgj8_box">
                <div class="ktaudtgs_box">
                    <el-input
                        v-model="watch_group"
                        placeholder="请输入 watch_group"
                    ></el-input>
                </div>
                <div class="ktauf2dw_box">
                    <el-button @click="playByClientId"> 播放 </el-button>
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
            watch_group: null,
            replayer: null,
            client_id: null,
        };
    },
    methods: {
        async init_created() {
            // 连接 socket
            requirejs(["vueNativeSocket"], (vueNativeSocket) => {
                Vue.use(vueNativeSocket.default, "ws://localhost:2348", {
                    reconnection: true,
                    reconnectionDelay: 3000,
                });
                // 是否是 第一个 event
                let isFirstEvent = true;

                // 监听 message
                this.$socket.addEventListener("message", (event) => {
                    let data_json = {};

                    try {
                        data_json = JSON.parse(event.data);
                    } catch (error) {
                        console.error(error);
                    }
                    switch (data_json.type) {
                        case "init":
                            this.client_id = data_json.client_id;
                            break;
                        case "event":
                            {
                                requirejs(["rrweb"], (rrweb) => {
                                    // 解包
                                    let event = rrweb.unpack(data_json.event);

                                    if (isFirstEvent) {
                                        isFirstEvent = false;
                                        // 直播模式
                                        this.replayer.startLive(
                                            event.timestamp - 1000
                                        );
                                    }

                                    this.replayer.addEvent(event);
                                });
                            }
                            break;
                    }
                });
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
        playByClientId() {
            this.$post("/websocket/getEventByUid", {
                client_id: this.client_id,
                group: this.watch_group,
            });
        },
    },
    created() {
        this.init_created();
    },
    mounted() {
        this.init_mounted();
        window.rrweb = this;
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