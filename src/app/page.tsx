// import Image from "next/image";
import styles from "./page.module.css";

import {JSX} from "react";
import {Button} from "@/shared/ui";

export default function Home(): JSX.Element {
  return (
    <div className={styles.wrapper}>
        {/*<Header/>*/}
      <main className={''}>
            <Button
                bg
                size={'big'}
            >
                Buy Spice AI
            </Button>
          <Button
              bg
              size={'small'}
          >
                Buy Spice AI
            </Button>

          <Button
              size={'big'}
          >
              Buy Spice AI
          </Button>
          <Button
              size={'small'}
          >
              Buy Spice AI
          </Button>
      </main>
        {/*<Footer/>*/}
    </div>
  );
}
