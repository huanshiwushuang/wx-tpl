<template>
    <div>
        <van-sticky :offset-top="0">
            <div class="kw0hjnhc pr tc">
                <h1 class="kw0h39r8">句子迷</h1>
                <van-icon name="search" class="fr kw0i22hw cp" />
            </div>
        </van-sticky>
    </div>
</template>

<script>
export default {
    name: "home_components_header",
    data() {
        return {};
    },
};
</script>

<style lang="less">
@import (reference) "@/assets/less/index.less";

.kw0h39r8 {
    .fs36;
    margin: 0;
    padding: 25px 0;
    font-family: cursive;
}

.kw0hjnhc {
    background: #fff;
}
// reset vant
.van-sticky--fixed {
    .kw0hjnhc {
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }
}

.kw0i22hw {
    .pa;
    .fs36;
    right: 30px;
    top: 50%;
    transform: translate(0, -50%);
}
</style>