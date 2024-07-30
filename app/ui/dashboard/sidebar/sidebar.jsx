import styles from "./sidebar.module.css"
import {MdDashboard, MdLogout, MdOutlineCalendarMonth, MdOutlineDashboard, MdSupervisedUserCircle} from "react-icons/md"
import MenuLink from "@/app/ui/dashboard/sidebar/menuLink/menulink";
import {SlOrganization} from "react-icons/sl";
import {TbSettings} from "react-icons/tb";
import {FaRegUserCircle} from "react-icons/fa";
import React from "react";

import Image from "next/image";


const menuItems = [
  {
    title: "Pages",
    list: [
          {
            title: "Dashboard",
            path: "/dashboard",
            icon: <MdOutlineDashboard />
          },
        {
            title: "Events",
            path: "/events",
            icon: <MdOutlineCalendarMonth />
        },
        {
            title: "Users",
            path: "/users",
            icon: <FaRegUserCircle />
        },
        {
            title: "Classifications",
            path: "/classifications",
            icon: <SlOrganization />

        },
        {
            title: "Settings",
            path: "/settings",
            icon: <TbSettings />
        }
    ],
  }
]
const Sidebar = () => {
  return (
      <div className={styles.container}>
        <ul class>
          {menuItems.map(cat=> (
              <li className={styles.menuItem} key={cat.title}>
                <span>{cat.title}</span>
                {cat.list.map(item =>(
                    <MenuLink item={item} key={item.title}/>
                    ))}
              </li>
          ))}
        </ul>
          <div className={styles.user}>
            <Image className={styles.userImage} src="/noavatar.png" alt="" width="50" height="50"/>
              <span className={styles.username}>John Doe</span>
              <span className={styles.username}>jdoe@liberty.edu</span>
              <button className={styles.logout}>
                  <MdLogout />
                  Sign Out
              </button>
          </div>
      </div>
  )
}

export default Sidebar
