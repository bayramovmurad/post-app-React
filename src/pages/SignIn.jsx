import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { useState, useCallback } from "react";
import { ToastContainer,toast } from "react-toastify";




const SignIn = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        if (!email || !password) {
            return toast.warning("Please fill in the inputs.")
        }
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigate("/");
            })
            .catch((error) => {
                console.error(error);
                toast.error("Failed to sign in. Check your credentials and try again.");
            });
    }, [email, password]);

    return (
        <form className="w-[600px] mx-auto pt-4" onSubmit={handleSubmit}>
            <ToastContainer/>
            <h3 className="text-center font-bold text-2xl pb-6">Sign In</h3>
            <div className="flex flex-col">
                <input
                    className="bg-blue-200 p-3 font-mono outline-none text-2xl rounded-sm mb-3"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
                <input
                    className="bg-blue-200 p-3 font-mono outline-none text-2xl rounded-sm mb-2"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button className="p-1 bg-blue-200 font-semibold rounded-sm" type="submit">Log In</button>
            </div>
          <div className="flex justify-between gap-x-2 mt-2">
                <button className="p-1 bg-blue-200 text-xs rounded-sm w-full font-semibold" onClick={() => navigate("/forgot-password")}>
                    Forgot Password?
                </button>
                <button className="p-1 bg-blue-200 text-xs rounded-sm w-full font-semibold" onClick={() => navigate("/sign-up")}>
                    Create an account!
                </button>
          </div>

        </form>
    );
};

export default SignIn;
