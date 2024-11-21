function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();


    if (name === '' || email === '') {
        alert('Harap isi semua kolom!');
        return;
    }


    if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Email tidak valid!');
        return;
    }


    alert('Pendaftaran berhasil! Terima kasih telah mendaftar.');
}



