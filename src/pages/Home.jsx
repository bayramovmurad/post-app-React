import { signOut } from "firebase/auth"
import { useCallback } from "react"
import { auth } from "../firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import Posts from "./Posts"
import AddPost from "../components/AddPost"
import UserInfo from "../components/UserInfo"



const Home = () => {
    const [user,isLoading] = useAuthState(auth);

    if(isLoading){
        return <p className='font-semibold text-2xl text-center py-4'>Loading...</p>
    }
    const handleSignOut = useCallback((e)=>{
        const confirmSignOut = window.confirm("Are you sure you want to sign out?");
        if(confirmSignOut){
            signOut(auth)
        }
        e.preventDefault();
        
    },[user])
  return (
    <div>
          <UserInfo user={user} handleSignOut={handleSignOut}/>
          <div>
            <AddPost/>
            <Posts/>
          </div>
    </div>
  )
}
export default Home