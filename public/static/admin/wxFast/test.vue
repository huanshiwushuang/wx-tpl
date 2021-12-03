<template>
    <div class="kwlnas0e">
        <v-chart class="kwk2oztz" :option="chart"></v-chart>
        <hr />
        <wx-table-pagination
            prop-url="/admin/test"
            prop-tbody-path="json.data.list"
            prop-total-path="json.data.count"
            :prop-thead="propThead"
        >
            <template slot="el-table-column-before">
                <el-table-column type="selection"> </el-table-column>
                <el-table-column type="index" label="序号"> </el-table-column>
            </template>

            <div slot="url" slot-scope="{ row, column }">
                <a :href="row[column.property]" target="_blank">
                    {{ row[column.property] }}
                </a>
            </div>

            <div slot="operate" slot-scope="{ row, column }">
                <el-button type="primary">操作</el-button>
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
            propThead: [
                {
                    vBind: {
                        prop: "id",
                        label: "ID",
                    },
                    search: {
                        can: true,
                        type: "date-picker-daterange",
                    },
                },
                {
                    vBind: {
                        prop: "name",
                        label: "名字",
                    },
                    search: {
                        type: "select",
                        options: [
                            {
                                label: "123",
                                value: "456",
                            },
                        ],
                    },
                },
                {
                    vBind: {
                        prop: "operate",
                        label: "操作",
                    },
                },
            ],
        };
    },
};
</script>

<style lang="less">
.kwk2oztz {
    height: 400px;
}
</style>