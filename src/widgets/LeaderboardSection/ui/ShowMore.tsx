'use client'

import React, {JSX} from "react";
import {Button} from "@/shared/ui";

import styles from "@/widgets/LeaderboardSection/ui/LeaderboardSection.module.css";

interface ShowMoreProps {
    state: boolean;
    action: () => void;
}

export const ShowMore = ({ state, action }: ShowMoreProps): JSX.Element => {
   return (
       <div className={styles.buttons}>
           {state ? <Button size={'small'} href="#">View full leaderboard</Button> : null}

           <button
               className={styles.show__button}
               onClick={action}
           >
               <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <rect x="0.5" y="0.5" width="55" height="55" rx="27.5"/>
                   <path d="M28 21L34 27M28 21L22 27M28 21V35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
           </button>
       </div>
   )
}