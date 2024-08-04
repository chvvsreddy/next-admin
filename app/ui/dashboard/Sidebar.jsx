
"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation'

import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import MenuLink from "./navbar/menuLink/menuLink";
import Image from "next/image";

// import { auth, signOut } from "@/app/auth";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = async () => {
  //const session = await auth();
  const pathname = usePathname()
  return (
    <div className="p-6 h-svh">
      <div className="flex items-center justify-start gap-4 my-4">
        <Image src='/noavatar.png' alt="" width={40} height={40} className="ring-2 ring-slate-300 rounded-full"/>
        <div className="flex flex-col gap-1">
          <span className="font-medium">John Doe</span>
          <span className="text-sm">Adminstrator</span>
        </div>
      </div>
      <ul className="flex gap-2 flex-col">
        {menuItems.map((cat) => (
          <li key={cat.title} className="flex flex-col font-semibold">
            <span className="p-2 w-full rounded-md">{cat.title}</span>
            <ul className="flex flex-col  gap-2">
            {cat.list.map((item) => (
              <li className=" w-full font-light" key={item.title}>
                <Link href={item.path} className={`rounded-md flex items-center justify-start p-2 gap-2 ${ pathname === item.path ? 'bg-green-100' : 'bg-slate-100'}`}>
                {item.icon}{item.title}</Link>
                </li>
            ))}
            </ul>
          </li>
        ))}
      </ul>
      {/* <form action={async () => {
        "user server "
        await signOut();
      }}> */}
      <Link href="/login"><button className="logout-button"><MdLogout size={20} />Logout</button></Link>
      {/* </form> */}
    </div>
  )
}

export default Sidebar