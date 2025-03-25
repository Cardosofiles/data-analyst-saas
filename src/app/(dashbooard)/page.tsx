// import { UserButton } from "@/components/user-button";

import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex flex-col p-2">
      <UserButton afterSwitchSessionUrl="/" />
    </div>
  );
}
