<template>
    <div class="kwlnas0e">
        <v-chart
            class="kwk2oztz"
            :option="chart"
        ></v-chart>
        <hr>
        <wx-table-pagination
            prop-url="/admin/test"
            prop-tbody-path="json.data.list"
            prop-total-path="json.data.count"
            :prop-search-column="4"
            :prop-thead="[
                {
                    vBind: {
                        prop: 'id',
                        label: 'ID',
                    },
                    search: {
                        can: true,
                        type: 'date-picker',
                    }
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
                                value: '456'
                            }
                        ]
                    }
                }
            ]"
        >
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