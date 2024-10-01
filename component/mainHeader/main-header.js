import Link from "next/link";
// @ = root directory
import logoImg from "@/assets/logo.png";
import classes from "@/component/mainHeader/main-header.module.css";
import Image from "next/image";
import BackgroundHeader from "@/component/mainHeader/backgroundHeader";

export default function MainHeader() {
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
              <Link href="/meals">Browse Meals</Link>
            </li>

            <li>
              <Link href="/community">Food Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
