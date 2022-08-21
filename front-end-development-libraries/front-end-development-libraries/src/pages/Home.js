import {Link} from "react-router-dom";

const Home = () =>{
    return(
        <>
            <nav className="nav-bar">
                <header className="title">
                    Front-End Development Libraries
                </header>
            </nav>
            <section className="project-section">
                <Link to="quote" className="project">Random Quote Machine</Link>
                <Link to="markdown" className="project">Markdown Previewer</Link>
                <Link to="drum" className="project">Drum Machine</Link>
                <Link to="calculator" className="project">JavaScript Calculator</Link>
                <Link to="clock" className="project">25 + 5 Clock</Link>
            </section>
        </>
    )
}

export default Home;