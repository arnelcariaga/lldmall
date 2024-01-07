import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/(auth)/api/auth/[...nextauth]/route"
export default async function Dashboard() {
    const session = await getServerSession(authOptions)
    console.log(session)
    return <span>Hi {session.user.firstName}</span>
}