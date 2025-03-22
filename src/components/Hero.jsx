import getShadowClass from "./getShadowClass";
const Hero = ({ darkMode, setDarkMode }) => (
    <section
        id="home"
        className={`min-h-100 flex flex-col justify-center items-center text-center ${getShadowClass(darkMode)} transition-all duration-500`}
    >
        <h2 className="text-2xl md:text-5xl font-extrabold tracking-tight">
            <span className="inline-block animate-wave">👋</span> Hi, There
        </h2>
        <p className=" mt-6 text-lg md:text-xl leading-relaxed px-4">
            I am Jatin Lakhorkar, a passionate developer 💻 who loves to build
            impactful projects 🌍 to help society. Language is not a barrier for me
            🚀, I can code in any language after learning 📚. I am a quick learner ⚡
            and problem solver 🧩. Loves to work in a team 🤝 and learn from others
            🔍.
        </p>
    </section>
);
export default Hero;
