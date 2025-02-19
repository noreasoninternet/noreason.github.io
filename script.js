const container = document.querySelector(".container");
const toggleBtn = document.getElementById("toggleBtn");
const showRegister = document.getElementById("showRegister");
const showLogin = document.getElementById("showLogin");

showRegister.addEventListener("click", () => {
    container.classList.add("right-panel-active");
    toggleBtn.innerText = "Login";
    document.getElementById("toggleTitle").innerText = "Welcome Back!";
    document.getElementById("toggleText").innerText = "Already have an account?";
});

showLogin.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
    toggleBtn.innerText = "Register";
    document.getElementById("toggleTitle").innerText = "Hello, Welcome!";
    document.getElementById("toggleText").innerText = "Don't have an account?";
});

toggleBtn.addEventListener("click", () => {
    container.classList.toggle("right-panel-active");
});
