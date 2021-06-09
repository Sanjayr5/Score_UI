import React, { useEffect, useState } from 'react';
import LinearProgress from "@material-ui/core/LinearProgress";

function ProgressBar({score}) {
    const [countOfProgess,  setCountOfProgess] = useState(0);
    const [scores,  setScores] = useState(score);
    // console.log(typeof score);
 useEffect((score) => {
   const timer = setInterval(() => {
     setCountOfProgess((oldProgress) => {
       return Math.min(oldProgress + 20, scores);
     });
   }, 499);
 
   return () => {
     clearInterval(timer);
   };
 }, []);
 
 return (
   <div>
     <LinearProgress variant="determinate" 
                     value={countOfProgess} />
   </div>
 );
}
export default ProgressBar;