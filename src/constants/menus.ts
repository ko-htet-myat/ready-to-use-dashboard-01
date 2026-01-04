import {
  AudioWaveform,
  BookOpen,
  Bot,
  BriefcaseBusiness,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PictureInPicture2,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";
import { ROUTE_LINKS } from "./route.links";

export const MENUS = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: ROUTE_LINKS.DASHBOARD,
      icon: SquareTerminal,
      isActive: true,
      items: [
        // {
        //   title: "History",
        //   url: "#",
        // },
        // {
        //   title: "Starred",
        //   url: "#",
        // },
        // {
        //   title: "Settings",
        //   url: "#",
        // },
      ],
    },
    {
      title: "Employees",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "List",
          url: ROUTE_LINKS.EMPLOYEE,
        },
        {
          title: "Create",
          url: ROUTE_LINKS.CREATE_EMPLOYEE,
        },
        {
          title: "Leave",
          url: ROUTE_LINKS.EMPLOYEE_LEAVE,
        },
      ],
    },
    {
      title: "Projects",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Payroll",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
    {
      title: "Hiring",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
    {
      title: "Meeting Rooms",
      url: "#",
      icon: PictureInPicture2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
    {
      title: "Recruitment",
      url: "#",
      icon: BriefcaseBusiness,
      items: [
        {
          title: "List",
          url: ROUTE_LINKS.RECRUITMENT,
        },
        {
          title: "Create",
          url: ROUTE_LINKS.CREATE_RECRUITMENT,
        },
        {
          title: "Candidates",
          url: ROUTE_LINKS.RECRUITMENT_CANDIDATES,
        },
      ],
    },
    {
      title: "Ai Insights",
      url: "#",
      icon: SquareTerminal,
      items: [
        // {
        //   title: "History",
        //   url: "#",
        // },
        // {
        //   title: "Starred",
        //   url: "#",
        // },
        // {
        //   title: "Settings",
        //   url: "#",
        // },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};
