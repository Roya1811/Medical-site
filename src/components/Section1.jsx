import img from '../assets/Doctor-PNG-File-Download-Free 1.png'
import log1 from '../assets/Vector (8).png'
import log2 from '../assets/Vector (9).png'
import log3 from '../assets/Vector (10).png'
import log4 from '../assets/Vector (11).png'
import log5 from '../assets/Vector (12).png'
import log6 from '../assets/Vector (8).png'


function Section1(){
    return(
        <>
        <div className='maindiv-section1'>
            <div className='Yourtrusted-section1'>
                <p className='Yourtrusted-p'>
                    <b>Your trusted partner <br/>in digital healthcare.</b>
                </p>
                <p className='Empowering-p'>
                    Empowering Your Health at Every Step. Experience personalized medical care from the comfort of your home. Connect with certified doctors, or manage prescriptions, and schedule appointments with ease. Ready to take control of your health? Get Started or Book an Appointment today.
                </p>
                <div><button className='button-book-sect1'>Book an appointment</button></div>
                <p className='Trusted-p' >Trusted by millions across the globe:</p>
                <div className='Logos-flex-sect1'>
                    <div><img className='logos-section1' src={log1} /></div>
                    <div><img className='logos-section1' src={log2} /></div>
                    <div><img className='logos-section1' src={log3} /></div>
                    <div><img className='logos-section1' src={log4} /></div>
                    <div><img className='logos-section1' src={log5} /></div>
                    <div><img className='logos-section1' src={log6} /></div> 

                </div>

            </div>
            <div className='Doctorimg-section1'>
            <img className='image-section1' src={img} />
            </div>
        </div>
        </>
    )
}
export default Section1
