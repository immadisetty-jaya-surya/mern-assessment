import { useState } from "react";
import {useNavigate} from "react-router-dom";
import OtpInput from 'react-otp-input'
import axios from "axios";

const Verification = () => {
    const history = useNavigate()
    const[code,setCode]= useState('')
    const handleChange = (code) =>{
        setCode(code)
    }

    const sendRequest = async ()=>{
        const res = await axios.post('http://localhost:5000/api/verifyOtp',{
            email:'suryaimmadisetty65@gmail.com',otp:code
        }).catch((error)=> console.log(error));
        const data = await res.data
        return data
            // console.log(res.data);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        sendRequest().then(() => history("/Login"))
    }
  return (
    <div className="flex flex-col  border-solid border-gray-300 border-[1px] p-4 rounded-3xl w-[586px] h-[400px] mx-[480px] my-6">
        <h1 className="text-2xl font-bold px-[170px] py-[20px]">Verify your email</h1>
        <p className="text-sm font-medium px-32">Enter the 8 digit code you have received on</p>
        <form onSubmit={handleSubmit} className=" py-8">
            <div className=" px-20 py-3">
                <label htmlFor="code">Code</label>
                <OtpInput 
                numInputs={8} 
                inputStyle={{
                    width: '46px',  
                    height: '48px',  
                    margin: '2px 1px',  
                    fontSize: '1rem',  
                    borderRadius: 6,  
                    border: '1px solid rgba(193,193,193,1)',
                }} 
                renderSeparator={<span className="mx-1"></span>} 
                renderInput={(props) => <input {...props} />}
                value={code} 
                onChange={handleChange}  />
            </div>
            <button type="submit" className=" bg-black text-white w-[440px] h-[50px] rounded-md text-sm px-3 mx-20 my-10">VERIFY</button>
        </form>
    </div>
  )
}

export default Verification