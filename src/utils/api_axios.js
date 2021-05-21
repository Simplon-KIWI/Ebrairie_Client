import axios from 'axios'
const baseUrl = process.env.baseUrl

const handler = () =>  {
    const instance = axios.create({
        withCredentials : true,
        baseUrl : "http://localhost:3505"
    })

    return instance
}

export default handler;