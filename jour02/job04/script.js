document.addEventListener("DOMContentLoaded", function() {
    var textarea = document.getElementById("keylogger");

    document.addEventListener("keypress", function(event) {
        var keyPressed = event.key.toLowerCase();
        if (/[a-z]/.test(keyPressed)) {
            if (document.activeElement === textarea) {
                textarea.value += keyPressed + keyPressed;
            } else {
                textarea.value += keyPressed;
            }
        }
    });
});

