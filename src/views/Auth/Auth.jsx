import LoginForm from "./components/Login";
import bgImage from "./../../assets/login_image.jpg";
import { Route, Routes } from "react-router-dom";
import SendRestoreEmail from "./components/SendRestoreEmail";
import UpdatePassword from "./components/UpdatePassword";
function Auth() {
  return (
    <div className="flex justify-start w-screen h-screen">
      <Routes>
        <Route path="/" element={<LoginForm/>} />
        <Route path="/restorePassword" element={<SendRestoreEmail/>} />
        <Route path="/updatePassword" element={<UpdatePassword/>} />
      </Routes>
      <div className="w-full h-full">
        <img src={bgImage} alt="" className="object-cover w-full h-full" />
      </div>
    </div>
  );
}

export default Auth;
