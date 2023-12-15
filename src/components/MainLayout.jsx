import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from '../firebase';
import { Navigate, Outlet } from 'react-router-dom';

const MainLayout = () => {
    const [user,isLoading] = useAuthState(auth);

    if(isLoading){
        return <p className='font-semibold text-2xl text-center py-4'>Loading...</p>
    }
    if(!user){
        return <Navigate to="/sign-in" replace/>
    }
  return <Outlet/>
}
export default MainLayout