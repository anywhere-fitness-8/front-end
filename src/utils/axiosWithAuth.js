import axios from "axios";


const axiosWithAuth = ()=>{
    const token = localStorage.getItem('Token')

    return axios.create({
        headers:{
            authorization: token
        },
        baseURL: 'https://anywhere-fitness-8.herokuapp.com/api'
    })
}

export default axiosWithAuth