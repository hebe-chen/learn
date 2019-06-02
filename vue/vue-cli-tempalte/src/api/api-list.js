import $axios from "@/api/aixos";

export default {
  getInfo(params){
    return $axios.post('/user/login',params)
  }
}