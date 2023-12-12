import { User, Link } from "@nextui-org/react";

export default function UserBlock() {
  return (
    <User
      name="Junior Garcia"
      description={
        <Link href="https://twitter.com/jrgarciadev" size="sm" isExternal>
          @jrgarciadev
        </Link>
      }
      avatarProps={{
        src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
      }}
    />
  );
}
