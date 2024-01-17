import axios from "axios";

const instance = axios.create({
    baseURL : 'https://port-0-sns-app-back-koh2xlj3ufoqd.sel4.cloudtype.app'
})

export default instance

