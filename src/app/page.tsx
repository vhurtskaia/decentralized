import styles from "./page.module.css";

import {JSX} from "react";
import {Header} from "@/widgets/Header";
import {MainSection} from "@/widgets/MainSection";
import {ProjectsIntegratedSection} from "@/widgets/ProjectsIntegratedSection";
import {Footer} from "@/widgets/Footer";

export default function Home(): JSX.Element {
  return (
    <div className={styles.wrapper}>
        <Header/>
      <main>
          <MainSection/>
          <ProjectsIntegratedSection/>
      </main>
        <Footer/>
    </div>
  );
}
