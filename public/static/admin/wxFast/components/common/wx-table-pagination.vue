<template>
    <div
        v-loading="isLoading"
        class="kwn410tk_com"
    >
        <!-- 列搜索 -->
        <div
            v-show="computedTheadCanSearch.length && showSearch"
            class="mb10"
        >
            <el-descriptions
                :column="computedSearchColumn"
                border
            >
                <el-descriptions-item
                    v-for="(v, k) in computedTheadCanSearch"
                    :key="k"
                >
                    <template slot="label">
                        {{ v.vBind.label }}
                    </template>
                    <!-- input -->
                    <template v-if="v.search.type === 'input'">
                        <el-input
                            v-model="v.search.value[0]"
                            clearable
                        ></el-input>
                    </template>
                    <!-- select -->
                    <template v-else-if="v.search.type === 'select'">
                        <el-select
                            v-model="v.search.value[0]"
                            placeholder="请选择"
                            clearable
                            class="w"
                        >
                            <el-option
                                v-for="vv in v.search.options"
                                :key="vv.value"
                                :label="vv.label"
                                :value="vv.value"
                            >
                            </el-option>
                        </el-select>
                    </template>
                    <!-- date-picker -->
                    <template v-else-if="v.search.type === 'date-picker'">
                        {{ (function () {
                            Object.assign(v.search.vBind, {
                                type: "daterange",
                                'range-separator': "至",
                                'start-placeholder': "开始日期",
                                'end-placeholder': "结束日期",
                                class: "kwn40fqs",
                                'value-format': "timestamp",
                                'picker-options': pickerOptions,
                                'unlink-panels': true,
                                ...v.search.vBind,
                            }, v.search.vBind);
                        })() }}

                        <el-date-picker
                            v-model="v.search.value"
                            v-bind="v.search.vBind"
                        >
                        </el-date-picker>

                    </template>
                </el-descriptions-item>
            </el-descriptions>
            <!-- 按钮 -->
            <div class="tc mt10">
                <el-button
                    type="danger"
                    @click="handleSearchReset"
                >
                    重置
                </el-button>
                <el-button
                    type="primary"
                    @click="handleLoad"
                >
                    搜索
                </el-button>
            </div>
        </div>

        <!-- 操作行 -->
        <div class="df jcsb aic mt10 mb10">
            <div>
                <el-button
                    type="info"
                    @click="init"
                >
                    <i class="el-icon-refresh"></i>
                </el-button>
            </div>
            <div>
                <el-button
                    v-if="computedTheadCanSearch.length"
                    type="primary"
                    @click="showSearch = !showSearch"
                >
                    <i class="el-icon-search"></i>
                </el-button>
            </div>
        </div>
        <!-- 表格 -->
        <el-table
            :data="dataTbody"
            v-bind="computedTableVBind"
            v-on="computedTableVOn"
        >
            <el-table-column
                v-for="(v, k) in computedThead"
                :key="v.id || k"
                v-bind="v.vBind"
            >
                <slot :name="v.vBind.prop">
                </slot>
            </el-table-column>
        </el-table>
        <!-- 分页 -->
        <div class="mt20 kwlngh12">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :page-sizes="[10, 20, 30, 40]"
                layout="total, sizes, prev, pager, next, jumper"
                v-bind="dataPagination"
            >
            </el-pagination>
        </div>
    </div>
</template>

