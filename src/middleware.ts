import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// const isProtectedRoute = createRouteMatcher(["/", "/api(.*)"]) protected API route;
const isProtectedRoute = createRouteMatcher(["/"]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    // Proteja a rota
    await auth.protect();
  }
  return NextResponse.next();
});

// Configuração do matcher para o middleware
export const config = {
  matcher: [
    // Ignora rotas internas do Next.js e arquivos estáticos
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Sempre executa para rotas de API
    "/(api|trpc)(.*)",
  ],
};
