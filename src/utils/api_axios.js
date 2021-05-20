import axios from 'axios'
const baseUrl = process.env.baseUrl

const handler = () =>  {
    const instance = axios.create({
        withCredentials : true,
        baseUrl : "http://localhost:8888"
    })

    return instance
}

export default handler;