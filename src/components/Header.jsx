import logo from '../assets/Group 3.png'
function Header (){
    return(
        <>
        <div className='Header-maindiv'>
            <div className='header-div1'><img className='logo' src={logo} /></div>
            <div className='header-div2'>
                <ul className='ul-style'>
                    <li className='ul1'>Home </li>
                    <li className='ul1'>Services</li>
                    <li className='ul1'>Find Doctors</li>
                    <li className='ul1'>About us</li>
                    <li className='ul1'>Blog</li>
                    <li className='ul1'>Contact</li>

                </ul>
            </div>
            <div className='header-div3'><button className='button-header'>Join us</button></div>

        </div>
        </>
    )
}
export default Header