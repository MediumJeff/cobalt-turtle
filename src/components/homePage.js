import CTlogo from "../images/CTlogoNew.webp";
import 'bootstrap/dist/css/bootstrap.min.css';

function HomePage() {
    return (
        <>
            <body className="App">
                <div className="row">
                    <div className="column">
                        <div className="home">
                            <h1>Social Media and Insight Management</h1>
                            <h2 className="mt-4">Cobalt Turtle Digital Marketing</h2>
                        </div>
                    </div>
                </div>
                <div id="logo" className='row'>
                    <img src={CTlogo} alt="Cobalt Turtle Marketing logo" height='500px' width className="col-sm-4 offset-sm-4 col-8 mt-4"></img>
                </div>
                <div className="menu">
                    <ul>
                        <li><a href='/about' id="links">About</a></li>
                        <li><a href='/portfolio' id="links">Portfolio</a></li>
                        <li><a href='/contact' id="links">Contact/Pricing</a></li>
                    </ul>
                </div>
                <br /><br />
            </body>
        </>
    )
}


export default HomePage;