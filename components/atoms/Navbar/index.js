import Button from "../Button";
import Logo from "../Logo";
import Nav from "../Nav";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center py-10">
        <div className="w-3/12">
          <Logo />
        </div>
        <div className="w-6/12 hidden md:block">
          <Nav dir="horizontal" scheme="light" />
        </div>
        <div className="w-3/12 text-right hidden md:block">
          <Button variant="outline-yellow">Contact</Button>
        </div>
        <div className="w-9/12 md:hidden text-right">
          <label htmlFor="my-drawer-3" className="drawer-button cursor-pointer">
            <img src="/ic-menu.svg" className="inline-block" />
          </label>
        </div>
      </div>
    </>
  );
};

export default Navbar;
