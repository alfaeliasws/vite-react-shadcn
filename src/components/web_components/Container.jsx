import React from 'react'
import { c } from '../../helpers/styleHelper'
import { defFlex, fullWH } from '../../styles/coinedStyle'

function MainContainer({children}) {
  return (
    <div className={c("dark min-w-full min-h-[100vh]")}>
        <div className={c(fullWH, defFlex, "dark text-white" )} >
          <div className="background">
              <div></div>
              <div></div>
              <div></div>
          </div>
            {...children}
        </div>
    </div>
  )
}

export default MainContainer