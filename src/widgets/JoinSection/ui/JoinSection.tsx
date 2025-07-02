import {JSX} from "react";
import Image from "next/image";

import {Icon} from "@/shared/ui";

import {useSlideScroll} from "@/widgets/PageSlider/model/useSlideScroll";

import styles from "./JoinSection.module.css";

export const JoinSection = (): JSX.Element => {
    useSlideScroll({
        trigger: 'join',
        scrollTo: 'harvest',
        scrollToPrev: 'join'
    });

    return (
        <section
            id={'join'}
            className={styles.section}>
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
                className={styles.image}
                src={'/images/widgets/JoinSection/moon.webp'}
                height={484}
                width={484}
                alt={'Planet Decoration'}
            />
        </section>
    );
};