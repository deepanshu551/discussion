'use client';
import {

  NavbarItem,
  
  Button,
  Avatar,
  Popover,PopoverTrigger,PopoverContent
} from "@nextui-org/react";

import {signIn,signOut} from "@/actions";
import {useSession} from "next-auth/react"

export default function HeaderAuth (){

    const session = useSession();

    let authContent : React.ReactNode;

  if(session.status == "loading"){
    return authContent = null
  }
    else if(session.data?.user){
        authContent=<Popover placement="left">
            <PopoverTrigger>
            <Avatar style={{width:'15px'}} src={session.data.user.image || ''} alt="use avatar"/>

            </PopoverTrigger>
            <PopoverContent>
                <div className="p-4">
                    <form action={signOut}>
                        <Button type="submit"> signout</Button>
                    </form>
                </div>
            </PopoverContent>
            </Popover>
    }
    else{
        authContent= <>
        
        <NavbarItem><form action={signIn}><Button type="submit" color="secondary" variant="bordered">SignIn</Button></form></NavbarItem>

        <NavbarItem><form action={signIn}><Button type="submit" color="primary" variant="flat">Signup</Button></form></NavbarItem>
        </>
    }

    return authContent;

}