// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import SearchBar from "./SearchBar";
// import { useGlobalContext } from "@/app/context/GlobalContext";

// const Header = () => {
//   const { cart } = useGlobalContext();
//   const cartQuantity = cart.reduce((total, item) => total + item.quantity, 0);

//   return (
//     <div className="w-full bg-[#F0F2F3] pt-[20px] pb-[20px] h-[84px]">
//       <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center space-x-3">
//           <Image
//             src="/LogoIcon.png"
//             alt="Comforty Logo"
//             width={40}
//             height={23.34}
//             className="ml-3"
//           />
//           <Link href="/">
//             <h2 className="text-[26px] font-medium">Comforty</h2>
//           </Link>
//         </div>
//         <div className="flex justify-between items-center gap-3">
//           <SearchBar />
//           <Link href={"/cart"}>
//             <button className="flex items-center space-x-2 bg-white py-2 px-4 rounded-md mr-3">
//               <Image
//                 src="/cart.svg"
//                 height={16.54}
//                 width={16.96}
//                 alt="cart icon"
//               />
//               <div className="hidden md:block">Cart</div>
//               <div className="flex items-center justify-center w-6 h-6 bg-[#007580] text-white text-sm rounded-full">
//                 {cartQuantity}
//               </div>
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;



"use client";

import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { useGlobalContext } from "@/app/context/GlobalContext";
import { UserButton, useUser } from "@clerk/nextjs";

const Header = () => {
  const { cart } = useGlobalContext();
  const { user, isSignedIn } = useUser();
  const cartQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="w-full bg-[#F0F2F3] pt-[20px] pb-[20px] h-[84px]">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <Image
            src="/LogoIcon.png"
            alt="Comforty Logo"
            width={40}
            height={23.34}
            className="ml-3"
          />
          <Link href="/">
            <h2 className="text-[26px] font-medium">Comforty</h2>
          </Link>
        </div>

        {/* Search & Cart Section */}
        <div className="flex items-center gap-4">
          <SearchBar />
          {/* Cart Button */}
          <Link href="/cart">
            <button className="flex items-center space-x-2 bg-white py-2 px-4 rounded-md">
              <Image src="/cart.svg" height={16.54} width={16.96} alt="cart icon" />
              <div className="hidden md:block">Cart</div>
              <div className="flex items-center justify-center w-6 h-6 bg-[#007580] text-white text-sm rounded-full">
                {cartQuantity}
              </div>
            </button>
          </Link>

          {/* User Profile (Only When Logged In) */}
          {isSignedIn && user && (
            <UserButton/>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
