function sendToWhatsApp(productName, productImage) {
    const phone = "212612557440";
    const message = `i need more detial for this product: ${productName}%0A show this img: ${productImage}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}

