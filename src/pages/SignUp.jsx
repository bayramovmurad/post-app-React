import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { useCallback, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { auth } from "../firebase"
import { ToastContainer,toast} from "react-toastify"




const SignUp = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        if (!name || !email || !password) {
            return toast.warning("Please fill in the inputs.");
        }
        createUserWithEmailAndPassword(auth, email, password).then((auth) => {
            updateProfile(auth.user, {displayName:name});
            <Navigate to="/sign-in" />
          })

        .catch((error) => {
            console.error(error);
            toast.error("Something went wrong");
        },);
       
    },[name,email,password])

    return (
        <form className="w-[600px] mx-auto pt-4" onSubmit={handleSubmit}>
            <ToastContainer/>
            <h3 className="text-center font-bold text-2xl pb-6">Sign Up</h3>
            <div className="flex flex-col">
                <input placeholder="Enter an name!" className="bg-blue-200 p-3 font-mono outline-none text-2xl rounded-sm mb-3" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <input placeholder="Enter an email!" className="bg-blue-200 p-3 font-mono outline-none text-2xl rounded-sm mb-3" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input placeholder="Enter an password!" className="bg-blue-200 p-3 font-mono outline-none text-2xl rounded-sm mb-3" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className="p-1 bg-blue-200 rounded-sm w-full font-semibold"  type="submit">Sign Up</button>
            </div>
         
                <button className=" bg-blue-200 rounded-sm text-xs w-full  font-semibold my-1" onClick={() => navigate("/sign-in")}>
                    Are you have an account?
                </button>
         
        </form>
    )
}
export default SignUp