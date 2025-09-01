import { RssIcon } from 'lucide-react';

import { SITE_INFO, SOURCE_CODE_GITHUB_URL } from '@/config/site';
import { cn } from '@/lib/utils';

import { Icons } from './icons';

export function SiteFooter() {
  return (
    <footer className="max-w-screen overflow-x-hidden px-2">
      <div className="pb-[env(safe-area-inset-bottom,0px)]">
        <div className="flex h-2" />
      </div>
    </footer>
  );
}

function Separator() {
  return <div className="flex h-11 w-px bg-edge" />;
}
