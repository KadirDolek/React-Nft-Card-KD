import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <div id='div1'><img id='icone' src="./src/assets/images/image-equilibrium.jpg" alt="" /></div>
    <div id='div2'>
      <p id='div2txt'>Equilibrium #3429 </p>
      <p id='div2txt2'>Our Equilibrium collection promotes balance and calm</p>
      <div id='div2txt3'>
      <p id='money'><img id='ethereum' src="./src/assets/images/icon-ethereum.svg" alt="" /> 	&nbsp;0.041 ETH</p>
      <img id='clock' src="./src/assets/images/icon-clock.svg" alt="" /><p id='txtEther'>	&nbsp; 3 days left</p>
      </div>
      </div>
      <hr style={{width:'90%', opacity:'20%'}}/>
    <div id='div3'>
      <img id='avatar' src="./src/assets/images/image-avatar.png" style={{height:'35px'}} alt="" />
      <p id='txtavatar'>&nbsp;&nbsp;&nbsp;&nbsp;Creation of <b>Jules Wyvern</b></p></div>
  </StrictMode>,
)
