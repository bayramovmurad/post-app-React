import { Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import ForgotPassword from "./pages/ForgotPassword"
import MainLayout from "./components/MainLayout"
import AuthLayout from "./components/AuthLayout"
import PostDetail from "./pages/PostDetail"

const App = () => {
  return (
   <div className="bg-purple-300 h-screen">
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/post-detail" element={<PostDetail />} />
        </Route>
              
       <Route path="/" element={<AuthLayout/>}>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
       </Route>
      </Routes>
   </div>
  )
}
export default App