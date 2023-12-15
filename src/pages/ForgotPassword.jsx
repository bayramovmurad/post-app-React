import { sendPasswordResetEmail } from "firebase/auth"
import { useState, useCallback } from "react"
import { auth } from "../firebase";
import { ToastContainer,toast} from "react-toastify";



const ForgotPassword = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = useCallback((e) => {
        e.preventDefault(e);
        if (!email){
            return toast.warning("Please fill in the inputs.");
        }
        sendPasswordResetEmail(auth, email)
            .then(() => {
                toast.success("Link has been sent to your email")
            })
            .catch((error) => {
                console.error(error);
                alert("Something went wrong");
            });
    })

    return (
        <form className="w-[600px] mx-auto pt-4" onSubmit={ handleSubmit }>
            <ToastContainer/>
            <h3 className="text-center font-bold text-2xl pb-6">Forgot Password</h3>
          <div className="flex flex-col">
                <input placeholder="Enter an email" className="bg-blue-200 p-3 font-mono outline-none text-2xl rounded-sm mb-3" value={email} onChange={(e) => setEmail(e.target.value)} type="text" />
                <button className="p-1 bg-blue-200 rounded-sm w-full font-semibold">
                    Reset password!
                </button>
          </div>
        </form>
    )
}
export default ForgotPassword