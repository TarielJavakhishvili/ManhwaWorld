function setTheme(theme) {
    document.body.className = theme;
    document.getElementById("themeIndicator").textContent = `Current Theme: ${theme}`;
    document.cookie = `theme=${theme};path=/`;
}

function getSavedTheme() {
    const cookies = document.cookie.split("; ");
    const themeCookie = cookies.find(cookie => cookie.startsWith("theme="));
    return themeCookie ? themeCookie.split("=")[1] : "light-mode";
}

document.getElementById("themeSwitcher").addEventListener("click", () => {
    const currentTheme = document.body.className;
    const newTheme = currentTheme === "light-mode" ? "dark-mode" : "light-mode";
    setTheme(newTheme);
});

window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = getSavedTheme();
    setTheme(savedTheme);
});