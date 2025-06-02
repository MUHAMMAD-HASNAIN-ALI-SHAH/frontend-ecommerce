"use client";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="fixed top-0 w-full flex justify-center shadow-sm bg-white z-50">
      <nav className="flex justify-between w-[1200px] py-4">
        <div className="flex items-center gap-5">
          <h1
            className="font-bold text-2xl hover:cursor-pointer text-blue-500"
            onClick={() => router.push("/")}
          >
            Shopinetic
          </h1>
          <ul className="flex gap-5">
            <li
              onClick={() => router.push("/")}
              className="text-md text-black/90 hover:text-blue-400 hover:cursor-pointer transition-all"
            >
              Home
            </li>
            <li
              onClick={() => router.push("/products")}
              className="text-md text-black/90 hover:text-blue-400 hover:cursor-pointer transition-all"
            >
              Products
            </li>
            <li
              onClick={() => router.push("/about")}
              className="text-md text-black/90 hover:text-blue-400 hover:cursor-pointer transition-all"
            >
              About
            </li>
            <li
              onClick={() => router.push("/contact")}
              className="text-md text-black/90 hover:text-blue-400 hover:cursor-pointer transition-all"
            >
              Contact
            </li>
            <li
              onClick={() => router.push("/faqs")}
              className="text-md text-black/90 hover:text-blue-400 hover:cursor-pointer transition-all"
            >
              Faqs
            </li>
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
