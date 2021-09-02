<template>
    <div class="kt2gdymi_com">
        <div class="kt2tmc8q_box">
            <div>
                <el-upload
                    class="upload-demo"
                    drag
                    action="https://jsonplaceholder.typicode.com/posts/"
                    multiple
                    ref="kt2tnone_ref"
                >
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">
                        将文件/文件夹拖到此处，或<em>点击上传</em>
                    </div>
                </el-upload>
            </div>
            <div>
                <ul>
                    <li>所有的文件列表</li>
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
    methods: {
        chemdrawjsAttached(chemdraw) {
            console.log(chemdraw);
        },
        chemdrawjsFailed(error) {
            console.error(error);
        },
    },
    mounted() {
        requirejs(["chemdraw"], (perkinelmer) => {
            // 初始化 chemdraw
            perkinelmer.ChemdrawWebManager.attach({
                element: this.$refs.kt2htnef_container,
                callback: this.chemdrawjsAttached,
                errorCallback: this.chemdrawjsFailed,
            });
        });
        requirejs(["fileSaver"], (saveAs) => {});

        // 设置允许上传文件夹
        this.$refs.kt2tnone_ref.$el.querySelector(
            ".el-upload__input"
        ).webkitdirectory = true;
    },
};
</script>

<style lang="less">
@import "@{baseUrl}/assets/less/base.less";

.kt2iafva_container {
    position: relative;
    height: 800px;
    z-index: -1;
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
</style>
