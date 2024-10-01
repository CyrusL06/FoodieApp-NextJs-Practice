import Link from "next/link";
// @ = root directory
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        {/* In next u can optimize Img default elemnt it displays and optimize it  */}
        {/* ADDS priority since it will always be visible when loaded */}
        <Image src={logoImg} alt="A plate with food on it" priority />
        NextLevel Food
      </Link>
      {/* navigation elemnt */}
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>

          <li>
            <Link href="/community">Food Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
