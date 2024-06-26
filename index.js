const colorOptions = document.querySelectorAll('.color-option');
const fileuploadsizeinMB=5
let reader;
let uploadTimeout;
// Custom color toggeling
colorOptions.forEach(option => {
    option.addEventListener('click', function() {
        const color = this.getAttribute('bg-color');
        document.body.style.backgroundColor = color;
        const imgsrc='images/'+this.getAttribute('title')+'_umbrella.png';
        document.querySelector('.umbrella-preview img').src=imgsrc;
        const butsrc='color-'+this.getAttribute('title').toLowerCase();
        console.log(butsrc);

        const loadingSpinner = document.getElementById('loadingSpinner');
        const previewImage = document.getElementById('previewImage');
        const umbrellaimg = document.querySelector('.umbrella-preview img');
        
        const tempDiv = document.createElement('div');
        
        tempDiv.classList.add(butsrc);
        document.body.appendChild(tempDiv);
        const computedStyle = window.getComputedStyle(tempDiv);
        const backgroundColor = computedStyle.getPropertyValue('background-color');

        loadingSpinner.style.setProperty('--svg-color',backgroundColor);
        // console.log(loadingSpinner);
        loadingSpinner.style.display = 'block';
        
        previewImage.style.display = 'none';

        umbrellaimg.style.display='none';

// Simulating upload action
        setTimeout(function(){
            loadingSpinner.style.display = 'none';
            
            umbrellaimg.style.display='block';
            console.log(previewImage);
            console.log(previewImage.src);
            // previewImage.style.display = 'block';
            if(previewImage.getAttribute('title')=='set'){
                // previewImage.style.display = 'none';
                console.log(previewImage);
                previewImage.style.display = 'block';
            }
        },1000);


        console.log( document.querySelector('.upload-action').classList[1]);
        const buttondiv=document.querySelector('.upload-action');
        buttondiv.classList.replace(buttondiv.classList[1],butsrc);
        console.log( document.querySelector('.upload-action').classList);
    });
});

//  Logo upload actions
// document.addEventListener('DOMContentLoaded', function() {
    console.log("inside upload");
    const fileInput = document.getElementById('fileInput');
    const div= document.querySelector('.uploadicon');
    div.addEventListener('click', function() {
        fileInput.click();
    });

    fileInput.addEventListener('change', function(event) {
        console.log("CHANGED");
        const file = event.target.files[0];
        if(file.size > fileuploadsizeinMB){
            alert("Maximum file size allowed is 5MB. Try with smaller size file");
            fileInput.value='';
            return;
        }
        
        if (file) {
            reader = new FileReader();
            const loadingSpinner = document.getElementById('loadingSpinner');
            const loadingSpinner2 = document.getElementById('loadingSpinner2');
            const previewImage = document.getElementById('previewImage');
            const umbrellaimg = document.querySelector('.umbrella-preview img');
            const uploadicon = document.querySelector('.upload-action');
            const cross = document.getElementById('removeFile');
            console.log(uploadicon.querySelector(".uploadicon"));
            loadingSpinner.style.display = 'block';
            loadingSpinner2.style.display = 'block';
            previewImage.style.display = 'none';
            previewImage.classList.remove('expand-compress');
            umbrellaimg.style.display='none';
            umbrellaimg.classList.remove('expand-compress');
            uploadicon.querySelector(".uploadicon").style.display='none';
            document.getElementById('fileName').textContent = file.name;
            console.log(`Selected file: ${file.name}`);
            
            const buttondiv=document.querySelector('.upload');
            // buttondiv.innerHTML=file.name;
            reader.onload = function(e) {
                uploadTimeout=setTimeout(function(){
                    loadingSpinner.style.display = 'none';
                    loadingSpinner2.style.display = 'none';
                    uploadicon.querySelector(".uploadicon").style.display='block';
                    previewImage.src = e.target.result;
                    umbrellaimg.classList.add('expand-compress');
                    umbrellaimg.style.display='block';
                    console.log("INSIDE BUTTON");
                    previewImage.classList.add('expand-compress');
                    
                    previewImage.style.display = 'block';
                    previewImage.setAttribute('title','set');
                },7000);
                
            };
            cross.style.display='block';
            reader.readAsDataURL(file);
        }
    });
// });




// logo remove action
document.getElementById('removeFile').addEventListener('click', function() {
    const previewImage = document.getElementById('previewImage');
    const umbrellaimg = document.querySelector('.umbrella-preview img');
    const uploadicon = document.querySelector('.upload-action');
    const loadingSpinner2 = document.getElementById('loadingSpinner2');
    const cross = document.getElementById('removeFile');
    const fileInput = document.getElementById('fileInput');
    console.log("inside cross");
    // document.getElementById('fileInput').value = 'UPLOAD LOGO';
    if (reader) {
        reader.abort();
    }
    console.log(uploadTimeout);
    clearTimeout(uploadTimeout); 
    document.getElementById('fileName').textContent = 'UPLOAD LOGO';
    previewImage.style.display = 'none';
    previewImage.setAttribute('title','notset');
    loadingSpinner.style.display = 'none';
    loadingSpinner2.style.display = 'none';
    umbrellaimg.style.display='none';
    setTimeout(function(){
        umbrellaimg.classList.remove('expand-compress');
        umbrellaimg.classList.add('expand-compress');
        umbrellaimg.style.display='block';
    },100);
    
    console.log(umbrellaimg);
    uploadicon.querySelector(".uploadicon").style.display='block';
    previewImage.src="";
    cross.style.display='none';
    fileInput.value='';

    console.log(previewImage);
    console.log(previewImage.src);
});
