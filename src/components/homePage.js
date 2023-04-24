import CTlogo from "../images/CTlogoNew.webp";
import { NavLink } from 'react-router-dom';

function HomePage() {
    return (
        <>
            <div className="App">
                <div className="home">
                    <h1>Social Media and Insight Management</h1>
                    <h2 className="mt-4">Cobalt Turtle Digital Marketing</h2>
                </div>
                <div id="logo">
                    <img src={CTlogo} alt="Cobalt Turtle Marketing logo" height='500px' className="col-sm-4 col-12 mt-4 img-fluid"></img>
                </div>
                <div className="menu">
                    <ul>
                        <NavLink className='nav-link' to='/about'>About</NavLink>                        
                        <NavLink className='nav-link' to='/portfolio'>Portfolio</NavLink>                        
                        <NavLink className='nav-link' to='/contact'>Contact/Pricing</NavLink>
                    </ul>
                </div>
                <br /><br />
            </div>
        </>
    )
}


export default HomePage;