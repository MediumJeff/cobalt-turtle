import CTlogo from "../images/CTlogoNew.webp";

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
                        <li><a href='about' id="links">About</a></li>
                        <li><a href='portfolio' id="links">Portfolio</a></li>
                        <li><a href='contact' id="links">Contact/Pricing</a></li>
                    </ul>
                </div>
                <br /><br />
            </div>
        </>
    )
}


export default HomePage;