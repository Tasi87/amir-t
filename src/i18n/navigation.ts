// Imports
import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";
//-----------------------------

// Navigation
export const { Link, useRouter, usePathname } = createNavigation(routing);
