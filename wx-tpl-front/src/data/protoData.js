import Vue from 'vue';
// cookie
import Cookie from "js-cookie";
// 请求
import request from '../request';
// 通用工具
import { str as toolsStr } from '../utils/tools'
// 自定义访 vuex store
import store2 from '../store2';
// vant
import {
    Toast,
} from 'vant';

export default {
    $vue: Vue,
    $win: window,
    // $ws: websocket,
    $axios: request,
    $cookie: Cookie,
    $get: request.get,
    $post: request.post,
    $strEncode: toolsStr.encode,
    $strDecode: toolsStr.decode,
    $toast: Toast,
    $store2: store2,
}