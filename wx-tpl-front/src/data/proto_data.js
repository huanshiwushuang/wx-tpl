import Vue from 'vue';
// cookie
import Cookie from "js-cookie";
// 请求
import request from '../request';
// 通用工具
import { str as tools_str } from '../utils/tools'
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
    $str_encode: tools_str.encode,
    $str_decode: tools_str.decode,
    $toast: Toast,
}