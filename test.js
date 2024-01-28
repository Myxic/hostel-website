// var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");

// var requestOptions = {
//   method: "GET",
//   headers: myHeaders,
//     mode: "no-cors",
//   redirect: "follow",
// };
// fetch("https://regres.in/api/users", requestOptions)
// .then(rez => rez.json())
// .then(data => console.log(data));

// fetch("https://raw.githubusercontent.com/BravtaDevs/MyJsons/main/HFExterior.json", requestOptions)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     var repo = document.querySelector(".here");

//     repo.innerHTML = data;
//   });



//   https://github.com/BravtaDevs/MyJsons/blob/main/HFExterior.json


const axiosRequest = require('axios')

axiosRequest
        .get('https://raw.githubusercontent.com/BravtaDevs/MyJsons/main/HFExterior.json')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error(error);
        });