import Link from "next/link";
// @ = root directory
import logoImg from "@/assets/logo.png";
//special way of importing CSS but u gonna use tailwind
import classes from "./main-header.module.css";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      {/* We need a clickable Logo to take back in home*/}
      {/* we access this classes👇 object  */}
      <Link className={classes.logo} href="/">
        {/* In next u have to pass it as ".src" */}
        <img src={logoImg.src} alt="A plate with food on it" />
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
