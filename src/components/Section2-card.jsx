import log1 from '../assets/Vector (13).png'
import log2 from '../assets/Vector (14).png'
import log3 from '../assets/Group.png'


function Section2(){
   return(
    <>
    <div className="section2-main">
        <p className="easilybook-p">Easily book an appointment in 3 simple steps.</p>
        <div className="Card-main-sect2">
            <div className="Card-divfor3-sect2">
               <div className="cardsection">
                <div className="imgandtext">
                    <img className="vector" src={log1}/>
                    <p className="vector-p">Email Address</p>
                </div>
                <input className="boxfortext" type="text" name="Enter Your Email Address"  />
              </div>   
               
              <div className="cardsection">
               <div className="imgandtext">
                    <img className="vector"  src={log2}/>
                    <p className="vector-p">Contact Number</p>
                </div>
                <input className="boxfortext" type="text" name="Enter Your Email Address"  />
                
                </div>   
               
               <div className="cardsection">
               <div className="imgandtext">
                    <img className="vector"  src={log3}/>
                    <p className="vector-p">Date of Appointment</p>
                </div>
                <input className="boxfortext" type="text" name="Enter Your Email Address"  />
                </div>   
            </div>  

            <div className="divbutton">
                <button className="buttonstyle"><b>Book Now</b></button>
            </div> 

        </div>
    </div>
    </>
   )
}
export default Section2