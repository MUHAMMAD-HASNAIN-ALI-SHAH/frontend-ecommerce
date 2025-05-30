import { SigninDrawer } from "./SigninDrawer";


const Navbar = () => {
  return (
    <nav className="min-h-[80px] bg-white shadow-2xl flex items-center justify-between px-4">
      <div className="flex items-center">
        <a href="/" className="text-2xl font-bold text-gray-800">
          TakeIt
        </a>
      </div>
      <div className="flex items-center space-x-4">
        <SigninDrawer />
      </div>
    </nav>
  );
};

export default Navbar;
