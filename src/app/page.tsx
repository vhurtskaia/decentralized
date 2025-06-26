import styles from "./page.module.css";

import {JSX} from "react";
import {Header} from "@/widgets/Header";
import {MainSection} from "@/widgets/MainSection";
import {Footer} from "@/widgets/Footer";

export default function Home(): JSX.Element {
  return (
    <div className={styles.wrapper}>
        <Header/>
      <main>
          <MainSection/>
      </main>
        <Footer/>
    </div>
  );
}
