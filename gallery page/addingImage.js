document.addEventListener('DOMContentLoaded', function() {
    const imageFolder = '../ExteriorImgs'; // Replace with the path to your image folder
    
    const row = document.querySelector('.row');
 
    const modalcontent = document.querySelector('.modal-content'); 

    const form = document.querySelector('form');

    const warningDiv = document.getElementById('warning');



    // Function to fetch the images from the folder
    function fetchImages() {
        fetch(imageFolder)
            .then(response => response.text())
            .then(html => {
                const parser = new DOMParser();
                
                const dom = parser.parseFromString(html, 'text/html');
               
                const images = dom.querySelectorAll('.icon-image');
                // const images = dom.querySelectorAll('a');
               

                images.forEach(image => {
                  
                    const imageUrl = image.getAttribute('title');
                   
                    // Create an <img> element for each image
                    const imgElement = document.createElement('img');            
                    const imgDiv = document.createElement('div');
                    const imgDiv2 = document.createElement('div');
                    imgDiv.classList.add('column');
                    imgDiv2.classList.add('mySlides');
                  
                    imgElement.setAttribute('src', imageFolder + '/' + imageUrl);
                
                    
                    
                    row.appendChild(imgDiv).appendChild(imgElement);
                    
                   

                });
                images.forEach(image => {
                  
                    const imageUrl = image.getAttribute('title');
                   
                    // Create an <img> element for each image
                    const imgElement = document.createElement('img');            
                    
                    const imgDiv2 = document.createElement('div');
     
                    imgDiv2.classList.add('mySlides');
                  
                    imgElement.setAttribute('src', imageFolder + '/' + imageUrl);
                
                    
                    

                    modalcontent.appendChild(imgDiv2).appendChild(imgElement);
                   

                });
               

                    document.querySelectorAll('.column img').forEach (images => {
                        images.classList.add('hover-shadow')
                    })
                    document.querySelectorAll('.mySlides img').forEach (images => {
                        images.style.width = '100%';
                    });

var nextpage = document.querySelector(".row");

var slides = document.getElementsByClassName("mySlides");

const next = document.getElementById("next");
const prev = document.getElementById("prev");

// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}


document.querySelectorAll(".row img").forEach((div1) => {
  div1.addEventListener("click", () => {
    openModal();
    console.log('DOMContentLoaded');
    div1.parentElement.classList.add("active");

    let Active = document.querySelector(".active");
    var CurrentCommentIndex = getChildIndex(nextpage, Active);
    slides[CurrentCommentIndex].style.display = "block";
  });
});

// Next/previous controls
next.onclick = function plusSlidesNext() {
  let Active = document.querySelector(".active");
  var CurrentCommentIndex = getChildIndex(nextpage, Active);
  
  if (
    CurrentCommentIndex >= 0 &&
    CurrentCommentIndex < nextpage.childElementCount
  ) {
    for (b = 0; b < nextpage.childElementCount; b++) {
      nextpage.children[CurrentCommentIndex].classList.remove(
        "active"
      );
      slides[CurrentCommentIndex].style.display = "none";
    }

    if (CurrentCommentIndex < nextpage.childElementCount - 1) {
      nextpage.children[CurrentCommentIndex + 1].classList.add(
        "active"
      );
      slides[CurrentCommentIndex + 1 ].style.display = "block";
    } else if (CurrentCommentIndex == nextpage.childElementCount - 1) {
      nextpage.children[0].classList.add("active");
      slides[0].style.display = "block";
    }
  }
};

prev.onclick = function plusSlidesPrev() {
  let Active = document.querySelector(".active");
  var CurrentCommentIndex = getChildIndex(nextpage, Active);

  if (
    CurrentCommentIndex >= 0 &&
    CurrentCommentIndex < nextpage.childElementCount
  ) {
    for (b = 0; b < nextpage.childElementCount; b++) {
      nextpage.children[CurrentCommentIndex].classList.remove(
        "active"
      );
      slides[CurrentCommentIndex].style.display = "none";
    }

    if (
      CurrentCommentIndex <= nextpage.childElementCount - 1 &&
      CurrentCommentIndex > 0
    ) {
      nextpage.children[CurrentCommentIndex - 1].classList.add(
        "active"
      );
      slides[CurrentCommentIndex - 1 ].style.display = "block";
    } else if (CurrentCommentIndex <= 0) {
      nextpage.children[nextpage.childElementCount - 1].classList.add(
        "active"
      );
      slides[nextpage.childElementCount - 1 ].style.display = "block";
    }
  }
};


            })
            .catch(error => {
                console.log("error: " + error)
                console.error('Error fetching images:', error);
            });
    }
    function getChildIndex(parentElement, childElement) {
        var childIndex = Array.from(parentElement.children).indexOf(childElement);
        console.log("Index of child element: " + childIndex);
        return childIndex;
      }
    fetchImages();


   
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const name = document.getElementById('name').value;
        const image = document.getElementById('image').files[0];

        // Validate form inputs
        if (!name || !image) {
            warningDiv.textContent = 'Please provide both a title and an image.';
            return;
        }

        // Clear any previous error messages
        warningDiv.textContent = '';

        // Create a FormData object to store the file and additional data

        const formData = new FormData();
        formData.append('image', file, file.name);
        formData.append('name', imageName);

        // Perform the AJAX request
        const xhr = new XMLHttpRequest();
        xhr.open('POST', './Exteriorupload.php', true);
        xhr.onload = function() {
            if (xhr.status === 200) {
                // Upload successful
                alert('Image uploaded successfully. refresh browser');
            } else {
                // Upload failed
                alert('Error uploading image. Please try again later.');
            }
        };
        xhr.onerror = function() {
            // Request error
            alert('Error uploading image. Please try again later.');
        };
        xhr.send(formData);
         // Example: Log the values in the console
         console.log('Title:', name);
         console.log('Image:', image);
    });

    
});
function closeModal() {
    document.getElementById("myModal").style.display = "none";
    let Active = document.querySelector(".active");
    var CurrentCommentIndex = getChildIndex(nextpage, Active);
    Active.classList.remove("active");
    slides[CurrentCommentIndex].style.display = "none";
  }