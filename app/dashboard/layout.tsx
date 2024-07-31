import Navbar from "../ui/dashboard/navbar/navbar";
import Sidebar from "../ui/dashboard/sidebar/sidebar";
import styles from "../ui/dashboard/dashboard.module.css";
import React from "react";



export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={styles.container}>
            <div className={styles.menu}><Sidebar/></div>
            <div className={styles.navBar}>
                <Navbar/>
                {children}
            </div>
        </div>
    );
}

