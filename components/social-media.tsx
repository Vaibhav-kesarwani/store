import { cn } from "@/lib/utils";
import {
    AppWindow,
    Github,
    Linkedin
} from "lucide-react";
import Link from "next/link";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "./ui/tooltip";
interface Props {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}
const socialLink = [
  {
    title: "Github",
    href: "",
    icon: <Github className="w-5 h-5" />,
  },
  {
    title: "Linkedin",
    href: "",
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    title: "Portfolio",
    href: "",
    icon: <AppWindow className="w-5 h-5" />,
  },
];

export default function SocialMedia({
  className,
  iconClassName,
  tooltipClassName,
}: Props) {
  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-3.5", className)}>
        {socialLink?.map((item) => (
          <Tooltip key={item?.title}>
            <TooltipTrigger asChild>
              <Link
                key={item?.title}
                target="_blank"
                rel="noopener noreferrer"
                href={item?.href}
                className={cn(
                  "p-2 border rounded-full hover:text-white hover:border-shop_light_green hoverEffect",
                  iconClassName
                )}
              >
                {item?.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent
              className={cn(
                "bg-white text-darkColor font-semibold",
                tooltipClassName
              )}
            >
              {item?.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}
