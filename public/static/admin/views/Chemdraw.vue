<template>
    <div class="kt2gdymi_com">
        <div class="kt2tmc8q_box">
            <div class="kt83dxbj_box">
                <uploader
                    :options="uploader.options"
                    :auto-start="false"
                    ref="kt82r4cz_ref"
                >
                    <uploader-unsupport></uploader-unsupport>
                    <uploader-drop>
                        <p>Drop files here to upload or</p>
                        <uploader-btn>select files</uploader-btn>
                        <uploader-btn :directory="true">
                            select folder
                        </uploader-btn>
                    </uploader-drop>
                    <uploader-list></uploader-list>
                </uploader>
            </div>
            <div v-show="files.length" class="kt88jv7g_box">
                <!-- 完成进度 -->
                <div class="kt88nxba_box">
                    <el-progress :percentage="transform_percent"></el-progress>
                </div>
                <ul class="kt88mfls_ul">
                    <li
                        v-for="(item, index) in files"
                        :key="index"
                        class="kt88vqd6_li"
                        :class="[{ transform_end: item.transform_end }]"
                    >
                        {{ item.relativePath }}
                    </li>
                </ul>
            </div>
        </div>

        <div ref="kt2htnef_container" class="kt2iafva_container"></div>
    </div>
</template>

<script>
// (https://www.eckher.com/c/21fz0t_d0b)
// (https://chemdrawdirect.perkinelmer.cloud/js/docs/Developers%20Guide_Service/Developers%20Guide.htm#Developers%20Guide/Overview.html%3FTocPath%3D_____1)

module.exports = {
    name: "Chemdraw",
    data() {
        return {
            uploader: {
                options: {
                    // https://github.com/simple-uploader/Uploader/tree/develop/samples/Node.js
                    target: "//localhost:3000/upload",
                    testChunks: false,
                },
            },

            files: [],

            chemdraw: null,
            JSZip: null,
            zipSVG: null,
            zipPng: null,
        };
    },
    computed: {
        // 已完成百分比
        transform_percent() {
            return (
                (this.files.filter((i) => {
                    return i.transform_end;
                }).length /
                    this.files.length) *
                    100 || 0
            );
        },
    },
    methods: {
        chemdrawjsAttached(chemdraw) {
            this.chemdraw = chemdraw;
        },
        chemdrawjsFailed(error) {
            console.error(error);
        },
        filesAdded(files, fileList) {
            files = files.filter((i) => {
                return /\.cdx$/i.test(i.name);
            });
            this.files = files.map((i) => {
                i.transform_end = false;
                return i;
            });
            console.log(define);
            console.log(window.define === define);

            this.zipSVG = new this.JSZip();
            this.zipPng = new this.JSZip();

            // 开始转换
            this.$nextTick(() => {
                this.startTransform();
            });
        },
        async startTransform() {
            if (this.chemdraw) {
                for (let item of this.files) {
                    await window.kt8aqig7_processFiles({
                        item() {
                            return item.file;
                        },
                    });
                    // 存储到 zip 中
                    this.zipSVG.file(
                        item.relativePath.replace(/\.\w+$/, ".svg"),
                        this.chemdraw.getSVG()
                    );
                    this.zipPng.file(
                        item.relativePath.replace(/\.\w+$/, ".png"),
                        this.chemdraw.getImgUrl().replace(/^.+,/, ""),
                        {
                            base64: true,
                        }
                    );

                    // 标记此文件处理完毕
                    item.transform_end = true;

                    await new Promise((resolve) => {
                        setTimeout(() => {
                            resolve();
                        }, 500);
                    });
                    // 清空 canvas
                    this.chemdraw.clear();
                }
            }

            this.files.forEach((item) => {
                item.cancel();
            });
            this.files = [];
            this.zipSVG
                .generateAsync({
                    type: "blob",
                })
                .then((content) => {
                    saveAs(content, `${Date.now()}.svg.zip`);

                    alert("zipSVG 转换完毕");
                })
                .catch((error) => {
                    console.error(error);
                    alert("zipSVG 保存错误");
                });
            setTimeout(() => {
                this.zipPng
                    .generateAsync({
                        type: "blob",
                    })
                    .then((content) => {
                        saveAs(content, `${Date.now()}.png.zip`);

                    })
                    .catch((error) => {
                        console.error(error);
                    });
            }, 3000);
        },
    },
    mounted() {
        // chemdraw 对 requirejs 有副作用,影响到其他库导入,暂无解决办法,只能和其他库一起导入
        requirejs(["chemdraw", "JSZip", "fileSaver"], (perkinelmer, JSZip) => {
            this.JSZip = JSZip;

            // 初始化 chemdraw
            perkinelmer.ChemdrawWebManager.attach({
                element: this.$refs.kt2htnef_container,
                callback: this.chemdrawjsAttached,
                errorCallback: this.chemdrawjsFailed,
            });
        });

        // 监听文件增减
        this.$refs.kt82r4cz_ref.uploader.on("filesAdded", this.filesAdded);

        console.log(this);
    },
};
</script>

<style lang="less">
@import "@{baseUrl}/assets/less/base.less";

.kt2iafva_container {
    // position: relative;
    // z-index: -1;
    height: 800px;
    margin-top: 10px;
}
.kt2gdymi_com {
    .CDW_Logo {
        .dn;
    }
}
.kt2tmc8q_box {
    display: flex;
}
.kt83dxbj_box {
    max-width: 300px;
    // reset com
    .uploader-file-info {
        pointer-events: none;
    }
}
.kt88mfls_ul {
    max-height: 500px;
    overflow: auto;
    list-style: none;
    margin: 0;
    padding: 0;
}
.kt88nxba_box {
    width: 300px;
}
.kt88vqd6_li {
    &.transform_end {
        background: #ccc;
    }
}
.kt88jv7g_box {
    padding-left: 10px;
}
</style>
