let editedImage;

function init() {
    const imageInput = document.getElementById('image-input');
    imageInput.addEventListener('change', handleImageUpload);

    const brightnessRange = document.getElementById('brightness-range');
    brightnessRange.addEventListener('input', applyBrightness);

    const saturationRange = document.getElementById('saturation-range');
    saturationRange.addEventListener('input', applySaturation);

    const grayscaleBtn = document.getElementById('grayscale-btn');
    grayscaleBtn.addEventListener('click', applyGrayscale);

    const invertBtn = document.getElementById('invert-btn');
    invertBtn.addEventListener('click', applyInversion);
}

function handleImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imageUrl = e.target.result;
            const image = new Image();
            image.src = imageUrl;
            image.onload = function() {
                editedImage = image;
                document.getElementById('edited-image').src = imageUrl;
            }
        };
        reader.readAsDataURL(file);
    }
}

function applyBrightness() {
    const brightnessValue = document.getElementById('brightness-range').value;
    if (editedImage) {
        editedImage.style.filter = `brightness(${brightnessValue}%)`;
    }
}

function applySaturation() {
    const saturationValue = document.getElementById('saturation-range').value;
    if (editedImage) {
        editedImage.style.filter = `saturate(${saturationValue}%)`;
    }
}

function applyGrayscale() {
    if (editedImage) {
        editedImage.style.filter = 'grayscale(100%)';
    }
}

function applyInversion() {
    if (editedImage) {
        editedImage.style.filter = 'invert(100%)';
    }
}

document.addEventListener('DOMContentLoaded', init);
