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
            </section>
        </>
    )
}

export default Home;