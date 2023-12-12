import { Progress, Button } from "@nextui-org/react";
import LoginModal from "@/components/LoginModal";
import Avatars from "@/components/Avatars";
import Tooltips from "@/components/Tooltips";
import UserBlock from "@/components/User";

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
        <Tooltips />
      </div>
      <div className="py-2">
        <Button isLoading>Click me</Button>
      </div>
      <div className="py-2 w-64">
        <Progress
          size="sm"
          isIndeterminate
          aria-label="Loading..."
          className="max-w-md"
        />
      </div>
    </>
  );
}
