import Navigation from "@/components/layouts/Navigation";
import ResetPassword from "@/components/reset-password/ResetPassword";
const resetPassword = () => {
  return (
    <Navigation>
      <div className="max-w-[1640px] mx-2 md:mx-auto h-full">
        <ResetPassword />
      </div>
    </Navigation>
  );
};

export default resetPassword;
