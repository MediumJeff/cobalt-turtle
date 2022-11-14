import CTlogo from "../images/CTlogoNew.png";
import 'bootstrap/dist/css/bootstrap.min.css';

function HomePage() {
    return (
        <>
            <body style={{ backgroundColor: "lightblue" }}>
                <div className="row">
                    <div className="column">
                        <div style={{ textAlign: "center", marginTop: 40, fontFamily: "Oxygen" }} className='col-sm-6 offset-sm-3 col-6 offset-3'>
                            <h1>Social Media and Insight Management</h1>
                            <h2 className="mt-4">Cobalt Turtle Digital Marketing</h2>
                        </div>
                    </div>
                </div>
                <div id="logo" className='row'>
                    <div className="column">
                        <img src={CTlogo} alt="Cobalt Turtle logo" className="col-sm-4 offset-sm-4 col-8 offset-2 mt-4"></img>
                    </div>
                </div>
                <div style={{ textAlign: "center", fontFamily: "Oxygen", fontSize: 24, marginTop: 10 }}>
                    <ul style={{ listStyleType: "none", lineHeight: 3 }} className='col-sm-6 offset-sm-3 col-6 offset-3 mt-4'>
                        <li><a href='/about' id="links">About</a></li>
                        <li><a href='/portfolio' id="links">Portfolio</a></li>
                        <li><a href='/contact' id="links">Contact/Pricing</a></li>
                    </ul>
                </div>
            </body>
        </>
    )
}


export default HomePage;