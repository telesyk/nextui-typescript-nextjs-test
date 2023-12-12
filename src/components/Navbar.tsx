import { Button, ButtonGroup, Link } from "@nextui-org/react";

export default function Navbar() {
  return (
    <div className="flex justify-center py-8">
      <div className="flex max-w-md">
        <ButtonGroup>
          <Button as={Link} href="/">
            Home
          </Button>
          <Button as={Link} href="/test-1">
            One
          </Button>
          <Button as={Link} href="/test-2">
            Two
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}
