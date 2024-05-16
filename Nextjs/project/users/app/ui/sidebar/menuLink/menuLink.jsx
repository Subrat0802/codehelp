'use client'

import React from 'react'
import Link from "next/link"
import styles from "./menuLink.module.css";
import { usePathname } from 'next/navigation';

const MenuLink = ({pro}) => {

    const pathname = usePathname();


  return (
    <div>
        <Link href={pro.path} className={`${styles.container} ${pathname === pro.path && styles.active}`}>
            {pro.icon}
            {pro.title}
        </Link>
    </div>
  )
}

export default MenuLink