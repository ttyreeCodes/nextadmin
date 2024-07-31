'use client';

import styles from "./sidebar.module.scss"
import Image from "next/image";
import MenuLink, {menuItem} from "./menuLink/menulink";
import {MdLogout, MdOutlineCalendarMonth, MdOutlineDashboard} from "react-icons/md"
import {SlOrganization} from "react-icons/sl";
import {TbSettings} from "react-icons/tb";
import {FaRegUserCircle} from "react-icons/fa";
import {GoChevronLeft} from "react-icons/go";
import {useState} from "react";

const menuItems: menuItem[] = [
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
        path: "/dashboard/users",
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
]

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

  return (
      <div className={`${styles.container} ${isOpen ? "" : styles.closed}`}>
          <div>
              <div className={styles.head}>
                  <span className={styles.title}>Events Admin</span>
                  <button className={styles.arrow} onClick={toggleDrawer}><GoChevronLeft size={24}/></button>
              </div>
              <div className={styles.menu}>
                  {menuItems.map(item=> (
                      <MenuLink item={item} key={item.title}/>
                  ))}
              </div>
          </div>
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
