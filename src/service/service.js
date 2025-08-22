import axios from 'axios';
let server="http://localhost:3000"
export let Login = async (email,password) => {
        let report=await axios.post(`${server}/login`,{email,password});
        return report.data;
}

