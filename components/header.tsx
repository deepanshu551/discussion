
import path from "@/paths";

import Link from "next/link";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Input,
  } from "@nextui-org/react";

  import HeaderAuth from "@/components/headerAuth";
export default async function Header() {

  
  

  return (
    <Navbar className="shadow mb-6" >
      <NavbarBrand>
        <Link href={`${path.homePath()}`} className="font-bold">
          Discuss
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <Input />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        
          <HeaderAuth/>
       
      </NavbarContent>
    </Navbar>
  );
}
