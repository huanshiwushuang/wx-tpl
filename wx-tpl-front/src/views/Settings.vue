<template>
    <div class="about">
        <h1 class="tc">设置页面</h1>
        <div class="tc">
            <wx-router-link is="a" href="/">
                <button>回到首页</button>
            </wx-router-link>
        </div>

        <!-- 设置 -->
        <table class="kvdhlhtr ma tc tlf mt20">
            <thead>
                <tr>
                    <th>key</th>
                    <th>value</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td
                        title="前端使用 mockjs 直接返回数据，不请求接口，数据 console 打印"
                    >
                        路由模式
                    </td>
                    <td>
                        <label>
                            <input
                                v-model="router_mode"
                                type="radio"
                                value="ast"
                                class="vm"
                            />
                            <span class="vm"> AST-无刷新模式 </span>
                        </label>
                        <label>
                            <input
                                v-model="router_mode"
                                type="radio"
                                value="refresh"
                                class="vm"
                            />
                            <span class="vm"> 传统页面-刷新模式 </span>
                        </label>
                    </td>
                </tr>
                <tr>
                    <td>是否模拟数据</td>
                    <td>
                        <input type="checkbox" v-model="is_mock" />
                    </td>
                </tr>
                <tr>
                    <td title="前端校验后端返回数据是否符合 mock 规则">
                        是否校验数据
                    </td>
                    <td>
                        <input type="checkbox" v-model="is_check" />
                    </td>
                </tr>
                <tr>
                    <td>是否打印配置</td>
                    <td>
                        <input type="checkbox" v-model="is_print_config" />
                    </td>
                </tr>
                <tr>
                    <td>是否移除数据 dom</td>
                    <td>
                        <input type="checkbox" v-model="is_remove_dom" />
                    </td>
                </tr>
                <tr>
                    <td>是否附件组件 this 到 app</td>
                    <td>
                        <input type="checkbox" v-model="is_attach_com" />
                    </td>
                </tr>
                <tr>
                    <td>是否附加 app 到 window 上</td>
                    <td>
                        <input type="checkbox" v-model="is_attach_app" />
                    </td>
                </tr>
                <tr>
                    <td>数据 API baseURL</td>
                    <td>
                        <input type="text" v-model="axios_base_url" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import config from "../config";

const config_keys = Object.keys(config);

export default {
    name: "Settings",
    data() {
        return {};
    },
    computed: {
        ...(() => {
            return config_keys.reduce((sum, item) => {
                sum[item] = {
                    get() {
                        return this.local.value[item];
                    },
                    set(val) {
                        this.local.set({
                            [item]: val,
                        });
                    },
                };
                return sum;
            }, {});
        })(),
    },
};
</script>
<style lang="less">
@import (reference) "@/assets/less/index.less";
.kvdhlhtr {
    border-collapse: collapse;
    th {
        background: #26a9a2;
    }
    th,
    td {
        border: 1px solid #000;
        padding: 10px;
    }

    input[type="radio"],
    input[type="checkbox"] {
        width: 30px;
        height: 30px;
    }
}
</style>