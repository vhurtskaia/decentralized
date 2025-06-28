import {JSX} from "react";
import Image from "next/image";

import styles from "./HarvestSection.module.css";

export const HarvestSection = (): JSX.Element => {
    return (
        <section className={styles.section}>
            <p>Join our community and harvest $SALT</p>

            <Image
                src={'/images/widgets/HarvestSection/nasa.png'}
                className={styles.image}
                height={520}
                width={1920}
                alt={'Nasa Photo'}
            />
        </section>
    );
};