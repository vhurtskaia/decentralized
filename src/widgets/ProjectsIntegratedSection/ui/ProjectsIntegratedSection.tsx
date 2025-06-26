import {JSX} from "react";

import styles from "./ProjectsIntegratedSection.module.css"
import {photos} from "@/widgets/ProjectsIntegratedSection/lib/photos";
import {Photo} from "@/widgets/ProjectsIntegratedSection/ui/Photo";

export const ProjectsIntegratedSection = (): JSX.Element => {
    return (
        <section className={styles.section}>
            <h2>Projects integrated into the Arrakis AI Ecosystem</h2>

            <div className={styles.photos}>
                {photos.map((photo, i) => (
                    <Photo key={i} {...photo} />
                ))}
            </div>
        </section>
    );
};