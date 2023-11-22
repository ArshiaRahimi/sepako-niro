import React from 'react'
import './partners.css'

import Logo1 from '../logos/1.png'
import Logo2 from '../logos/2.jpeg'
import Logo3 from'../logos/3.jpeg'
import Logo4 from'../logos/4.png'
import Logo5 from'../logos/5.jpeg'
import Logo6 from'../logos/6.jpeg'
import Logo7 from'../logos/7.png'
import Logo8 from'../logos/8.jpeg'
import Logo9 from'../logos/9.png'
import Logo10 from'../logos/10.webp'

const partners = () => {
  return (
    <div class="whole">
       <div class='stakeHolders'>کارفرمایان</div>
    <div class="container">
        <div class="scroll-parent">
            <div class="scroll-element primary">
                <img src={Logo1} alt="" width="100" height="100"/>
                <img src={Logo2} alt="" width="100" height="100"/>
                <img src={Logo3} alt="" width="100" height="100"/>
                <img src={Logo4} alt="" width="100" height="100"/>
                <img src={Logo5} alt="" width="100" height="100"/>
                <img src={Logo6} alt="" width="100" height="100"/>
                <img src={Logo7} alt="" width="100" height="100"/>
                <img src={Logo8} alt="" width="100" height="100"/>
                <img src={Logo9} alt="" width="100" height="100"/>
                <img src={Logo10} alt="" width="100" height="100"/>
            </div>
            <div class="scroll-element secondary">
                <img src={Logo1} alt="" width="100" height="100"/>
                <img src={Logo2} alt="" width="100" height="100"/>
                <img src={Logo3} alt="" width="100" height="100"/>
                <img src={Logo4} alt="" width="100" height="100"/>
                <img src={Logo5} alt="" width="100" height="100"/>
                <img src={Logo6} alt="" width="100" height="100"/>
                <img src={Logo7} alt="" width="100" height="100"/>
                <img src={Logo8} alt="" width="100" height="100"/>
                <img src={Logo9} alt="" width="100" height="100"/>
                <img src={Logo10} alt="" width="100" height="100"/>
            </div>

        </div>
    </div>
    </div>
   
  )
}

export default partners