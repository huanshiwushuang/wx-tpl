<template>
    <el-dialog
        title="收货地址"
        :visible.sync="dialogTableVisible"
        custom-class="kwqcgwcs"
    >
        <div>
            <el-table :data="gridData">
                <el-table-column
                    property="date"
                    label="日期"
                    width="150"
                ></el-table-column>
                <el-table-column
                    property="name"
                    label="姓名"
                    width="200"
                ></el-table-column>
                <el-table-column
                    property="address"
                    label="地址"
                ></el-table-column>
            </el-table>
        </div>
    </el-dialog>
</template>

<script>
// 暂未完成
// 考虑用 layer 替代
module.exports = {
    name: "wxDialog",
    data() {
        return {
            gridData: [
                {
                    date: "2016-05-02",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1518 弄",
                },
                {
                    date: "2016-05-04",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1518 弄",
                },
                {
                    date: "2016-05-01",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1518 弄",
                },
                {
                    date: "2016-05-03",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1518 弄",
                },
            ],
            dialogTableVisible: true,
            dialogFormVisible: false,
            form: {
                name: "",
                region: "",
                date1: "",
                date2: "",
                delivery: false,
                type: [],
                resource: "",
                desc: "",
            },
            formLabelWidth: "120px",
        };
    },
    created() {
        window.asd = this;
    },
    mounted() {
        // https://github.com/daybrush/moveable
        requirejs(["moveable"], (Moveable) => {
            const moveable = new Moveable(document.body, {
                target: document.querySelector(".kwqcgwcs"),
                draggable: true,
            });
            moveable.on("drag", (params) => {
                params.target.style.transform = params.transform;
            });
        });
    },
};
</script>

<style lang="less">
body {
    // reset moveable
    .moveable-control-box {
        display: none !important;
    }
}
.kwqcgwcs {
    // reset elementui
    .el-dialog__header {
        display: none;
    }
}
</style>