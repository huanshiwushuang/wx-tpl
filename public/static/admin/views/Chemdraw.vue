<template>
    <div class="kt2gdymi_com">
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
            perkinelmer.ChemdrawWebManager.attach({
                element: this.$refs.kt2htnef_container,
                callback: this.chemdrawjsAttached,
                errorCallback: this.chemdrawjsFailed,
            });
        });
    },
};
</script>

<style lang="less">
@import "@{baseUrl}/assets/less/base.less";

.kt2iafva_container {
    height: 800px;
}
.kt2gdymi_com {
    .CDW_Logo {
        .dn;
    }
}
</style>
