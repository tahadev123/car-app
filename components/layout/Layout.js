import Link from "next/link";

import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <h2>CAR APP</h2>
          <p>Choose and Buy your car</p>
        </Link>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        <a href="https://t.me/Taha_dehghan123" target="_blank">
          My telegram
        </a>{" "}
        Next.js courses | CarApp Project &copy;
      </footer>
    </>
  );
}

export default Layout;
