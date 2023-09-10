import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useToast } from "@/shad-components/ui/use-toast";
import axios from "axios";
import { backendURL } from "@/constants/apiConst";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setUserDetails } from "@/redux/slices/userSlice";

function LandingPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { toast } = useToast();
  const loginUser = async (credential: string | undefined) => {
    const resData = await axios.get(`${backendURL}/users/credentials/${credential}`);
    localStorage.setItem("medical-auth-token", resData.headers["auth-token"]);
    dispatch(setUserDetails({ email: resData.data?.email, image: resData.data?.image, name: resData.data?.name, _id: resData.data?._id }));
    console.log(resData);
    toast({
      title: "Success",
      description: "Redirecting you to Dashboard",
      className: "bg-white",
    });
    router.push("/dashboard");
  };
  return (
    <div className="bg-blue-600 min-h-screen flex items-center justify-center">
      <div className="bg-white p-20 rounded flex flex-col items-center">
        <img src="/logo.png" className="w-40 h-32" />
        <p className="text-slate-600 font-bold text-2xl mb-4">Login</p>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            loginUser(credentialResponse?.credential);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </div>
    </div>
  );
}

export default LandingPage;
