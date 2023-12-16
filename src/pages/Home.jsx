import { signOut } from "firebase/auth"
import { useCallback } from "react"
import { auth } from "../firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import Posts from "./Posts"
import AddPost from "../components/AddPost"
import UserInfo from "../components/UserInfo"
import { useGlobalContext } from "../context"



const Home = () => {
    const {isLoading} = useGlobalContext();

    if(isLoading){
        return <p className='font-semibold text-2xl text-center py-4'>Loading...</p>
    }
   
  return (
    <div>
          <UserInfo/>
          <div>
            <AddPost/>
            <Posts/>
          </div>
    </div>
  )
}
export default Home