import NavLinks from "./NavLinks";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default function Navbar() {
  return (
    <div className="flex justify-center py-8">
      <div className="max-w-screen-md flex justify-between items-center rounded-lg bg-gray-300 dark:bg-gray-600">
        <NavLinks />
        <ThemeSwitcher />
      </div>
    </div>
  );
}
