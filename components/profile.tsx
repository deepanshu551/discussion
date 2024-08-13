'use client';
import {useSession} from "next-auth/react";
export default function Profile() {

    const session  = useSession();

    if(session.data?.user){

        return <div> user is defined</div>
    }

    else{
  return <div> user is not defined</div>
}
}
