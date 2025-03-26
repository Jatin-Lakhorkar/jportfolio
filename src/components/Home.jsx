import Hero from "./Hero"
import About from "./About"
import Projects from "./Projects"
import Resume from "./Resume"
const Home = ({ darkMode }) => {
    return (
        <>
            <Hero darkMode={darkMode} />
            <About darkMode={darkMode} />
            <Projects darkMode={darkMode} />
            <Resume darkMode={darkMode} />
        </>
    );
};
export default Home;