import image from '../assets/Rectangle 7.png'

function Section4(){
    return(
        <>
        <div className="section4main">
            <p className='Heal-p'>HealNet’s Story: Get to know us</p>
            <div className='div-sect4'>
                <div className='div-sect4-img'><img src={image} /></div>
                <div className='div-sect4-text'>
                    <p className='text-p'>HealNet is more than just an online medical service; it’s a movement towards accessible, efficient, and compassionate healthcare for all. Founded by a team of visionary doctors, healthcare professionals, and technology experts, we are driven by the mission to deliver exceptional medical care directly to you, no matter where you are. Our platform is built on the pillars of trust, innovation, and patient-centricity, ensuring that every interaction is personalized and every treatment plan is tailored to your unique needs. With a network of licensed practitioners from diverse medical fields, we guarantee comprehensive care that’s just a click away.</p>
                    <button className='button-sect4'>Learn more about us</button>
                </div>

            </div>

        </div>
        </>

    )
}
export default Section4