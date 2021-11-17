<template>
    <div class="flg kw3gy252_com">
        <div class="kw3haws5_box">
            <!-- 卡片 -->
            <div
                v-for="(v, k) in show_list"
                :key="k"
                :style="v.style"
                class="kw3hzwom_card"
            >
                <van-image :src="v.pic" lazy-load class="kw3ikkah">
                    <template v-slot:loading>
                        <div class="kvurdces_loading">
                            <van-loading :color="c_theme" />
                        </div>
                    </template>
                    <template v-slot:error>
                        <div class="kvurf9qz_error kw350amm_error">
                            <van-icon name="photo" />
                        </div>
                    </template>
                </van-image>
            </div>
        </div>
        <div class="tc kw3jjoux">
            <div class="kw3k0r9b_icon">
                <van-icon name="cross" />
            </div>
            <div class="kw3k0r9b_icon">
                <van-icon name="like" class="kw3k759k_id" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "home_popular",
    data() {
        return {};
    },
    computed: {
        show_list() {
            return this.json.list.slice(0, 3).map((item, index) => {
                return {
                    ...item,
                    style: {
                        transform: `translate(-50%, ${
                            index * 0.02898550724637683 * 100
                        }%) scale(${1 - index * 0.02898550724637683})`,
                        "z-index": `${5 - index}`,
                    },
                };
            });
        },
    },
};
</script>

<style lang="less">
@import (reference) "@/assets/less/index.less";
.kw3gy252_com {
    background: #f4f4f4;
    padding: 30px;
}
.kw3haws5_box {
    .pr;
    height: 865px;
}
.kw3hzwom_card {
    .pa;
    .w;
    .h;
    .oh;
    left: 50%;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0 1px 17px 0 rgba(0, 0, 0, 0.19);
}
.kw3ikkah {
    width: 690px;
    height: 450px;
}
// ******************
.kvurdces_loading,
.kvurf9qz_error {
    .df;
    .aic;
    .jcc;
    .h;
}
.kw350amm_error {
    font-size: 150px;
}
// ******************
.kw3jjoux {
    .df;
    justify-content: space-around;
    margin-top: 70px;
}
.kw3k0r9b_icon {
    .tc;
    border: 2px solid #949494;
    border-radius: 100%;
    width: 100px;
    height: 100px;
    line-height: 100px;
    color: #949494;
    font-size: 52px;
}
.kw3k759k_id {
    transform: translate(3%, 9%);
    color: red;
}
</style>
