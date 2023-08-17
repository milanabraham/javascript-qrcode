const generateBtn = document.getElementById("generateBtn");
const qrCanvas = document.getElementById("qrCanvas");
const qrTextInput = document.getElementById("qrText");

generateBtn.addEventListener("click", () => {
    const text = qrTextInput.value.trim();
    if (text === "") {
        alert("Please enter some text");
        return;
    }
    generateQRCode(text);
});

function generateQRCode(data) {
    const qr = new QRious({
        element: qrCanvas,
        value: data,
        size: 128
    });
}
