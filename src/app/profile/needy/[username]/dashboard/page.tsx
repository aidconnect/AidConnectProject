import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import Dashboard from "./dashboard"

export default async function needyProfile() {
    const session=await getServerSession()
    if(session){
        if(session.user?.email==="N"){
            redirect(`/profile/ngo/${session.user.name}`)
        }
        else if(session.user?.email==="D"){
            redirect(`/profile/needy/${session.user.name}`)
        }
        else if(session.user?.email==="S"){
            redirect(`/profile/service/${session.user.name}`)
        }
    }
    else{
        redirect("/login")
    }
    return(
        <>
            <title>AidConnect丨Profile</title>
            <Dashboard/>
        </>
  )
}
