// import SignInComponent from "@/components/sign-in";
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full flex flex-col items-center justify-center mt-4">
        {/* <SignInComponent /> */}
        <SignIn />
      </div>
      <div className="h-full hidden lg:flex items-center justify-center bg-zinc-900">
        <h1 className="text-white text-4xl font-bold">SaaS Análise de Dados</h1>
      </div>
    </div>
  );
}
