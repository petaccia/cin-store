import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

// Liste des langues disponibles
export const availableLocales = ['en', 'es', 'fr', 'it', 'pt', 'ru', 'zh'];

// Langue par défaut
export const defaultLocale = 'fr';

// Fonction pour obtenir la langue actuelle
export const getPreferredLocale = (request) => {
  const headers = { 
    'accept-language': request.headers.get('accept-language'),
  };
  const language = new Negotiator ({ headers }).language();
  return match(language, availableLocales, defaultLocale);

}

// Fonction pour changer la langue actuelle
export const getLocalToRedirect = (request) => {
    const pathname = request.nextUrl.pathname;
    // Fonction pour vérifier si le chemin manque la langue actuelle match avec les langues disponibles
    const pathnameIsMissingLocale = availableLocales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );
     // Si le chemin manque la langue actuelle, rediriger vers la langue correspondante avec une nouvelle URL
    if (pathnameIsMissingLocale) {
        const locale = getPreferredLocale(request);
        return new URL(`/${locale}${pathname}`, request.url);
    }
    return pathname;
};