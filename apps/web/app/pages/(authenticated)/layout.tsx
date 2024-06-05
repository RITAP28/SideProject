import { redirect } from "next/navigation";
import validateSession from "../../api/auth/actions/auth.status";

export default async function ProtectedRoutes({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = await validateSession();
  console.log("Session Protected User: ", user);
  if (!user) {
    return redirect("/api/auth/components/signin");
  }

  return <>{children}</>;
}
