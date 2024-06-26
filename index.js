const colorOptions = document.querySelectorAll('.color-option');
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

                setTimeout(function(){
                    loadingSpinner.style.display = 'none';
                    umbrellaimg.style.display='block';
                    if(previewImage.src !=""){

                        previewImage.style.display = 'block';
                    }
                },1000);


                console.log( document.querySelector('.button-color-option').classList[1]);
                const buttondiv=document.querySelector('.button-color-option');
                buttondiv.classList.replace(buttondiv.classList[1],butsrc);
                console.log( document.querySelector('.button-color-option').classList);
            });
        });
        document.addEventListener('DOMContentLoaded', function() {
            const fileInput = document.getElementById('fileInput');
            const div= document.querySelector('.upload-action');
            div.addEventListener('click', function() {
                fileInput.click();
            });

            fileInput.addEventListener('change', function(event) {
                const file = event.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    const loadingSpinner = document.getElementById('loadingSpinner');
                    const loadingSpinner2 = document.getElementById('loadingSpinner2');
                    const previewImage = document.getElementById('previewImage');
                    const umbrellaimg = document.querySelector('.umbrella-preview img');
                    const uploadicon = document.querySelector('.upload-action');
                    console.log(uploadicon.querySelector(".uploadicon"));
                    loadingSpinner.style.display = 'block';
                    loadingSpinner2.style.display = 'block';
                    previewImage.style.display = 'none';
                    umbrellaimg.style.display='none';
                    
                    uploadicon.querySelector(".uploadicon").style.display='none';
                    console.log(`Selected file: ${file.name}`);
                    const buttondiv=document.querySelector('.upload');
                    buttondiv.innerHTML=file.name;
                    reader.onload = function(e) {
                        setTimeout(function(){
                            loadingSpinner.style.display = 'none';
                            loadingSpinner2.style.display = 'none';
                            uploadicon.querySelector(".uploadicon").style.display='block';
                            previewImage.src = e.target.result;
                            umbrellaimg.style.display='block';
                            previewImage.style.display = 'block';

                        },10000);

                    };
                    reader.readAsDataURL(file);
                }
            });
        });