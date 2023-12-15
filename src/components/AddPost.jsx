import { collection, addDoc,serverTimestamp } from "firebase/firestore"
import { useCallback, useState } from "react"
import { auth, db } from "../firebase"
import { ToastContainer,toast } from "react-toastify"



const ref = collection(db, "posts")

const AddPost = () => {
    const [post, setPost] = useState("");
    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        const user = auth.currentUser
       if(!post){
           toast.warning("Please write something!")
       }else{
           addDoc(ref, {
               post,
               timestamp: serverTimestamp(),
               author: user.displayName,
           });
           toast.success("Your post has been sent.")
       }
       setPost("")
    }, [post])
    return (
        <form onSubmit={handleSubmit} className=" mx-auto pt-4">
            <ToastContainer/>
            <div className="flex items-center justify-start gap-x-2">
                <input className="bg-blue-200 p-3 ml-20 font-mono outline-none text-2xl rounded-sm" value={post} onChange={(e) => setPost(e.target.value)} type="text" placeholder="Enter a post..." />
                <button className="p-3 bg-blue-200 text-2xl  rounded-sm" type="submit">Send</button>
            </div>
        </form>
    )
}
export default AddPost