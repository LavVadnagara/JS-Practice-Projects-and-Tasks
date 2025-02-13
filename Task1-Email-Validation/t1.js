document.addEventListener("DOMContentLoaded", function() {
    function validateEmail(e) {
        e.preventDefault();

        let emailInput = document.getElementById('email').value;
        let emailResult = document.getElementById('emailCheckResult');
        
        // let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net|org|edu|gov|mil|co|io|info|biz|us|uk|in|ca|au)$/i;


        if (emailRegex.test(emailInput)) {
            emailResult.innerText = "Valid email";
            emailResult.style.color = "green";
        } else {
            emailResult.innerText = "Invalid email";
            emailResult.style.color = "red";
        }
    }

    document.getElementById("validateBtn").addEventListener("click", validateEmail);
});
