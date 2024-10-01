import Link from "next/link";
// @ = root directory
import logoImg from "@/assets/logo.png";

export default function MainHeader() {
  return (
    <header>
      {/* We need a clickable Logo to take back in home*/}
      <Link href="/">
        {/* In next u have to pass it as ".src" */}
        <img src={logoImg.src} alt="A plate with food on it" />
        NextLevel Food
      </Link>
      {/* navigation elemnt */}
      <nav>
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
