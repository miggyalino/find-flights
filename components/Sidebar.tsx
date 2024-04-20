import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAVBAR_LINKS } from "@/constants";
import { Menu } from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <div>
              <p className="font-bold text-2xl text-left">
                Flight <span className="text-slate-800">Finder</span>
              </p>
            </div>
          </SheetTitle>
          <SheetDescription>
            <div className="flex flex-col text-lg items-start gap-4 mt-4">
              {NAVBAR_LINKS.map((link) => (
                <Link key={link.title} href={link.link}>
                  {link.title}
                </Link>
              ))}
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
