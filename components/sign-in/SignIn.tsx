import {
  CustomInput as Input,
  CustomPasswordInput as PasswordInput,
  CustomCheckBox as CheckBox,
} from "@/lib/AntDesignComponents";
import Link from "next/link";

const SignIn = () => {
  return (
    <div className="p-5 flex flex-col space-y-2 items-center w-full md:w-[500px]  mx-auto shadow-md bg-white">
      <h1 className=" text-blue-500 text-[24px] font-bold leading-10">
        Sign In
      </h1>
      <h5 className=" text-slate-600 text-lg font-normal leading-relaxed tracking-tight">
        Login to your account
      </h5>
      <form className="w-full space-y-5">
        <div className="w-full flex flex-col items-start justify-start gap-[0.2rem]">
          <label
            htmlFor="email"
            className="text-[#181336] text-[16px] font-[600]"
          >
            Email Address
          </label>
          <Input
            className="w-full authInput"
            placeholder="This is a placeholder"
            id="email"
            type="email"
          />
        </div>
        <div className="w-full flex flex-col items-start justify-start gap-[0.2rem]">
          <label
            htmlFor="password"
            className="text-[#181336] text-[16px] font-[600]"
          >
            Password
          </label>
          <PasswordInput
            className="w-full"
            placeholder="This is a placeholder"
            id="password"
            type="password"
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start gap-[0.2rem]">
            <CheckBox id="check" />
            <label
              htmlFor="check"
              className="text-[14px] font-[400] text-[#515B6F]"
            >
              Keep me logged in
            </label>
          </div>
          <Link
            href="reset-password"
            className="text-[14px] font-[400] text-[#515B6F]"
          >
            Forget password?
          </Link>
        </div>
        <Link href="/dashboard"  className="btn w-full bg-blue-500 hover:bg-blue-500/70 text-white">Log in</Link>
      </form>
    </div>
  );
};

export default SignIn;
