import { useEffect } from "react"
import { useHistory } from "react-router";
import axiosWithAuth from "../utils/axiosWithAuth";




const Logout = (props) =>{

    const { push } = useHistory()
    
    useEffect(()=>{

        axiosWithAuth()
            .post('/auth/logout')
            .then(res =>{
                localStorage.removeItem('Token');
                push('/login')
            })
            .catch(err=>{
                console.error(err)
            })
    }, [])
    return(<div>
        User Logged Out
    </div>)
}

export default Logout