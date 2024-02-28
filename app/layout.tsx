'use client'

import { Inter } from "next/font/google";
import { FaAlignJustify } from "react-icons/fa";
import useSideBar from './hooks/useSidebar';
import SideBar from "./component/Sidebar";
import Header from "./component/NavBar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

interface LayoutBodyProps {
  children: React.ReactNode
}

const LayoutBody: React.FC<LayoutBodyProps> = ({ children }) => {

  const sidebarModel = useSideBar();

  const toggleSidebar = () => {
    sidebarModel.onOpen();
  }

  const ToggleIcon = () => {
    return (
      <div
        className="
          absolute 
          left-3 
          top-3 
          cursor-pointer 
          md:hidden
        "
        onClick={toggleSidebar}
      >
        <FaAlignJustify size={25} />
      </div>
    )
  }

  return (
    <div className="bg-neutral-50 flex flex-col relative z-10 min-h-screen">
      <ToggleIcon />
      <SideBar />
      <Header />
      <div className="mt-12">
        {children}
      </div>
    </div>
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ minHeight: '100vh' }}>
        <LayoutBody children={children} />
      </body>
    </html>
  );
}

