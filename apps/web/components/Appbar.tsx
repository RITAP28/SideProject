import Link from "next/link";
import validateSession from "../app/api/auth/actions/auth.status";
import signout from "../app/api/auth/actions/signout";

export const Appbar = async () => {
  const { user } = await validateSession();
  return (
    <>
      <nav className="mx-auto flex items-center justify-between p-6 lg:px-8 bg-red-400">
        <div className="lg:flex lg:flex-row lg:w-full">
          <div className="lg:basis-1/7 lg:w-full lg:flex lg:justify-center">Logo</div>
          <div className="lg:basis-4/7 lg:w-full">
            <form action="lg:w-full">
              <input
                type="text"
                className="lg:w-full lg:pl-1 lg:py-2"
                placeholder="Search tech videos"
              />
            </form>
          </div>
          <div className="lg:basis-2/7 lg:w-full">
            {user ? (
              <>
                <div className="lg:flex lg:flex-row">
                  <div className="lg:basis-1/3 lg:flex lg:justify-center">{user?.username}</div>
                  <div className="lg:basis-1/3">
                    <form action={signout}>
                      <button
                        type="submit"
                        className="px-6 py-2 bg-black text-white rounded-md hover:cursor-pointer"
                      >
                        Sign-Out
                      </button>
                    </form>
                  </div>
                  <div className="lg:basis-1/3">
                    <Link href="/pages/upload">
                      <button type="button" className="px-6 py-2 bg-black text-white rounded-md hover:cursor-pointer">
                        Upload
                      </button>
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="lg:flex lg:flex-row">
                  <div className="lg:basis-1/2 lg:flex lg:justify-end">
                    <Link href="/api/auth/components/signup">
                      <button
                        type="button"
                        className="px-4 py-2 bg-black text-white rounded-md hover:cursor-pointer"
                      >
                        Register
                      </button>
                    </Link>
                  </div>
                  <div className="lg:basis-1/2 lg:flex lg:justify-center">
                    <Link href="/api/auth/components/signin">
                      <button
                        type="button"
                        className="px-4 py-2 bg-black text-white rounded-md hover:cursor-pointer"
                      >
                        Login
                      </button>
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};
