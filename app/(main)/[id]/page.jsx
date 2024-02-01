import ProfileElements from "@/app/(main)/[id]/ProfileElements"
import { getUserByUsername } from "@/app/libs/seed";
import { notFound } from 'next/navigation';
import { getServerSession } from "next-auth";
import { authOptions } from '@/app/(auth)/api/auth/[...nextauth]/route'

export default async function Profile({ params }) {
    const { id } = params
    const data = await getServerSession(authOptions);
    const loggedUser = data?.user.accessToken

    const user = await getUserByUsername({ username: id, loggedUser });

    if (user === 'user_not_found') {
        notFound()
    }
    return <ProfileElements user={JSON.stringify({ ...user, sameUser: id === data?.user.username })} />
}