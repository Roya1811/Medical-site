import { useEffect, useState } from 'react'
import Logo from '../assets/Group 23.png'
import l1 from '../assets/ic_baseline-facebook.png'
import l2 from '../assets/mdi_instagram.png'
import l3 from '../assets/mdi_linkedin.png'
import l4 from '../assets/mdi_youtube.png'



function Footer(){
    
    const [ data,setData] = useState([])
  useEffect(( )=>{
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(json => setData(json))
},[])
    return(
        <>
        <div className="Footermain">
            <div className='Maindiv-footer'>
                <div className='div-firstline-footer'>
                <div>
                    <img src={Logo} alt=""  />
                    <p className='textunderlogo'> Experience personalized medical <br/> care from the comfort of your home.</p>
                </div>
                <div>
                    <ul className='ul-style-footer'>
                        <li className='ul1-footer'>Support</li>
                        <li className='ul1-footer'>Getting Started</li>
                        <li className='ul1-footer'>FAQs</li>
                        <li className='ul1-footer'>Help Articles</li>
                        <li className='ul1-footer'>Report an issue</li>
                        <li className='ul1-footer'>Conctact Help Desk</li>
                    </ul>
                </div>
                <div>
                    <ul className='ul-style-footer'>
                        <li className='ul1-footer'>Services</li>
                        <li className='ul1-footer'>Booking Appointments</li>
                        <li className='ul1-footer'>Online consultations</li>
                        <li className='ul1-footer'>Presriptions</li>
                        <li className='ul1-footer'>Medicine Refills</li>
                        <li className='ul1-footer'>Medical Notes</li>
                    </ul>
                </div>
                <div>
                    <ul className='ul-style-footer'>
                        <li className='ul1-footer'>Legal</li>
                        <li className='ul1-footer'>Terms & Conditions</li>
                        <li className='ul1-footer'>Privacy Policy</li>
                        <li className='ul1-footer'>Cockie NOtice</li>
                        <li className='ul1-footer' >Cockie Preferences</li>
                        <li className='ul1-footer'>Trust Center</li>
                    </ul>
                </div>
                </div>
                
                <hr />
                <div className='div-firstline-footer'>
                    <div className='l1234'>
                        <img src={l1}  />
                        <img src={l2}  />
                        <img src={l3}  />
                        <img src={l4}  />

                    </div>
                    <div>
                        <p className='textunderlogo'>HealNet 2024 © All Rights Reserved</p>
                    </div>
                </div>

            </div>
            
        </div>
        {data.map((item) => (<div>{item.title}</div>))}
        </>
    )

}
 export default Footer