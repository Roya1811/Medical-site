import image1 from '../assets/Doctor-Free-PNG-Image 1.png'
import image2 from '../assets/Doctor-PNG-Clipart 1.png'
function Section7(){
    return(
        <>
        <div className="section7main">
        <p className="Top-p">Patient Testimonials: <br />Hear from Those We’ve Cared For</p>
        <p className="Intoday-p">Our team of specialists is at the forefront of medical innovation. Each specialist brings a unique blend of expertise, empathy, and experience to ensure that your health is in the best hands:</p>
        <div className="bluebox">
            <div className='part-img'><img src={image1}/></div>
            <div className='part-inf'>
                <p className='JohnsonCardiologist'>Dr. Sarah Johnson (Cardiologist)</p>
                <p className='Hearthealth'>Heart health is Dr. Wong’s passion, and her approach to cardiology integrates cutting-edge technology with compassionate care. She’s a respected voice in the prevention of heart disease and a trusted partner to her patients on their journey to wellness.</p>
                <div><button className='button-book-sect7'>Book an appointment</button></div>

            </div>
        </div>
        <div className="bluebox">
            <div className='part-img'><img src={image2}/></div>
            <div className='part-inf'>
                <p className='JohnsonCardiologist'>Dr. Mark Lee (Dermatologist)</p>
                <p className='Hearthealth'>Dr. Lee is a visionary in dermatology, advancing treatments for skin health with a gentle, holistic approach. His dedication to clinical excellence and patient education has made him a leader in dermatological care. He’s known for his precision and commitment to patient-centered care.</p>
                <div><button className='button-book-sect7'>Book an appointment</button></div>

            </div>
        </div>
            
        </div>
        </>
    )
}
export default Section7