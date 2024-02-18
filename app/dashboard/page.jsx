import DashboardComponent from "./../Components/Dashboard"
import { getServerSession } from "next-auth";
import { authOptions } from '@/app/(auth)/api/auth/[...nextauth]/route'

export default async function Dashboard({ params }) {
    const { id } = params
    const data = await getServerSession(authOptions);

    return <DashboardComponent />
}