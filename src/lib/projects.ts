// Imports
import {
  ListChecks,
  Cloud,
  MessageSquare,
  type LucideIcon,
} from "lucide-react";
//-----------------------------

export type Project = {
  slug: string;
  icon: LucideIcon;
};

export const projects: Project[] = [
  { slug: "todo", icon: ListChecks },
  { slug: "meteo", icon: Cloud },
  { slug: "guestbook", icon: MessageSquare },
];
