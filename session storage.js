window.onload = function() {
    // Set session data only if it's not already set
    if (!sessionStorage.getItem("name")) {
        sessionStorage.setItem("name", "pranjal");
        sessionStorage.setItem("names", "pranjalns");
    }

    // If you don't want to clear the session data, remove this:
    // sessionStorage.clear();
};
