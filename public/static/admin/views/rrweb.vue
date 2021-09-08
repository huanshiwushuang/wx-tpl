<template>
    <div>
        <div class="ktaubpgq_box">
            <div class="ktatvjjh_box">
                <!-- rr-player container -->
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
// https://github.com/Preflight-HQ/rrweb-player-vue
module.exports = {
    name: "rrweb-play",
    components: {
        "rrweb-player"() {
            return new Promise((resolve) => {
                requirejs(["rrweb_player_vue"], (rrweb_player_vue) => {
                    resolve(rrweb_player_vue);
                });
            });
        },
    },
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
                Vue.use(vueNativeSocket.default, "ws://192.168.100.5:2348", {
                    reconnection: true,
                    reconnectionDelay: 3000,
                });
                //
                let isFirstEvent = true;

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
                            if (isFirstEvent) {
                                isFirstEvent = false;

                                this.replayer.startLive(
                                    data_json.event.timestamp - 1000
                                );
                            }
                            this.replayer.addEvent(data_json.event);
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
                // this.replayer.startLive(FIRST_EVENT.timestamp - BUFFER);
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
        window.zxc = this;
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