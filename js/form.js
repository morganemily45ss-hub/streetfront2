document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("auth-form");
    const emailInput = document.getElementById("email");
    const message = document.getElementById("form-message");
    const title = document.getElementById("auth-title");
    const subtitle = document.getElementById("auth-subtitle");
    const switchCopy = document.getElementById("switch-copy");
    const switchLink = document.getElementById("switch-link");
    const googleBtn = document.getElementById("google-btn");
    const appleBtn = document.getElementById("apple-btn");

    if (!form || !emailInput || !message) return;

    const mode = (new URLSearchParams(window.location.search).get("mode") || "signup").toLowerCase();
    const isSignin = mode === "signin" || mode === "login";

    if (isSignin) {
        if (title) title.textContent = "Log in";
        if (subtitle) subtitle.textContent = "Enter your email to continue.";
        if (switchCopy) switchCopy.textContent = "Need a StreetEasy account?";
        if (switchLink) {
            switchLink.href = "./form.html?mode=signup";
            switchLink.textContent = "Sign up";
        }
    } else if (switchLink) {
        switchLink.href = "./form.html?mode=signin";
        switchLink.textContent = "Log in";
    }

    function setMessage(text, type) {
        message.textContent = text;
        message.className = "message" + (type ? " " + type : "");
    }

    function validEmail(value) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const email = emailInput.value.trim();

        if (!email || !validEmail(email)) {
            setMessage("Please enter a valid email address.", "error");
            return;
        }

        try {
            localStorage.setItem("localAuthEmail", email);
            setMessage("Saved. Redirecting...", "");
            setTimeout(function () {
                window.location.href = "./index.html";
            }, 500);
        } catch (error) {
            setMessage("Could not save in browser storage.", "error");
        }
    });

    function socialClick(provider) {
        setMessage("Continue with " + provider + " is not connected yet.", "error");
    }

    if (googleBtn) {
        googleBtn.addEventListener("click", function () {
            socialClick("Google");
        });
    }

    if (appleBtn) {
        appleBtn.addEventListener("click", function () {
            socialClick("Apple");
        });
    }
});
