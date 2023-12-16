import { collection, addDoc } from "firebase/firestore";
import { useCallback, useState } from "react"
import { auth, db } from "../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { ToastContainer, toast } from "react-toastify";





const ref = collection(db, "posts")

const AddComment = ({ post }) => {
    const [comment, setComment] = useState("");
    const [data, isLoading] = useCollectionData(ref);
    console.log(data);
    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        const user = auth.currentUser
        if (!comment) {
            toast.warning("Please write something!")
        } else {
            addDoc(ref, {
                comment,
                author: user.displayName,
                date: new Date(),
                post: post,
            })
            toast.success("Your comment has been sent.")
        }

        setComment("")
    }, [comment]);

    if (isLoading) {
        return <p className='font-semibold text-2xl text-center py-4'>Loading...</p>
    }
    const newData = data.filter((item) => item.post.post == post.post);
    console.log(newData);
    return (
        <div>
            <form onSubmit={handleSubmit} className="flex  items-center">
                <ToastContainer />
                <div className="my-4 flex gap-x-2">
                    <input className="bg-blue-200 p-3 font-mono outline-none text-2xl rounded-sm" value={comment} onChange={(e) => setComment(e.target.value)} type="text" />
                    <button className="p-3 text-2xl bg-blue-200  rounded-sm" onClick={handleSubmit}>Send</button>
                </div>
            </form>
            {
                newData.reverse().map((item) => (
                    <div className="text-white flex flex-col my-2">
                        
                      
                     
                        <p className="font-semibold text-2xl">  {item.comment}</p>
                     
                        <p className="text-gray-500 flex gap-x-1">Posted by <h3> {item.author}</h3>on<span>{new Date(item.date.seconds * 1000).toLocaleString()}</span></p>
                    </div>
                ))
            }
        </div>
    )
}
export default AddComment