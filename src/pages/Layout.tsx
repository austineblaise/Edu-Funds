import React, { useEffect, useState } from "react";
import { Navbar } from "konsta/react";
import { InjectedConnector } from "wagmi/connectors/injected";
import { useConnect } from "wagmi";
import { getAccount } from "@wagmi/core";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CustomConnectButton } from "@/components/CustomConnectButton";
import useGetIsOnboarded from "@/hooks/use-get-is-onboarded/useGetIsOnboarded";
import { useConnectState } from "@/hooks/use-connect/useConnect";
import { Menu, X } from "lucide-react";

const Layout = ({
  subNavBarTitle,
  children,
}: {
  subNavBarTitle?: string;
  children: React.ReactNode;
}) => {
  const [hideConnectBtn, setHideConnectBtn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { connect } = useConnect();
  const account = getAccount();
  const pathName = usePathname();
  const { isOnboarded } = useGetIsOnboarded();
  const { isConnected } = useConnectState();

  useEffect(() => {
    if ((window as any).ethereum?.isMiniPay) {
      setHideConnectBtn(true);
      connect({ connector: new InjectedConnector() });
    }
  }, []);

  const shouldShowBottomNav = isOnboarded && isConnected;
  const topPadding = subNavBarTitle ? "pt-32" : "pt-16";
  const bottomPadding = shouldShowBottomNav ? "pb-20" : "pb-4";

  return (
    <div className="flex flex-col h-screen bg-black">
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-gray-800/50 shadow-xl">
        <div className="px-4 sm:px-6 lg:px-8">
          <Navbar
            title="Edufunds"
            titleClassName="text-md md:text-xl lg:text-2xl logo-font text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text font-bold"
            right={
              <div className="flex items-center gap-3">
                <div className="hidden md:flex gap-6">
                  <Link
                    href="/parent"
                    className={`text-sm ${
                      pathName === "/parent"
                        ? "text-green-400"
                        : "text-gray-300 hover:text-green-400"
                    }`}
                  >
                    Parent
                  </Link>
                  <Link
                    href="/student"
                    className={`text-sm ${
                      pathName === "/student"
                        ? "text-green-400"
                        : "text-gray-300 hover:text-green-400"
                    }`}
                  >
                    Student
                  </Link>
                </div>
                <CustomConnectButton />
                {/* Mobile Menu Button */}
                <button
                  className="md:hidden text-gray-300 hover:text-white"
                  onClick={() => setMobileMenuOpen((prev) => !prev)}
                >
                  {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
              </div>
            }
          
            colors={{
              bgIos: "bg-transparent",
              bgMaterial: "bg-transparent",
              textIos: "text-white",
              textMaterial: "text-white",
            }}
          />
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 border-t border-gray-800 flex flex-col items-start p-4 space-y-3">
            <Link
              href="/parent"
              className={`w-full py-2 ${
                pathName === "/parent"
                  ? "text-yellow-400"
                  : "text-gray-300 hover:text-yellow-400"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Parent
            </Link>
            <Link
              href="/student"
              className={`w-full py-2 ${
                pathName === "/student"
                  ? "text-green-400"
                  : "text-gray-300 hover:text-green-400"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Student
            </Link>
          </div>
        )}
      </div>

      {/* Page Content */}
      <div
        className={`flex-1 overflow-y-auto ${topPadding} ${bottomPadding} scroll-smooth`}
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
