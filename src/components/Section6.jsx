import rect from '../assets/Rectangle 8.png'
import rect1 from '../assets/Rectangle 8 (1).png'
import rect2 from '../assets/Rectangle 8 (2).png'
import rect3 from '../assets/Rectangle 8 (3).png'

function Section6(){
    return(
        <>
        <div className="section6main">
            <p className="Top-p">Patient Testimonials: <br />Hear from Those We’ve Cared For</p>
            <p className="Intoday-p">Discover the difference we make through the voices of those we’ve served:</p>
            <div className="cards2-sect6">
                <div className="card-sect6">
                    <div className='Rect-img-sect6' ><img className='img-sect6' src={rect} /></div>
                    <p className='text-sect6'>“After my knee surgery, the convenience of online consultations made my recovery smoother than I could have imagined.”
                     - Linda A.</p>
                </div>
                <div className="card-sect6">
                    <div className='Rect-img-sect6' ><img className='img-sect6' src={rect1} /></div>
                    <p className='text-sect6'>“Managing chronic conditions like diabetes requires a lot of vigilance, but the medicine refill system has simplified my life.”
                    - Henry B.</p>
                </div>
            </div>
            <div className='cards-group-sect6'>
                <div>
                    <p className='number'>10,000+</p>
                    <p className='textundernum'>Successful Consultations</p>
                </div>
                <div>
                    <p className='number'>2,500+</p>
                    <p className='textundernum'>Healthcare Professionals</p>
                </div>                
                <div>
                    <p className='number'>98%</p>
                    <p className='textundernum'>Patient Satisfaction Rate</p>
                </div>                
                <div>
                    <p className='number'>200+</p>
                    <p className='textundernum'>Top Specialists</p>
                </div>            </div>
            <div className="cards2-sect6">
                <div className="card-sect6">
                    <div className='Rect-img-sect6' ><img className='img-sect6' src={rect2} /></div>
                    <p className='text-sect6'>“The prescription refill system is a game-changer for managing my diabetes. It’s really efficient and completely hassle-free.”
                    - Joshua T.</p>
                </div>
                <div className="card-sect6">
                    <div className='Rect-img-sect6' ><img className='img-sect6' src={rect3} /></div>
                    <p className='text-sect6'>“Finding a doctor who really understands all of my health needs has never been easier. This platform has changed my life.”
                     - Samantha K.</p>
                </div>
            </div>
        </div>
        </>

    )
}
export default Section6