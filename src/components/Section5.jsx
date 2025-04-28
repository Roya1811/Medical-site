import DoctorImage from '../assets/Doctor-PNG-Images 1.png'

function Section5(){
     return(
        <>
        <div className="sectin5main">
            <p className="Top-p">How our platform works</p>
            <p className="Intoday-p">Navigating your healthcare journey with HealNet is seamless. Just follow these steps mentioned<br /> below to proceed with your selected services. You can also see our FAQ section for more guidance:</p>
            <div className='divcard-section5'>
                <div className='div1-sect5'>
                    <div className='items'>1</div>
                    <div className='lines'></div>
                    <div className='items'>2</div>
                    <div className='items'>3</div>
                 </div>
                <div className='div2-sect5'>
                    <div>
                        <h3 className='createyourprofile'>Create Your Profile</h3>
                        <p className="div1-p2">Sign up and fill in your medical history securely. Setting up your profile this way would ensure that you stay up-to-date with your medical processes.</p>
                    </div>
                    <div>
                        <h3 className='createyourprofile'>Create Your Profile</h3>
                        <p className="div1-p2">Sign up and fill in your medical history securely. Setting up your profile this way would ensure that you stay up-to-date with your medical processes.</p>
                    </div>
                    <div>
                        <h3 className='createyourprofile'>Create Your Profile</h3>
                        <p className="div1-p2">Sign up and fill in your medical history securely. Setting up your profile this way would ensure that you stay up-to-date with your medical processes.</p>
                    </div>
                </div>
                <div className='div3-sect5'><img src={DoctorImage} /></div>
            </div>
        </div>
        </>
    
     )
}
export default Section5