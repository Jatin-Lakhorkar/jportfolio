const getShadowClass = (darkMode) => (
    darkMode ? "shadow-[0px_0px_15px_rgba(14,165,233,0.7)] bg-gradient-to-r from-sky-950 to-gray-900" : "shadow-[0px_0px_10px_theme(colors.sky.400)] bg-gradient-to-r from-white to-sky-300"
);
export default getShadowClass;