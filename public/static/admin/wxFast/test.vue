<template>
    <div class="kwlnas0e">
        <v-chart class="kwk2oztz" :option="chart"></v-chart>
        <hr />
        <wx-table-pagination
            prop-url="/admin/test"
            prop-tbody-path="json.data.list"
            prop-total-path="json.data.count"
            :prop-thead="[
                {
                    vBind: {
                        prop: 'id',
                        label: 'ID',
                    },
                    search: {
                        can: true,
                        type: 'date-picker-daterange',
                    },
                },
                {
                    vBind: {
                        prop: 'name',
                        label: '名字',
                    },
                    search: {
                        type: 'select',
                        options: [
                            {
                                label: '123',
                                value: '456',
                            },
                        ],
                    },
                },
                {
                    vBind: {
                        prop: 'operate',
                        label: '操作',
                    },
                }
            ]"
        >
            <div slot="url" slot-scope="{ row, column }">
                <wx-router-link :href="row[column.property]"
                    target="_blank"
                >
                    {{ row[column.property] }}
                </wx-router-link>
            </div>
            <div slot="operate" slot-scope="{ row, column }">
                <el-button>操作</el-button>
            </div>
        </wx-table-pagination>
    </div>
</template>
<script>
module.exports = {
    name: "test",
    data() {
        return {
            chart: {
                xAxis: {
                    type: "category",
                    boundaryGap: false,
                    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                },
                yAxis: {
                    type: "value",
                },
                series: [
                    {
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        type: "line",
                        areaStyle: {},
                    },
                ],
            },
        };
    },
};
</script>

<style lang="less">
.kwk2oztz {
    height: 400px;
}
</style>