import ChangePassword from "@/components/change-password/ChangePassword";
import Navigation from "@/components/layouts/Navigation";
const changePassword = () => {
  return (
    <Navigation>
      <div className="max-w-[1640px] mx-2 md:mx-auto h-full">
        <ChangePassword />
      </div>
    </Navigation>
  );
};

export default changePassword;
