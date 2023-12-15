import { collection ,query,orderBy} from 'firebase/firestore'
import {useCollectionData} from 'react-firebase-hooks/firestore'
import { db } from '../firebase'
import { useNavigate } from 'react-router-dom'





const Posts = () => {
    const navigate = useNavigate()
    const postsRef = collection(db, 'posts');
    const queryRef = query(postsRef, orderBy('timestamp', 'desc'));
    const [data, isLoading] = useCollectionData(queryRef);

    if(isLoading){
        return <p className='font-semibold text-2xl text-center my-4'>Loading...</p>
    }
  return (
    <div>
        {
            data?.map((post)=> (
                <div className='ml-20 my-3' key={post.id} onClick={()=> navigate("/post-detail/", {state:{post}})}>
                    <h3 className='font-semibold text-2xl'>{post.post}</h3>
                    <p className='text-sm text-gray-500 font-semibold'>
                        Posted by {post.author} on {post.timestamp && post.timestamp.toDate().toLocaleString()}
                    </p>
                </div>
            ))
        }
    </div>
  )
}
export default Posts