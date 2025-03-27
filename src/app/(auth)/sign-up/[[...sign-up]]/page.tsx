// import SignUpComponent from "@/components/sign-up";
import { SignUp } from "@clerk/nextjs";

export default function SignUpage() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 md:mt-16">
      <div className="h-full flex flex-col items-center justify-center px-4">
        {/* <SignUpComponent /> */}
        <SignUp />
      </div>
    </div>
  );
}
