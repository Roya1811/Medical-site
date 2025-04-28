import log1 from '../assets/Frame 5.png'
import log2 from '../assets/Frame 5 (1).png'
import log3 from '../assets/Frame 5 (2).png'
import log4 from '../assets/Frame 5 (3).png'
import log5 from '../assets/Frame 5 (4).png'



function Section3(){
    return(
        <>
        <div className="section3main">
            <p className="Top-p"><b>Top services we offer</b></p>
            <p className="Intoday-p">In today's fast-paced world, your health deserves the utmost attention and convenience. That’s<br /> why HealNet offers a suite of integrated services designed to cater to your healthcare needs digitally:</p>
            <div className='firstline-div'> 
                <div className='div1'>
                    <div><img src={log1} /></div>
                    <p className='div1-p1'>Online consultations</p>
                    <p className='div1-p2'>Consult with top doctors across various specialties via video or chat communication. It’s totally secure, private, and convenient. Choose the best time for an in-person visit with our easy-to-use scheduling system, or proceed with our online consultation.</p>
                </div>
                <div className='div2'>
                     <div><img src={log2} /></div>
                     <p className='div1-p1'>Booking Appointments</p>
                     <p className='div1-p2'>Choose the best time for an in-person visit with our easy-to-use scheduling system, or proceed with our online consultation features.</p>
                </div>
            </div>
            <div className='secondline-div'>
                <div className='div3'>
                     <div><img src={log3} /></div>
                     <p className='div1-p1'>Prescriptions</p>
                     <p className='div1-p2'>Receive and renew prescriptions digitally after your consultation with our specialists .</p>
                </div>

                <div className='div3'>
                     <div><img src={log4} /></div>
                     <p className='div1-p1'>Medical Notes</p>
                     <p className='div1-p2'>Obtain necessary medical notes for work or school with only a few clicks of hassle.</p>
                </div>

                <div className='div3'>
                     <div><img src={log5} /></div>
                     <p className='div1-p1'>Medicine Refillies</p>
                     <p className='div1-p2'>Skip the pharmacy queues and save time + energy by ordering medicine refills online.</p>
                </div>

            </div>
        </div>
        </>
    )
}
export default Section3