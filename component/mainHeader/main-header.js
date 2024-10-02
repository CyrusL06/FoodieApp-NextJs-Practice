'use client';

import Link from "next/link";
// @ = root directory
import logoImg from "@/assets/logo.png";
import classes from "@/component/mainHeader/main-header.module.css";
import Image from "next/image";
import BackgroundHeader from "@/component/mainHeader/backgroundHeader";
import { usePathname } from "next/navigation";
import NavLink from "./navLink/navLink";

export default function MainHeader() {
  // thus hook gives you current actuve path which is after domain
  // const path = usePathname();

  return (
    // Use fragment so we can import another component or sibling
    <>
      <BackgroundHeader />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>
        {/* navigation elemnt */}
        <nav className={classes.nav}>
          <ul>
            <li>
              {/* 
              Since this is the only part uses client
              and we dont want to lose the server side 
              advantages we put it in another component
              */}
              {/* Passes the {href} and {children}(the one inside parse to the other component) */}
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>

            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
