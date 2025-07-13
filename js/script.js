// Smooth scrolling untuk navigasi internal
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Alert saat tombol beli diklik
document.addEventListener('DOMContentLoaded', function() {
    const buyButtons = document.querySelectorAll('.btn-buy');
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Terima kasih! Produk telah ditambahkan ke keranjang.');
        });
    });
});

// Validasi form kontak
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.');
        this.reset();
    });
}