document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        document.getElementById('fileName').textContent = file.name;
    }
});

document.getElementById('removeFile').addEventListener('click', function() {
    document.getElementById('fileInput').value = '';
    document.getElementById('fileName').textContent = '';
});
