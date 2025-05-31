const Navbar = () => {
  return (
    <div className="w-full flex justify-center shadow-sm">
      <nav className="flex justify-between w-[1200px] py-4">
        <div className="flex items-center gap-4">
          <h1 className="font-bold text-2xl hover:cursor-pointer text-blue-500">Shopinetic</h1>
          <ul className="flex gap-5">
            <li className="text-md text-black/90 hover:text-blue-400 hover:cursor-pointer transition-all">Home</li>
            <li className="text-md text-black/90 hover:text-blue-400 hover:cursor-pointer transition-all">Products</li>
            <li className="text-md text-black/90 hover:text-blue-400 hover:cursor-pointer transition-all">Admin</li>
            <li className="text-md text-black/90 hover:text-blue-400 hover:cursor-pointer transition-all">About</li>
            <li className="text-md text-black/90 hover:text-blue-400 hover:cursor-pointer transition-all">Contact</li>
          </ul>
        </div>
        <div className="flex gap-5 font-md text-lg text-black/90">
          <i className="ri-search-line cursor-pointer"></i>
          <i className="ri-shopping-cart-2-line cursor-pointer"></i>
          <i className="ri-user-line cursor-pointer"></i>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
