import { useState } from "react"
import { Link } from "react-router-dom"
// import Login from "../Login"

const Signup = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault();
        history.push('/verify-email')
    }
  return (
    <div className="flex flex-col  border-solid border-gray-300 border-2 p-4 rounded-3xl w-[586px] h-[525px] mx-[480px] my-6">
        <h2 className=" text-2xl font-bold mx-[155px] my-1">Create your account</h2>
        <form onSubmit={handleSubmit} className=" py-1">
            <div className=" px-20 py-3">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Enter" value={name} onChange={(e) => setName(e.target.value)} className="flex flex-col border-gray-300 border-2 rounded-md w-[356px] h-[36px] my-1 p-4" />
            </div>
            <div className="px-20 py-3">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter" value={email} onChange={(e) => setEmail(e.target.value)} className="flex flex-col border-gray-300 border-2 rounded-md w-[356px] h-[36px] my-1 p-4" />
            </div>
            <div className="px-20 py-3">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Enter" value={password} onChange={(e) => setPassword(e.target.value)} className="flex flex-col border-gray-300 border-2 rounded-md w-[356px] h-[36px] my-1 p-4" />
            </div>
            <button type="submit" className=" bg-black text-white w-[356px] h-[36px] rounded-md text-sm px-3 mx-20 my-4">CREATE ACCOUNT</button>
        </form>
        <p className="px-40 py-4">Have an Account? <Link to='../Login'>Login</Link> </p>
    </div>
  )
}

export default Signup