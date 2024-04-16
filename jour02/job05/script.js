document.addEventListener("DOMContentLoaded", function() {
    var footer = document.getElementById("footer");

    window.addEventListener("scroll", function() {
        var scrollPercentage = (document.documentElement.scrollTop + window.innerHeight) / document.documentElement.scrollHeight * 100;
        // Change footer color based on scroll percentage
        footer.style.backgroundColor = getColorFromPercentage(scrollPercentage);
    });

    // Function to determine color based on scroll percentage
    function getColorFromPercentage(percentage) {
        if (percentage < 25) {
            return "green";
        } else if (percentage < 50) {
            return "yellow";
        } else if (percentage < 75) {
            return "orange";
        } else {
            return "red";
        }
    }
});

