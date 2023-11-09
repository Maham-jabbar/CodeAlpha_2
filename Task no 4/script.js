document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculate");
    const dobInput = document.getElementById("dob");
    const result = document.getElementById("result");

    calculateButton.addEventListener("click", function () {
        const birthDate = new Date(dobInput.value);
        const currentDate = new Date();

        if (isNaN(birthDate)) {
            result.textContent = "Please enter a valid date of birth.";
        } else {
            const age = currentDate.getFullYear() - birthDate.getFullYear();
            result.textContent = `Your age is ${age} years.`;
        }
    });
});
