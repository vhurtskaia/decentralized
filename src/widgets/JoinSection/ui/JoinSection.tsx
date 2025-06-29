import {JSX} from "react";
import Image from "next/image";

import {Icon} from "@/shared/ui";

import styles from "./JoinSection.module.css";

export const JoinSection = (): JSX.Element => {
    return (
        <section className={styles.section}>
            <div className={styles.join__content}>
                <h2>Join our community</h2>
                <p>
                    Join us on our mission to to the moon & revolutionize open source AI development so that we can build a
                    permissionless, democratized, and decentralized AI.
                    <br/>
                    <br/>
                    Let the fate of AI be in our hands and not that of big tech companies.
                </p>

                <div className={styles.join__links}>
                    <Icon href={'#'} name={'telegram'} size={'big'}/>

                    <Icon href={'#'} name={'x'} size={'big'}/>
                </div>
            </div>

            <Image
                src={'/images/widgets/JoinSection/moon.png'}
                className={styles.join__moon}
                height={484}
                width={484}
                alt={'Planet Decoration'}
            />
        </section>
    );
};