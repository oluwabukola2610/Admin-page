import Navigation from "@/components/layouts/Navigation";
import SignIn from "@/components/sign-in/SignIn";

export default function Home() {
  return (
    <Navigation>
      <div className="max-w-[1640px] mx-2 md:mx-auto h-full">
        <SignIn />
      </div>
    </Navigation>
  );
}
