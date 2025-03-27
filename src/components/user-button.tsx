"use client";

import { UserProfile, useUser } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import { useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function UserButton() {
  const { isLoaded, isSignedIn, user } = useUser();
  const [openProfile, setOpenProfile] = useState(false);

  if (!isLoaded) {
    return (
      <div>
        <Loader2 className="animate-spin" />
      </div>
    );
  }

  if (!isSignedIn) {
    return <div>Usuário não autenticado</div>;
  }

  function signOut(arg0: { redirectUrl: string }): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative size-8 rounded-full">
            <Avatar className="size-8">
              <AvatarImage src={user.imageUrl} />
              <AvatarFallback>{user.firstName?.charAt(0)}</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">
                {user.fullName}
              </p>
              <p className="text-xs leading-none text-muted-foreground">
                {user.primaryEmailAddress?.emailAddress}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setOpenProfile(true)}>
            Gerenciar Conta
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpenProfile(true)}>
            Endereços de Email
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpenProfile(true)}>
            Segurança
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => signOut({ redirectUrl: "/" })}>
            Sair
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={openProfile} onOpenChange={setOpenProfile}>
        <DialogContent>
          <UserProfile />
        </DialogContent>
      </Dialog>
    </>
  );
}
