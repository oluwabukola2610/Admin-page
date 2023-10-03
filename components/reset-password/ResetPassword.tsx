import {
  CustomInput as Input,
} from "@/lib/AntDesignComponents";
import Link from "next/link";

const ResetPassword = () => {
  return (
    <div className="p-5 space-y-4 flex flex-col items-center w-full md:w-[500px]  mx-auto shadow-md bg-white">
      <h1 className=" text-blue-500 text-[28px] font-bold leading-10">
        Reset Password
      </h1>
      <h5 className="text-center text-slate-600  font-normal leading-[25px] tracking-tight">
        Enter the email associated with your account and we’ll send an email
        with instruction to reset your Password.
      </h5>
      <form className="w-full space-y-5">
        <div className="w-full mx-auto flex flex-col items-start justify-start gap-[0.2rem]">
          <label
            htmlFor="email"
            className="text-[#181336] text-[16px] font-[600]"
          >
            Email Address
          </label>
          <Input
            className="authInput"
            placeholder="This is a placeholder"
            id="email"
            type="email"
          />
        </div>
        <button className="btn w-full bg-blue-500 hover:bg-blue-500/70 text-white ">
          Send reset link
        </button>
        <div className="text-[#515B6F] text-sm">
          Remembered your password ? kindly{" "}
          <Link href="/" className="text-blue-500">
            click here
          </Link>{" "}
          to Login
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
