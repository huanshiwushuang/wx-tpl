<template>
    <div
        v-loading="isLoading"
        class="kwn410tk_com"
    >
        <!-- 列搜索 -->
        <div
            v-show="computedTheadCanSearch.length && config.showSearch"
            class="mb10"
        >
            <el-descriptions
                :column="computedSearchColumn"
                border
                class="kwovgs17"
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
                    <!-- date-picker daterange -->
                    <template v-else-if="v.search.type === 'date-picker-daterange'">
                        <el-date-picker
                            v-model="v.search.value"
                            class="kwn40fqs"
                            type="daterange"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                            :picker-options="dateRangePickerOptions"
                            :unlink-panels="true"
                            :default-time="['00:00:00', '23:59:59']"
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
                    @click="handleSearch"
                > 搜索 </el-button>
            </div>
        </div>

        <!-- 操作行 -->
        <div class="df jcsb aic mt10 mb10">
            <div>
                <!-- 刷新 -->
                <el-button
                    type="info"
                    @click="handleLoad"
                >
                    <i class="el-icon-refresh"></i>
                </el-button>
            </div>
            <div class="df">
                <!-- 自定义列 -->
                <el-popover
                    trigger="click"
                    placement="bottom-end"
                    popper-class="kwou1hu6"
                >
                    <el-button slot="reference">
                        自定义
                        {{
                            `${computedTheadChecked.length} / ${dataThead.length}`
                        }}
                    </el-button>
                    <div>
                        <div
                            v-for="(v, k) in dataThead"
                            :key="k"
                        >
                            <el-checkbox
                                v-model="v.hold.isChecked"
                                class="w"
                                @change="handleCustomColumnChange($event, v)"
                            >
                                {{ v.vBind.label }}
                            </el-checkbox>
                        </div>
                    </div>
                </el-popover>

                <!-- 搜索 -->
                <el-button
                    v-if="computedTheadCanSearch.length"
                    type="primary"
                    @click="config.showSearch = !config.showSearch"
                    class="ml10"
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
                v-for="(v, k) in computedTheadChecked"
                :key="v.id || k"
                v-bind="v.vBind"
            >
                <template slot-scope="scope">
                    <slot
                        :name="v.vBind.prop"
                        v-bind="scope"
                    >
                        {{ scope.row[scope.column.property] }}
                    </slot>
                </template>
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
            // config
            config: {
                showSearch: false,
            },
            // 搜索相关
            // *******************************************************
            dateRangePickerOptions: {
                shortcuts: [
                    {
                        text: "今天",
                        onClick(picker) {
                            const start = new Date();
                            const end = new Date();
                            start.setHours(0);
                            start.setMinutes(0);
                            start.setSeconds(0);

                            end.setHours(23);
                            end.setMinutes(59);
                            end.setSeconds(59);
                            picker.$emit("pick", [start, end]);
                        },
                    },
                    {
                        text: "昨天",
                        onClick(picker) {
                            const start = new Date();
                            const end = new Date();

                            start.setHours(0);
                            start.setMinutes(0);
                            start.setSeconds(0);
                            start.setTime(
                                start.getTime() - 3600 * 1000 * 24 * 1
                            );

                            end.setTime(end.getTime() - 3600 * 1000 * 24 * 1);
                            end.setHours(23);
                            end.setMinutes(59);
                            end.setSeconds(59);

                            picker.$emit("pick", [start, end]);
                        },
                    },
                    {
                        text: "最近一周",
                        onClick(picker) {
                            const start = new Date();
                            const end = new Date();

                            start.setHours(0);
                            start.setMinutes(0);
                            start.setSeconds(0);
                            start.setTime(
                                start.getTime() - 3600 * 1000 * 24 * 7
                            );

                            end.setHours(23);
                            end.setMinutes(59);
                            end.setSeconds(59);

                            picker.$emit("pick", [start, end]);
                        },
                    },
                    {
                        text: "最近一个月",
                        onClick(picker) {
                            const start = new Date();
                            const end = new Date();

                            start.setHours(0);
                            start.setMinutes(0);
                            start.setSeconds(0);
                            start.setTime(
                                start.getTime() - 3600 * 1000 * 24 * 30
                            );

                            end.setHours(23);
                            end.setMinutes(59);
                            end.setSeconds(59);

                            picker.$emit("pick", [start, end]);
                        },
                    },
                    {
                        text: "最近三个月",
                        onClick(picker) {
                            const start = new Date();
                            const end = new Date();

                            start.setHours(0);
                            start.setMinutes(0);
                            start.setSeconds(0);
                            start.setTime(
                                start.getTime() - 3600 * 1000 * 24 * 90
                            );

                            end.setHours(23);
                            end.setMinutes(59);
                            end.setSeconds(59);

                            picker.$emit("pick", [start, end]);
                        },
                    },
                ],
            },
            // 表格相关
            // *******************************************************
            // 表头
            dataTheadDefault: [],
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
            dataPagination: {
                "current-page": 1,
                "page-size": 10,
                background: true,
                total: 0,
            },
        };
    },
    computed: {
        // 参数
        computedParams() {
            return {
                page: this.dataPagination["current-page"],
                pagesize: this.dataPagination["page-size"],
                // 列-搜索
                ...this.computedTheadCanSearch.reduce((sum, v) => {
                    switch (v.search.type) {
                        case "date-picker-daterange":
                            // 如果选择了时间
                            if (v.search.value.length) {
                                sum[v.vBind.prop] = v.search.value.map((vv) => {
                                    return parseInt(vv.getTime() / 1000);
                                });
                            }
                            break;
                        default:
                            if (v.search.value[0]) {
                                sum[v.vBind.prop] = v.search.value[0];
                            }
                    }
                    return sum;
                }, {}),
                // 列-排序
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
            return this.dataThead.filter((v) => {
                return v.search.can;
            });
        },
        // 表格相关
        // *******************************************************
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

                    this.handleSearch();
                },
            };
        },
        computedTheadChecked() {
            return this.dataThead.filter((v) => v.hold.isChecked);
        },
    },
    methods: {
        // 初始化组件-同步数据
        initSyncData() {
            // 分页
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
        // 初始化组件-异步数据
        async initAsyncData() {
            // 获取数据
            await this.handleLoad();
        },
        // 初始化组件-props数据
        initPropData() {
            this.mergeThead();
        },
        // 合并表头
        // default + prop = use
        mergeThead() {
            const res = [];

            // 合并内外表头, 提取所有 prop
            const allProps = [
                ...[...this.propThead, ...this.dataTheadDefault].reduce(
                    (sum, v) => {
                        sum.add(v.vBind.prop);
                        return sum;
                    },
                    new Set()
                ),
            ];
            allProps.forEach((v) => {
                const propRes = this.propThead.find((vv) => {
                    return v === vv.vBind?.prop;
                });
                const dataRes = this.dataTheadDefault.find((vv) => {
                    return v === vv.vBind.prop;
                });

                if (propRes) {
                    if (dataRes) {
                        res.push(this.$_.merge({}, dataRes, propRes));
                    } else {
                        res.push(this.makeUpThead(propRes));
                    }
                } else {
                    res.push(dataRes);
                }
            });

            this.dataThead = res;
        },
        // 完善 thead 数据
        makeUpThead(theadData) {
            return this.$_.merge(
                {},
                theadData,
                {
                    // 列-绑定
                    vBind: {
                        prop: "default",
                        label: "default",
                        sortable: "custom",
                    },
                    // 列-搜索
                    search: {
                        can: false,
                        type: "input",
                        value: [],
                    },
                    // 序列化 ID, 用于自定义列状态本地保持
                    // holdId
                    // 持久化数据
                    hold: {
                        isChecked: true,
                    },
                },
                {
                    ...theadData,
                    hold: this.local.value[theadData.holdId] || {},
                }
            );
        },
        // 搜索相关
        // *******************************************************
        handleSearchReset() {
            // 重置参数
            this.computedTheadCanSearch.forEach((v) => {
                v.search.value = [];
            });
            // 重新初始化
            this.initSyncData();
        },
        handleSearch() {
            this.initSyncData();
            this.initAsyncData();
        },
        // 表格相关
        // *******************************************************
        // pagesize
        async handleSizeChange(pagesize) {
            this.dataPagination["page-size"] = pagesize;
            this.handleLoad();
        },
        // page
        async handleCurrentChange(page) {
            this.dataPagination["current-page"] = page;
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
                    this.dataTheadDefault = Object.keys(this.dataTbody[0]).map(
                        (v) => {
                            return this.makeUpThead({
                                // 列-绑定
                                vBind: {
                                    prop: v,
                                    label: v,
                                    sortable: "custom",
                                },
                            });
                        }
                    );
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
        // 自定义列切换
        handleCustomColumnChange(e, v) {
            // 如果有本地序列化 id
            if (v.holdId) {
                this.local.set({
                    [v.holdId]: {
                        isChecked: e,
                    },
                });
            }
        },
    },
    async created() {
        this.initSyncData();
        await this.initAsyncData();
        this.initPropData();
    },
};
</script>

<style lang="less">
.kwn410tk_com {
    .kwn40fqs {
        width: 100%;
    }
}
.kwovgs17 {
    // reset elementui
    .el-input__inner {
        border: 0;
    }
}
.kwou1hu6 {
    box-sizing: border-box;
    line-height: 1.8;
}
</style>