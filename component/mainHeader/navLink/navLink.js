"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navLink.module.css";

export default function NavLink({ href, children }) {
  const path = usePathname();

  return (
    <Link
      href={href}
      // Conditional statement when path starts with that then
      // Highlight the text name
      className={
        //Add Link Class so we either have Link class or active
        //puts style on all them
        path.startsWith(href) ? ` ${styles.link} ${styles.active}` : styles.link
      }
    >
      {/* name */}
      {children}
    </Link>
  );
}
