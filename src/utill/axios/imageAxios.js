import axios from "axios";

const imageInstance = axios.create({
    baseURL : 'https://port-0-sns-app-back-koh2xlj3ufoqd.sel4.cloudtype.app',
    headers : {
        'Content-Type' : 'multipart/form-data'
    }
})

export default imageInstance
