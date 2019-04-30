import Axios from 'axios'
import urls from './URLS.js'
const api = {}
const size = 10
const appkey ={
    appkey: 'dongmeiqi_1547441744650'
}
api.findByPage = function(page=1) {
     return Axios.get(urls.baseURL + urls.findByPage,{
         params:{
             page,
             size,
             ...appkey
         }
     })
}
api.updateStu = function (data) {
    return Axios.get(urls.baseURL + urls.updateStu,{
        params:{
            ...appkey,
            ...data
        }
    })
}
api.delBySno = function (sNo) {
    return Axios.get(urls.baseURL + urls.delBySno,{
        params:{
            ...appkey,
            sNo
        }
    })
}
api.stuSearch = function (search,page=1){
    return Axios.get(urls.baseURL + urls.stuSearch,{
        params:{
            ...appkey,
            search,
            sex:-1,
            page,
            size
        }
    })
}
api.addStu = function (data) {
    return Axios.get(urls.baseURL + urls.addStu,{
        params:{
            ...appkey,
            ...data
        }
    })
}
export default api