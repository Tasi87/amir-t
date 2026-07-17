// Imports
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
//-----------------------------

// Middleware
export default createMiddleware(routing);

export const config = {
  matcher: ["/((?!api|trpc|_next|_vercerl|.*\\..*).*)"],
};
