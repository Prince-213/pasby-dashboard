
import Image from "next/image";
import logo from "@/images/Pasby™_default-logo_4.svg";
import flag from "@/images/united-kingdom.png";
import { ArrowDown, ChevronDown, Edit, Link, X } from "lucide-react";
import laptop from "@/images/3d-casual-life-laptop-white-screen-1 (1).png";
import phone from "@/images/bendy-user-authentication-in-mobile-application (1).png";
import download from "@/images/incut-download-icon (1).png";
import { Kolker_Brush } from "next/font/google";


import { Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DialogDemo } from "@/components/custom/dialogbutton";

import { Kolker_Brush as KolkSans } from "next/font/google";
import { DialogCloseButton } from "@/components/custom/blockwarning";
import UserTable from "@/components/custom/usertable";

const kolkSans = KolkSans({
  weight: ["400"],
  subsets: ["latin", "latin-ext"],
  variable: "--kolk-sans",
});

export default function Home() {
  

  return (
    <div className=" w-full h-screen font-sans">
      <header className=" w-full py-4">
        <div className=" w-[90%] mx-auto">
          <Image src={logo} width={100} height={100} alt="" />
          <div className=" flex items-center space-x-2">
            <Link />
            <p>Go to pasby</p>
          </div>
        </div>
      </header>
    </div>
  );
}
