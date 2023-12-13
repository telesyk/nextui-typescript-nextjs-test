import { Button } from "@nextui-org/react";
import LoginModal from "@/components/LoginModal";
import Avatars from "@/components/Avatars";
import UserBlock from "@/components/User";
import Progresses from "@/components/Progresses";

export default function Home() {
  return (
    <>
      <div className="py-2">
        <Avatars />
      </div>
      <div className="py-2">
        <UserBlock />
      </div>
      <div className="py-2">
        <LoginModal />
      </div>
      <div className="py-2">
        <Button isLoading>Click me</Button>
      </div>
      <div className="py-2 w-64">
        <Progresses />
      </div>
    </>
  );
}
