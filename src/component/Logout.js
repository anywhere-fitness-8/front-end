import { useEffect } from "react"
import { useHistory } from "react-router";
import axiosWithAuth from "../utils/axiosWithAuth";




const Logout = (props) =>{

    const { push } = useHistory()
    
    useEffect(()=>{
        localStorage.removeItem('token');
        push('/login')
    }, [])
    return(<div>
        User Logged Out
    </div>)
}

export default Logout