<script>
module.exports = {
    name: "WxTablePagination",
    props: {
        // 搜索相关
        // *******************************************************
        propSearchColumn: {
            type: Number,
        },
        // 表格相关
        // *******************************************************
        // 表格绑定
        propTableVBind: {
            type: Object,
            default: () => {},
        },
        // 请求网址
        propUrl: {
            type: String,
            required: true,
        },
        // 表头
        propThead: {
            type: Array,
            default: () => [],
            validator(val) {
                return Array.isArray(val);
            },
        },
        // 数据访问路径
        propTbodyPath: {
            // 比如 a.b.c
            type: String,
        },
        // 总数访问路径
        propTotalPath: {
            // 比如 a.b.c
            type: String,
        },
        // 分页相关
        // *******************************************************
        // 分页
        propPagination: {
            type: Object,
        },
    },
    data() {
        return {
            isLoading: false,
            // 搜索相关
            // *******************************************************
            showSearch: false,
            pickerOptions: {
                shortcuts: [
                    {
                        text: "今天",
                        onClick(picker) {
                            const start = new Date();
                            picker.$emit("pick", [start, start]);
                        },
                    },
                    {
                        text: "昨天",
                        onClick(picker) {
                            const start = new Date();
                            start.setTime(
                                start.getTime() - 3600 * 1000 * 24 * 1
                            );
                            picker.$emit("pick", [start, start]);
                        },
                    },
                    {
                        text: "最近一周",
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(
                                start.getTime() - 3600 * 1000 * 24 * 7
                            );
                            picker.$emit("pick", [start, end]);
                        },
                    },
                    {
                        text: "最近一个月",
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(
                                start.getTime() - 3600 * 1000 * 24 * 30
                            );
                            picker.$emit("pick", [start, end]);
                        },
                    },
                    {
                        text: "最近三个月",
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(
                                start.getTime() - 3600 * 1000 * 24 * 90
                            );
                            picker.$emit("pick", [start, end]);
                        },
                    },
                ],
            },
            // 表格相关
            // *******************************************************
            // 表头
            dataThead: [],
            // 表体
            dataTbody: [],
            // 排序
            dataSort: {
                order: "",
                sort: "",
            },
            // 分页相关
            // *******************************************************
            // 分页
            dataPagination: {},
        };
    },
    computed: {
        // 参数
        computedParams() {
            return {
                page: this.dataPagination["current-page"],
                pagesize: this.dataPagination["page-size"],
                // 搜索
                ...this.computedTheadCanSearch.reduce((sum, v) => {
                    switch (v.search.type) {
                        case "date-picker":
                            if (v.search.value.length) {
                                sum[v.vBind.prop] = v.search.value.map(
                                    (v, k) => {
                                        // 结束时间需要 +1 天
                                        if (k === 1) {
                                            // v = new Date();
                                        }
                                        return parseInt(v / 1000);
                                    }
                                );
                            }
                            break;
                        default:
                            if (v.search.value[0]) {
                                sum[v.vBind.prop] = v.search.value[0];
                            }
                    }
                    return sum;
                }, {}),
                // 排序
                ...Object.keys(this.dataSort).reduce((sum, v) => {
                    if (this.dataSort[v]) {
                        sum[v] = this.dataSort[v];
                    }
                    return sum;
                }, {}),
            };
        },
        // 搜索相关
        // *******************************************************
        computedSearchColumn() {
            return this.propSearchColumn || 3;
        },
        // 表头-可搜索的
        computedTheadCanSearch() {
            return this.computedThead.filter((v) => {
                return v.search.can;
            });
        },
        // 表格相关
        // *******************************************************
        // 表头
        // 合并表头配置, props 优先
        computedThead() {
            const matched = [];
            const notMatched = [];

            this.dataThead.forEach((v) => {
                let res = this.propThead.find((vv) => {
                    return v.vBind.prop === vv.vBind?.prop;
                });

                if (res) {
                    matched.push(this.$_.merge(v, res));
                } else {
                    notMatched.push(v);
                }
            });
            return [...matched, ...notMatched];
        },
        computedTableVBind() {
            return {
                border: true,
                stripe: true,
                ...this.propTableVBind,
            };
        },
        computedTableVOn() {
            return {
                // 列-排序
                "sort-change": ({ column, order, prop }) => {
                    if (order) {
                        this.dataSort.order = {
                            ascending: "asc",
                            descending: "desc",
                        }[order];
                        this.dataSort.sort = prop;
                    } else {
                        this.dataSort.order = "";
                        this.dataSort.sort = "";
                    }

                    this.handleLoad();
                },
            };
        },
    },
    methods: {
        // init
        init() {
            this.initData();
            this.initAction();
        },
        initData() {
            Object.assign(
                this.dataPagination,
                {
                    "current-page": 1,
                    "page-size": 10,
                    total: 0,
                },
                this.propPagination
            );
        },
        initAction() {
            this.handleLoad();
        },
        // 搜索相关
        // *******************************************************
        handleSearchReset() {
            // 重置参数
            this.computedTheadCanSearch.forEach((v) => {
                v.search.value = [];
            });
            // 重新初始化
            this.initData();
        },
        // 表格相关
        // *******************************************************
        // pagesize
        async handleSizeChange(pagesize) {
            this.pagination["page-size"] = pagesize;
            this.handleLoad();
        },
        // page
        async handleCurrentChange(page) {
            this.pagination["current-page"] = page;
            this.handleLoad();
        },
        // load
        async handleLoad() {
            try {
                this.isLoading = true;

                let res = await this.$post(this.propUrl, this.computedParams);

                // 表体
                this.dataTbody = this.$utils.tools._.v(res, this.propTbodyPath);
                // 表头
                if (!this.dataThead.length && this.dataTbody.length) {
                    this.dataThead = Object.keys(this.dataTbody[0]).map((v) => {
                        return {
                            // 列-绑定
                            vBind: {
                                prop: v,
                                label: v,
                                sortable: "custom",
                            },
                            // 列-搜索
                            search: {
                                can: true,
                                type: "input",
                                vBind: {},
                                name: v,
                                value: [],
                            },
                        };
                    });
                }
                // 总数
                this.dataPagination.total = this.$utils.tools._.v(
                    res,
                    this.propTotalPath
                );
            } finally {
                this.isLoading = false;
            }
        },
    },
    created() {
        console.log(this);
        this.init();
    },
};
</script>

<style lang="less">
.kwn410tk_com {
    .kwn40fqs {
        width: 100%;
    }
}
</style>