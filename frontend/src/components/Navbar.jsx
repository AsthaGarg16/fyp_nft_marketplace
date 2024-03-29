import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { ShoppingCartIcon, WalletIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import CartModal from "../pages/CartModal";
import WalletModal from "../pages/WalletModal";
import { useMoralis } from "react-moralis";
import { ConnectButton } from "web3uikit";
import "./button.css";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const { authenticate, isAuthenticated, user } = useMoralis();
  const [showCart, setShowCart] = useState(false);
  const [showWallet, setShowWallet] = useState(false);
  const navigate = useNavigate();
  const navigation = [
    { name: "Explore", href: "/", current: false },
    { name: "Create", href: "/create", current: false },
    { name: "Stats", href: "/stat", current: false },
  ];

  const pages = [
    { name: "Profile", href: "/profile" },
    { name: "My collections", href: "/my-collections" },
    { name: "Notifications", href: "/profile" },
    { name: "Settings", href: "/settings" },
    { name: "Favourties", href: "/my-favourited" },
    { name: "Watchlist", href: "/my-watchlist" },
    { name: "Log out", href: "#" },
  ];

  function navigateTab(tabName) {
    for (const tab of navigation) {
      if (tab.name === tabName) {
        // setNavigation([{}]);
        navigate(tab.href);
      }
    }
  }

  function GoToPage(pageName) {
    for (const page of pages) {
      if (page.name === pageName) {
        // setNavigation([{}]);
        navigate(page.href);
      }
    }
  }

  function showCartModal() {
    setShowCart(true);
    console.log(showCart);
  }

  const closeCart = () => {
    setShowCart(false);
  };

  function showWalletModal() {
    setShowWallet(true);
    console.log(showCart);
  }

  const closeWallet = () => {
    setShowWallet(false);
  };
  return (
    <Disclosure as="nav" className="bg-gray-900">
      {({ open }) => (
        <>
          <CartModal handleClose={closeCart} show={showCart} />
          <WalletModal handleClose={closeWallet} show={showWallet} />
          <div className="mx-auto px-3">
            <div className="relative flex h-16 items-center grid grid-cols-6">
              <div className="flex flex-1 items-center sm:items-stretch sm:justify-start col-span-1">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-10 w-10"
                    src={require("../assets/Logo.PNG")}
                    alt="Your Company"
                  />
                  {/* <img
                    className="hidden h-8 w-auto lg:block"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  /> */}
                </div>
                <div className="flex flex-shrink-0 items-center ml-2">
                  <p className="text-white font-bold text-4xl tracking-tighter">
                    NftNook
                  </p>
                </div>
              </div>
              <div className="flex flex-auto px-8 items-center col-span-3">
                <input
                  type="text"
                  className="w-[20rem] px-8 py-2 bg-white border rounded-xl focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none focus:ring text-base"
                  placeholder="Search..."
                />
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <div
                        onClick={() => navigateTab(item.name)}
                        key={item.name}
                        // href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-800 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "px-3 py-2 rounded-md text-2xl font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute right-0 flex flex-none items-center col-span-2">
                {/* <button
                  type="button"
                  className="rounded-full bg-gray-900 mx-2 px-2 text-gray-400 hover:text-white"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-8 w-8 stroke-2" aria-hidden="true" />
                </button> */}
                <button
                  type="button"
                  className="rounded-full bg-gray-900 mx-2 px-2 text-gray-400 hover:text-white"
                  onClick={() => showCartModal()}
                >
                  <span className="sr-only">View cart</span>
                  <ShoppingCartIcon
                    className="h-10 w-10 stroke-2"
                    aria-hidden="true"
                  />
                </button>
                <button
                  type="button"
                  className="rounded-full bg-gray-900 mx-2 px-2 text-gray-400 hover:text-white"
                  onClick={() => showWalletModal()}
                >
                  <span className="sr-only">Connect Wallet</span>
                  <WalletIcon
                    className="h-10 w-10 stroke-2"
                    aria-hidden="true"
                  />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-12 w-12 rounded-full"
                        src={require("../assets/profile1.png")}
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right text-left rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {pages.map((item) => (
                        <Menu.Item onClick={() => GoToPage(item.name)}>
                          {({ active }) => (
                            <div
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-2 py-2 text-md text-gray-700"
                              )}
                            >
                              {item.name}
                            </div>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>

                <ConnectButton moralisAuth={false} className="button" />
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}

// export default function Navbar() {
//   return (
//     <Disclosure as="nav" className="bg-gray-900">
//       {({ open }) => (
//         <>
//           <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//             <div className="relative flex h-16 items-center justify-between">
//               <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//                 {/* Mobile menu button*/}
//                 <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//                   <span className="sr-only">Open main menu</span>
//                   {open ? (
//                     <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
//                   ) : (
//                     <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
//                   )}
//                 </Disclosure.Button>
//               </div>
//               <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//                 <div className="flex flex-shrink-0 items-center">
//                   <img
//                     className="block h-8 w-auto lg:hidden"
//                     src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
//                     alt="Your Company"
//                   />
//                   <img
//                     className="hidden h-8 w-auto lg:block"
//                     src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
//                     alt="Your Company"
//                   />
//                 </div>
//                 <div className="hidden sm:ml-6 sm:block">
//                   <div className="flex space-x-4">
//                     {navigation.map((item) => (
//                       <a
//                         key={item.name}
//                         href={item.href}
//                         className={classNames(
//                           item.current
//                             ? "bg-gray-800 text-white"
//                             : "text-gray-300 hover:bg-gray-700 hover:text-white",
//                           "px-3 py-2 rounded-md text-2xl font-medium"
//                         )}
//                         aria-current={item.current ? "page" : undefined}
//                       >
//                         {item.name}
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//               <div className="text-xl ">
//                 <input
//                   type="text"
//                   className="block w-full px-4 py-2 bg-white border rounded-full focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none focus:ring text-base"
//                   placeholder="Search..."
//                 />
//               </div>

//               <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//                 <button
//                   type="button"
//                   className="rounded-full bg-gray-900 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//                 >
//                   <span className="sr-only">View notifications</span>
//                   <BellIcon className="h-8 w-8" aria-hidden="true" />
//                 </button>

//                 {/* Profile dropdown */}
//                 <Menu as="div" className="relative ml-3">
//                   <div>
//                     <Menu.Button className="flex rounded-full bg-gray-800 text-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
//                       <span className="sr-only">Open user menu</span>
//                       <img
//                         className="h-12 w-12 rounded-full"
//                         src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                         alt=""
//                       />
//                     </Menu.Button>
//                   </div>
//                   <Transition
//                     as={Fragment}
//                     enter="transition ease-out duration-100"
//                     enterFrom="transform opacity-0 scale-95"
//                     enterTo="transform opacity-100 scale-100"
//                     leave="transition ease-in duration-75"
//                     leaveFrom="transform opacity-100 scale-100"
//                     leaveTo="transform opacity-0 scale-95"
//                   >
//                     <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//                       <Menu.Item>
//                         {({ active }) => (
//                           <a
//                             href="#"
//                             className={classNames(
//                               active ? "bg-gray-100" : "",
//                               "block px-4 py-2 text-md text-gray-700"
//                             )}
//                           >
//                             Your Profile
//                           </a>
//                         )}
//                       </Menu.Item>
//                       <Menu.Item>
//                         {({ active }) => (
//                           <a
//                             href="#"
//                             className={classNames(
//                               active ? "bg-gray-100" : "",
//                               "block px-4 py-2 text-md text-gray-700"
//                             )}
//                           >
//                             Settings
//                           </a>
//                         )}
//                       </Menu.Item>
//                       <Menu.Item>
//                         {({ active }) => (
//                           <a
//                             href="#"
//                             className={classNames(
//                               active ? "bg-gray-100" : "",
//                               "block px-4 py-2 text-md text-gray-700"
//                             )}
//                           >
//                             Sign out
//                           </a>
//                         )}
//                       </Menu.Item>
//                     </Menu.Items>
//                   </Transition>
//                 </Menu>
//               </div>
//             </div>
//           </div>

//           <Disclosure.Panel className="sm:hidden">
//             <div className="space-y-1 px-2 pt-2 pb-3">
//               {navigation.map((item) => (
//                 <Disclosure.Button
//                   key={item.name}
//                   as="a"
//                   href={item.href}
//                   className={classNames(
//                     item.current
//                       ? "bg-gray-900 text-white"
//                       : "text-gray-300 hover:bg-gray-700 hover:text-white",
//                     "block px-3 py-2 rounded-md text-base font-medium"
//                   )}
//                   aria-current={item.current ? "page" : undefined}
//                 >
//                   {item.name}
//                 </Disclosure.Button>
//               ))}
//             </div>
//           </Disclosure.Panel>
//         </>
//       )}
//     </Disclosure>
//   );
// }
