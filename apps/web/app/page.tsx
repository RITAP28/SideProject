import { Appbar } from "../components/Appbar";
import validateSession from "./api/auth/actions/auth.status";

export default async function Page(){
  const { user } = await validateSession();
  return (
    <>
    <Appbar />
    <div>
      {user?.email}
    </div>
    <div>
      {user?.username} <br />
      {user?.id}
    </div>
    </>
  )
}