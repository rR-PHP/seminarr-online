function validateForm() 
// Mendapatkan elemen-elemen dari form
const form = document.getElementById("registrationForm");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");

// Menambahkan event listener pada form untuk melakukan validasi saat submit
form.addEventListener("submit", function(event) {
    // Menonaktifkan pengiriman form secara otomatis
    event.preventDefault();
    
    let isValid = true;
    
    // Validasi nama
    if (nameField.value.trim() === "") {
        nameField.classList.add("is-invalid");
        nameError.style.display = "block";
        isValid = false;
    } else {
        nameField.classList.remove("is-invalid");
        nameError.style.display = "none";
    }
    
    // Validasi email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailField.value.trim())) {
        emailField.classList.add("is-invalid");
        emailError.style.display = "block";
        isValid = false;
    } else {
        emailField.classList.remove("is-invalid");
        emailError.style.display = "none";
    }

    // Jika validasi berhasil, submit form
    if (isValid) {
        alert("Pendaftaran berhasil!");
        form.submit();  // Gantikan dengan pengiriman form ke server atau AJAX
    }
});



