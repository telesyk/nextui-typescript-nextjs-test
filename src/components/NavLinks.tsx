import { Link } from "@nextui-org/react";

const links = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "One",
    url: "/test-1",
  },
  {
    name: "Two",
    url: "/test-2",
  },
];

export default function NavLinks({ classNames }: { classNames?: string }) {
  const defaultClasses = "flex gap-0";

  return (
    <div className={classNames ? classNames : defaultClasses}>
      {links.map((item: any) => (
        <Link
          key={item.name}
          isBlock
          color="foreground"
          href={item.url}
          className="py-4 px-6 after:rounded-none"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}
