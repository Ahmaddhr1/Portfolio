import React from 'react'
import {motion} from "framer-motion"
const Spliter = ({text}) => {
  return (
    <div>
         {text.split("").map((char, i) => {
            return (
              <motion.span key={i} >
                {char}
              </motion.span>
            );
          })}
    </div>
  )
}

export default Spliter