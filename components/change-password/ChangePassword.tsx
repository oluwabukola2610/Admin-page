import {
  CustomPasswordInput as PasswordInput,
} from "@/lib/AntDesignComponents";

const ChangePassword = () => {
  return (
    <div className="p-5 space-y-3 flex flex-col items-center w-full md:w-[500px]  mx-auto shadow-md bg-white">
      <h1 className=" text-blue-500 text-[24px] font-bold leading-10">
        Change Password
      </h1>
      <h5 className="text-center text-slate-600  font-normal leading-[25px] tracking-tight">
        Your new password must be different from previous used passwords.
      </h5>
      <form className="w-full space-y-5">
        <div className="w-full mx-auto flex flex-col items-start justify-start gap-[0.2rem]">
          <label
            htmlFor="password"
            className="text-[#181336] text-[16px] font-[600]"
          >
            Password
          </label>
          <PasswordInput
            className=""
            placeholder="This is a placeholder"
            id="password"
            type="password"
          />
        </div>
        <div className="w-full mx-auto flex flex-col items-start justify-start gap-[0.2rem]">
          <label
            htmlFor="confirmpassword"
            className="text-[#181336] text-[16px] font-[600]"
          >
            Confirm Password
          </label>
          <PasswordInput
            className=""
            placeholder="This is a placeholder"
            id="confirmpassword"
            type="password"
          />
        </div>
        <button className="btn w-full bg-blue-500 hover:bg-blue-500/70 text-white ">
          Change password{" "}
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
