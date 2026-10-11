const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const button = document.getElementById("submitBtn");
 
function validate() {
    const nameValid = name.value.trim() !== "";
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
    const passwordValid = password.value.length >= 6;
 
    document.getElementById("nameError").textContent =
        nameValid ? "" : "Name is required";
 
    document.getElementById("emailError").textContent =
        emailValid ? "" : "Enter a valid email";
 
    document.getElementById("passwordError").textContent =
        passwordValid ? "" : "Minimum 6 characters required";
 
    button.disabled = !(nameValid && emailValid && passwordValid);
 
    return nameValid && emailValid && passwordValid;
}
 
document.getElementById("form").addEventListener("input", function() {
    document.getElementById("success").textContent = "";
    validate();
});
 
document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
 
    if (validate()) {
        document.getElementById("success").textContent =
            "Registration successful!";
        this.reset();
        validate();
    }
});
 
validate();