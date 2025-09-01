import { ArrowUpRightIcon } from "lucide-react";

import { Icons } from "@/components/icons";
import type { SocialLink } from "@/features/profile/types/social-links";
import { cn } from "@/lib/utils";

export function SocialLinkItem({ icon, title, description, href }: SocialLink) {
  const Icon = Icons[icon as keyof typeof Icons];

  return (
    <a
      className={cn(
        "group/link flex cursor-pointer items-center gap-4 rounded-2xl p-4 pr-2 transition-colors select-none",
        "max-sm:screen-line-before max-sm:screen-line-after",
        "sm:nth-[2n+1]:screen-line-before sm:nth-[2n+1]:screen-line-after"
      )}
      href={href}
      target="_blank"
      rel="noopener"
    >
      <div className="flex size-12 shrink-0 items-center justify-center">
        {Icon && <Icon className="size-8" />}
      </div>

      <div className="flex-1">
        <h3 className="flex items-center font-medium underline-offset-4 group-hover/link:underline">
          {title}
        </h3>

        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>

      <ArrowUpRightIcon className="size-4 text-muted-foreground" />
    </a>
  );
}
