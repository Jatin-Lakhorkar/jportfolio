const getShadowClass = (darkMode) => (
    darkMode ? "shadow-[0px_0px_15px_rgba(14,165,233,0.7)] dark" : "shadow-[0px_0px_10px_theme(colors.sky.400)] light"
);
export default getShadowClass;