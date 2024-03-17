import { useState } from "react";

const Verification = (history) => {
    const[code,setCode]= useState('')

    const handleSubmit = (e) =>{
        e.preventDefault();
        history.push('./login')
    }
  return (
    <div className="flex flex-col  border-solid border-gray-300 border-2 p-4 rounded-3xl w-[586px] h-[400px] mx-[480px] my-6">
        <h1 className="text-2xl font-bold px-[170px] py-[20px]">Verify your email</h1>
        <p className="text-sm font-medium px-32">Enter the 8 digit code you have received on</p>
        <form onSubmit={handleSubmit} className=" py-8">
            <div className=" px-20 py-3">
                <label htmlFor="code">Code</label>
                <input type="text" id="code" placeholder="Enter" value={code} onChange={(e) => setCode(e.target.value)} className="flex flex-col border-gray-300 border-2 rounded-md w-[356px] h-[36px] my-1 p-4" required />
            </div>
            <button type="submit" className=" bg-black text-white w-[356px] h-[50px] rounded-md text-sm px-3 mx-20 my-10">VERIFY</button>
        </form>
    </div>
  )
}

export default Verification