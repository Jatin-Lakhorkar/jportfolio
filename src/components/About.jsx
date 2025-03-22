import getShadowClass from "./getShadowClass";
// Reusable Badge Component
const Badge = ({ src, alt, darkMode }) => (
    <div
        className={`badge ${getShadowClass(darkMode)} p-2 rounded-md`}
    >
        <img src={src} alt={alt} />
    </div>
);

const About = ({ darkMode, setDarkMode }) => (
    <section id="about" className="min-h-screen container mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center text-sky-500">
            About Me
        </h2>
        <div className="mt-10 flex justify-center flex-wrap gap-6">
            {[
                {
                    src: "https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png",
                    alt: "Java",
                },
                {
                    src: "https://img.icons8.com/color/48/000000/html-5--v1.png",
                    alt: "HTML",
                },
                {
                    src: "https://img.icons8.com/color/48/000000/css3.png",
                    alt: "CSS",
                },
                {
                    src: "https://img.icons8.com/color/48/000000/javascript--v1.png",
                    alt: "JavaScript",
                },
                {
                    src: "https://img.icons8.com/color/48/000000/mongodb.png",
                    alt: "MongoDB",
                },
                {
                    src: "https://img.icons8.com/?size=100&id=SDVmtZ6VBGXt&format=png&color=000000",
                    alt: "Express",
                },
                {
                    src: "https://img.icons8.com/color/48/000000/react-native.png",
                    alt: "React",
                },
                {
                    src: "https://img.icons8.com/color/48/000000/nodejs.png",
                    alt: "Node",
                },
            ].map((tech) => (
                <Badge key={tech.alt} {...tech} darkMode={darkMode} />
            ))}
        </div>
    </section>
);
export default About;