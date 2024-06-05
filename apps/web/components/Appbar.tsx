import Link from "next/link";
import validateSession from "../app/api/auth/actions/auth.status";
import signout from "../app/api/auth/actions/signout";

export const Appbar = async () => {
  const { user, session } = await validateSession();
  return (
    <>
      {user ? (
        <>
          <div className="flex flex-col">
            {user.id} <br />
            {session.id}
          </div>
          <div className="mt-2">
            <form action={signout}>
              <button type="submit" className="px-6 py-1 bg-black text-white rounded-md">
                Signout
              </button>
            </form>
          </div>
          <div className="mt-2">
            <Link href="/pages/dashboard">
              <button
                type="button"
                className="px-6 py-1 bg-black text-white rounded-md"
              >
                Dashboard
              </button>
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="mt-2">
            <Link href="/api/auth/components/signup">
              <button
                type="button"
                className="px-6 py-1 bg-black text-white rounded-md"
              >
                Sign-Up
              </button>
            </Link>
          </div>
          <div className="mt-2">
            <Link href="/api/auth/components/signin">
              <button
                type="button"
                className="px-6 py-1 bg-black text-white rounded-md"
              >
                Sign-In
              </button>
            </Link>
          </div>
          
        </>
      )}
    </>
  );
};
