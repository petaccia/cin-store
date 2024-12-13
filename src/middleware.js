import { NextResponse } from "next/server";
import { getLocaleUrlToRedirect, availableLocales } from "./lib/i18n/i18n";

export function middleware(request) {
  const pathname = request.nextUrl.pathname;
  
  // Vérifier si le chemin actuel contient déjà un locale valide
  const hasValidLocale = availableLocales.some(locale => 
    pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (hasValidLocale) {
    // Si un locale valide est déjà présent, ne rien faire
    return NextResponse.next();
  }

  const newLocaleUrl = getLocaleUrlToRedirect(request);

  if (newLocaleUrl) {
    console.log(`Redirection vers: ${newLocaleUrl}`); // Log pour le débogage
    return NextResponse.redirect(newLocaleUrl);
  }

  // Si aucune redirection n'est nécessaire, continuer normalement
  return NextResponse.next();
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
