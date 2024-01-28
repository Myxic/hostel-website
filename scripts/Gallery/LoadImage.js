document.addEventListener("DOMContentLoaded", function () {
  const row = document.querySelector(".row");

  const Caption = document.querySelector(".caption-container");
  const modalcontent = document.querySelector(".modal-content");

  // Function to fetch the images from the folder
  // function fetchImages(ImageLink) {
  //   var myHeaders = new Headers();
  //   myHeaders.append("Content-Type", "application/json");

  //   var requestOptions = {
  //     method: "GET",
  //     headers: myHeaders,
      

  //     redirect: "follow",
  //   };

  //   fetch(
  //     ImageLink,
  //     requestOptions

  //   )
  //     .then((response) => response.json())
  //     .then((data) => {

  //       const images = data.data.Links;
  //       const captions = data.data.Captions;

  //       if (images.length !== captions.length) {
  //         console.error("Arrays have different lengths");
  //         return;
  //       }

  //       images.forEach((image) => {
  //         const imageUrl = image;

  //         // Create an <img> element for each image
  //         const imgElement = document.createElement("img");
  //         const imgDiv = document.createElement("div");
  //         const imgDiv2 = document.createElement("div");
  //         imgDiv.classList.add("column");
  //         imgDiv2.classList.add("mySlides");

  //         imgElement.setAttribute("src", imageUrl);

  //         row.appendChild(imgDiv).appendChild(imgElement);
  //       });
  //       images.forEach((image) => {
  //         const imageUrl = image;

  //         // Create an <img> element for each image
  //         const imgElement = document.createElement("img");

  //         const imgDiv2 = document.createElement("div");

  //         imgDiv2.classList.add("mySlides");

  //         imgElement.setAttribute("src", imageUrl);

  //         modalcontent.appendChild(imgDiv2).appendChild(imgElement);
  //       });

  //       captions.forEach((caption) => {
  //           const PElement = document.createElement("p")
  //           PElement.classList.add("caption");
  //           PElement.textContent = caption;
  //           Caption.appendChild(PElement);
  //        } );

  //       document.querySelectorAll(".column img").forEach((images) => {
  //         images.classList.add("hover-shadow");
  //       });
  //       document.querySelectorAll(".mySlides img").forEach((images) => {
  //         // images.style.width = "100%";
  //         images.style.outline = "3px solid white";
  //       });
  //       document.querySelectorAll(".row img").forEach((div1) => {
  //         div1.addEventListener("click", () => {
  //           openModal();
      
  //           div1.parentElement.classList.add("active");
      
  //           let Active = document.querySelector(".active");
            
  //           var CurrentCommentIndex = getChildIndex(nextpage, Active);
  //           slides[CurrentCommentIndex].style.display = "flex";

  //           txtCaptions[CurrentCommentIndex].style.display = "block";
          

  //         });
  //       });
      
  //     })
  //     .catch((error) => {
  //       console.log("error: " + error);
  //       console.error("Error fetching images:", error);
  //     });
  // }

  function fetchImages(ImageLink){
    
    const images = ImageLink.Links;
    const captions = ImageLink.Captions;

    if (images.length !== captions.length) {
      console.error("Arrays have different lengths");
      return;
    }

    images.forEach((image) => {
      const imageUrl = image;

      // Create an <img> element for each image
      const imgElement = document.createElement("img");
      const imgDiv = document.createElement("div");
      const imgDiv2 = document.createElement("div");
      imgDiv.classList.add("column");
      imgDiv2.classList.add("mySlides");

      imgElement.setAttribute("src", imageUrl);

      row.appendChild(imgDiv).appendChild(imgElement);
    });
    images.forEach((image) => {
      const imageUrl = image;

      // Create an <img> element for each image
      const imgElement = document.createElement("img");

      const imgDiv2 = document.createElement("div");

      imgDiv2.classList.add("mySlides");

      imgElement.setAttribute("src", imageUrl);

      modalcontent.appendChild(imgDiv2).appendChild(imgElement);
    });

    captions.forEach((caption) => {
        const PElement = document.createElement("p")
        PElement.classList.add("caption");
        PElement.textContent = caption;
        Caption.appendChild(PElement);
     });

    document.querySelectorAll(".column img").forEach((images) => {
      images.classList.add("hover-shadow");
    });
    document.querySelectorAll(".mySlides img").forEach((images) => {
      // images.style.width = "100%";
      images.style.outline = "3px solid white";
    });
    document.querySelectorAll(".row img").forEach((div1) => {
      div1.addEventListener("click", () => {
        openModal();
  
        div1.parentElement.classList.add("active");
  
        let Active = document.querySelector(".active");
        
        var CurrentCommentIndex = getChildIndex(nextpage, Active);
        slides[CurrentCommentIndex].style.display = "flex";

        txtCaptions[CurrentCommentIndex].style.display = "block";
      

      });
    });
  }
//  fetchImages(ImageLinkName);




if (ImageLinkName.length>0) {
  ImageLinkName.forEach((link =>{
    fetchImages(link)
}));
}else{
  fetchImages(ImageLinkName);
}


  function getChildIndex(parentElement, childElement) {
    var childIndex = Array.from(parentElement.children).indexOf(childElement);

    return childIndex;
  }


});

function closeModal() {
  document.getElementById("myModal").style.display = "none";
  let Active = document.querySelector(".active");
  var CurrentCommentIndex = getChildIndex(nextpage, Active);
  Active.classList.remove("active");
  slides[CurrentCommentIndex].style.display = "none";
  txtCaptions[CurrentCommentIndex].style.display = "none";
}
