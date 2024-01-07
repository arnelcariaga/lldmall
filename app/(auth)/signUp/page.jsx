import { getAllCountries } from "@/app/libs/seed"
import SignUpForm from "@/app/Components/SignUpForm"

export default async function SignUp() {
    const countries = await getAllCountries()
    return <SignUpForm countries={JSON.stringify(countries)} />
}