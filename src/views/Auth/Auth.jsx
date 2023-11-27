import LoginForm from "./components/Login";
import bgImage from "./../../assets/login_image.jpg";
function Auth() {
  return (
    <div className="flex justify-start w-screen h-screen">
      <LoginForm />
      <div className="w-full h-full">
        <img
          src={bgImage}
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}

export default Auth;
