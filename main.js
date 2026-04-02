const btn = document.getElementById('openPopup');
const overlay = document.getElementById('popupOverlay');
const close = document.getElementById('closePopup');

btn.onclick = () => {
    overlay.style.display = 'block';
}

close.onclick = () => {
    overlay.style.display = 'none';
}

window.onclick = (event) => {
    if (event.target == overlay) {
        overlay.style.display = 'none';
    }
}