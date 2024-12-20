// Bırakma alanını etkinleştir
function allowDrop(event) {
    event.preventDefault();
}

// Sürükleme işlemini başlat
function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

// Bırakma alanına nesneyi yerleştir
function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
}

// Elementlere olayları bağla
document.getElementById('drag1').addEventListener('dragstart', drag);
document.getElementById('dropzone').addEventListener('dragover', allowDrop);
document.getElementById('dropzone').addEventListener('drop', drop);
