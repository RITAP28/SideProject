import { Appbar } from "../components/Appbar";
import validateSession from "./api/auth/actions/auth.status";

export default async function Page(){
  const { user } = await validateSession();
  return (
    <>
    <div className="">
      <div className="w-full">
        <Appbar />
      </div>
    </div>
    </>
  )
}