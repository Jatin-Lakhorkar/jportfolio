import getShadowClass from "./getShadowClass";

// Reusable Project Card Component
const ProjectCard = ({ title, description, image, darkMode }) => (
    <div className={` project ${getShadowClass(darkMode)}`}>

        <div className="relative group">
            <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
        </div>

        {/* Content */}
        <div className="relative">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mt-2">{description}</p>
        </div>
    </div>
);

const Project = ({ darkMode, setDarkMode }) => (
    < section id="projects" className="min-h-screen container mx-auto px-6 py-16" >
        <h2 className="text-4xl font-bold text-center text-sky-500">
            Projects
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
                {
                    title: "Weather App",
                    description:
                        "A simple weather app using Java, REST API, and weather APIs.",
                    image: "../assets/img.jpg",
                },
                {
                    title: "Movie Recommendation App",
                    description: "Built with MERN stack using the TMDB API.",
                },
                {
                    title: "Calculator",
                    description:
                        "A simple Calculator app built using HTML, CSS, and JS.",
                },
            ].map((project) => (
                <ProjectCard key={project.title} {...project} darkMode={darkMode} />
            ))}
        </div>
    </section >
);
export default Project;