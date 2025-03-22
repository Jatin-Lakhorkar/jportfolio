import getShadowClass from "./getShadowClass";
const Footer = ({ darkMode }) => (

    <footer className={`flex justify-between items-center py-3 px-8 ${getShadowClass(darkMode)}`}>
        <div>Made with ❤️ by Jatin</div>
        <div>&copy; 2025 All Rights Reserved.</div>
        <div className="flex space-x-4">
            {[
                {
                    href: "https://www.linkedin.com/in/jatin-lakhorkar/",
                    src: "https://img.icons8.com/color/24/000000/linkedin.png",
                    alt: "LinkedIn",
                },
                {
                    href: "https://github.com/Jatin-Lakhorkar",
                    src: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
                    alt: "GitHub",
                },
                {
                    href: "https://twitter.com/JatinLakhorkar1",
                    src: "https://img.icons8.com/color/24/000000/twitter--v1.png",
                    alt: "Twitter",
                },
            ].map((social) => (
                <a
                    key={social.alt}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity duration-300"
                >
                    <img src={social.src} alt={social.alt} className="w-7 h-7" />
                </a>
            ))}
        </div>
    </footer>
);
export default Footer;