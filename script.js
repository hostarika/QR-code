function activeqrcode() {


    const input = document.getElementById('input').value;

    const color1 = document.getElementById('color').value;

    const color2 = document.getElementById('bgColor').value;
    
    const qrBox = document.getElementById('qrcode');
    

    qrBox.innerHTML = '';
    

    new QRCode(qrBox, {
        text: input,
        width: 128,
        height: 128,
        colorDark: color1,
        colorLight: color2,
        correctLevel: QRCode.CorrectLevel.H
    });
}