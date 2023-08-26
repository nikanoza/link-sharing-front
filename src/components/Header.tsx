import { Link, useRouter } from "@tanstack/react-router";
import { LinkIcon, Logo, PreviewIcon, ProfileIcon } from "../svg";

const Header = () => {
  const router = useRouter();
  const path = router.history.location.pathname;
  return (
    <header className="w-full h-[74px] bg-white flex justify-between items-center pl-6 pr-4">
      <Logo />
      <div className="flex items-center">
        <Link
          to="/home"
          className={`py-3 px-7 rounded-lg ${
            path.includes("home") ? "bg-light-purple" : "bg-transparent"
          }`}
        >
          <LinkIcon />
        </Link>
        <Link
          to="/profile"
          className={`py-3 px-7 rounded-lg ${
            path.includes("profile") ? "bg-light-purple" : "bg-transparent"
          }`}
        >
          <ProfileIcon />
        </Link>
      </div>
      <Link
        to="/profile"
        className={`py-3 px-4 rounded-lg border border-solid border-electric`}
      >
        <PreviewIcon />
      </Link>
    </header>
  );
};

export default Header;
