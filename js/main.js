function sendToWhatsApp(productName, productImage) {
    const phone = "212612557440";
    const message = `i need more detial for this product: ${productName}%0A show this img: ${productImage}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}

function sendEmail(productName, productImage) {
    const email = "contactme.abdelilah@gmail.com"; // عنوان البريد
    const subject = `more details about product: ${productName}`;
    const body = `hello ,%0A%0Ai need more details about this product: ${productName}.%0A img link: ${productImage}%0A%0Aشكرًا لكم!`;
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
}

