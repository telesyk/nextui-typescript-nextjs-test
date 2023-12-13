import { Avatar, AvatarGroup, Tooltip } from "@nextui-org/react";

export default function Avatars() {
  return (
    <>
      <div className="flex gap-4 items-center">
        <AvatarGroup isBordered max={3}>
          <Avatar
            color="default"
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          />
          <Avatar
            color="secondary"
            name="July"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
          <Avatar
            color="warning"
            name="Bruce"
            showFallback
            src="https://images.unsplash.com/broken"
          />
          <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
        </AvatarGroup>
      </div>
      <div className="flex gap-4 my-8">
        <Avatar
          isBordered
          radius="lg"
          src="https://i.pravatar.cc/150?u=a04258114e29026302d"
        />
        <Tooltip color="primary" content="I am a tooltip">
          <span>User Name</span>
        </Tooltip>
      </div>
    </>
  );
}
