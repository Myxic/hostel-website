document.addEventListener('DOMContentLoaded', function() {
    const imageFolder1 = './ExteriorImgs'; // Replace with the path to your image folder

    const imageFolder2 = './InteriorImgs'; // Replace with the path to your image folder

    const imageFolder3 = './EventsImgs'; // Replace with the path to your image folder
    
    const row = document.querySelector('.row');
 
    const modalcontent = document.querySelector('.modal-content'); 

    

// Close the Modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
    let Active = document.querySelector(".active");
    var CurrentCommentIndex = getChildIndex(nextpage, Active);
    Active.classList.remove("active");
    slides[CurrentCommentIndex].style.display = "none";
  }

    // Function to fetch the images from the folder
    function fetchImages(imageFolder) {
        fetch(imageFolder)
            .then(response => response.text())
            .then(html => {
                const parser = new DOMParser();
                
                const dom = parser.parseFromString(html, 'text/html');
               
                const images = dom.querySelectorAll('.icon-image');
               

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
       
        return childIndex;
      }
    fetchImages(imageFolder1);
    fetchImages(imageFolder2);
    fetchImages(imageFolder3);




    
});
function closeModal() {
    document.getElementById("myModal").style.display = "none";
    let Active = document.querySelector(".active");
    var CurrentCommentIndex = getChildIndex(nextpage, Active);
    Active.classList.remove("active");
    slides[CurrentCommentIndex].style.display = "none";
  }