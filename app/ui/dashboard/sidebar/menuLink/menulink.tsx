"use client"

import styles from './menulink.module.css'
import Link from "next/link";
import {usePathname} from "next/navigation";
import {ReactNode} from "react";

export type menuItem = {
    title: string,
    path: string,
    icon: ReactNode,
}

interface menuItemProps {
    item: menuItem,
}

const MenuLink = ({item}: menuItemProps) => {
    const pathName = usePathname()
    return (
        <Link href={item.path}
              className={`${styles.container} ${pathName === item.path && styles.active}`}>
            {item.icon}
            {item.title}
        </Link>
    )
}

export default MenuLink
