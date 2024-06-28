import React from 'react'
import { c } from '../../helpers/styleHelper'
import { defFlex } from '../../styles/coinedStyle'
import Navbar from './navbar'

function WebHeader() {
  return (
    <div className={c(defFlex, "w-full bg-blue pt-3")}>
        <div className="w-6/12 flex justify-start pl-3">
          <img src="./logo.png" className="h-10 w-auto" />
        </div>
        <div className="w-6/12 flex justify-end pr-3">
          <Navbar className="bg-transparent"/>
        </div>
  </div>
  )
}

export default WebHeader