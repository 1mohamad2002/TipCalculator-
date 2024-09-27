document.addEventListener("DOMContentLoaded", function () {
    // Custom function to calculate tip
    function calculateTip() {
        var billAmount = document.getElementById("billAmount").value;
        var serviceQuality = document.getElementById("serviceQuality").value;
        var numPeople = document.getElementById("totalPeople").value;

        // Validate input
        if (billAmount === "" || serviceQuality == 0) {
            window.alert("Please enter values for the bill and service quality!");
            return;
        }

        // Check if the number of people is valid
        if (numPeople === "" || numPeople <= 1) {
            numPeople = 1;
            document.getElementById("each").style.display = "none";
        } else {
            document.getElementById("each").style.display = "block";
        }

        // Calculate the tip
        var total = (billAmount * serviceQuality) / numPeople;
        total = Math.round(total * 100) / 100;
        total = total.toFixed(2);

        var totalTip = (billAmount * serviceQuality); // Total tip for the entire bill
        totalTip = Math.round(totalTip * 100) / 100;
        totalTip = totalTip.toFixed(2);
        // Display the tip
        document.getElementById("TotalTip").style.display = "block"; // Ensure this matches the correct ID
        document.getElementById("tip").innerHTML = total;
        document.getElementById("totalTips").innerHTML = totalTip;
    }

    // Hide the tip amount initially
    document.getElementById("TotalTip").style.display = "none"; // Ensure this matches the correct ID
    document.getElementById("each").style.display = "none"; // Ensure this matches the correct ID

    // Click event for the button
    document.getElementById("calculate").onclick = function () {
        calculateTip();
    };
});
