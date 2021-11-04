import Axios from 'axios';

const res = {
};

export default {
    ...res,
    // 返回指定数量的 img url
    // https://api.ixiaowai.cn/
    async get_pic(count) {
        const arr = [];
        for (let i = 0; i < count; i++) {
            arr.push(
                Axios.get('https://api.ixiaowai.cn/api/api.php?return=json')
            );
        }
        let res = await Promise.all(arr);
        return res.map(i => i.data.imgurl);
    },
    // 返回指定数量的 古诗词句
    async get_juzi(count) {
        let res = [];
        for (let i = 0; i < count; i++) {
            res.push(
                Axios.get('https://open.saintic.com/api/sentence/')
            );
        }
        res = await Promise.all(res);
        return res.map(i => {
            return {
                ...i.data.data,
                content: i.data.data.sentence,
            }
        });
    },
    // 返回指定数量的 头像
    async get_head(count) {
        const arr = [];
        for (let i = 0; i < count; i++) {
            arr.push(
                `https://api.prodless.com/avatar.png`
            );
        }
        return arr;
    }
}