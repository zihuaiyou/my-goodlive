import store from '../redux/store'
import { setLoginAction } from '../redux/actions'

/**
 * 读取存储在本地的登录信息
 */
if (localStorage.getItem('my-goodlive')) {
    store.dispatch(setLoginAction(JSON.parse(localStorage.getItem('my-goodlive'))))
}