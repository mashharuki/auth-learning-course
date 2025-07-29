import {useSession} from "next-auth/react";
import {SignInCard} from "@/app/signin-card";
import UserPage from "@/app/user-page";

/**
 * Home コンポーネント
 * @returns 
 */
export default function Home() {
  const {data: session, status} = useSession()

  if (status === 'loading') {
    return <div className="flex justify-center items-center min-h-screen bg-gray-100">Loading...</div>;
  }

  console.log(`session: ${JSON.stringify(session)}`);

  if (session) {
    console.log(`session: ${JSON.stringify(session)}`);
    // セッション情報からユーザー名を取得する
    const name = session.user?.name === null ? undefined : session.user?.name;

    return <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <UserPage name={name}/>
    </div>
  } else {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <SignInCard/>
      </div>
    );
  }
}
