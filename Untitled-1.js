////////////////////////////////////
// Create User sign up

// import axios from "axios";

// const options = {
//   method: "POST",
//   url: "http://localhost:8080/api/auth/signup",
//   data: {
//     name: "",
//     email: "abdelslam@gmail.com",
//     password: "1234",
//     isAdmin: "host",
//   },
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });
///////////////////////////////////
// login
/*
import axios from "axios";

const options = {
  method: 'POST',
  url: 'http://localhost:8080/api/auth/login',
  data: {email: 'mohammed@gmail.com', password: '1234'}
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});
*/

// Create hotel
// var myHeaders = new Headers();
// myHeaders.append(
//   "Cookie",
//   "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkbWluIjoiYWRtaW4iLCJ1c2VySWQiOiI2MmYyYWVkZThmOTg5YTdiNzk5ZjU2ZDAiLCJpYXQiOjE2NjAwNzI4MTcsImV4cCI6MTY2MDA5MDgxN30.6jNL51T3dBrJJ-AGGLjtkgwQLvFsq8y3ZKZWiJsfpJk"
// );

// var formdata = new FormData();
// formdata.append("name", "hilton");
// formdata.append("type", "hilton");
// formdata.append("city", "cairo");
// formdata.append("title", "hilton");
// formdata.append("address", "masr elgedida");
// formdata.append("distance", "32 k.m");
// formdata.append("desc", "Nice city hotel with garden view");
// formdata.append("cheapestPrice", "200");
// formdata.append(
//   "image",
//   fileInput.files[0],
//   "/C:/Users/Abdelslam/Desktop/project/images/284755364.jpg"
// );

// var requestOptions = {
//   method: "POST",
//   headers: myHeaders,
//   body: formdata,
//   redirect: "follow",
// };

// fetch("localhost:8080/api/hotels/", requestOptions)
//   .then((response) => response.text())
//   .then((result) => console.log(result))
//   .catch((error) => console.log("error", error));

////////////////////////////////////
// create room
/* var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Cookie", "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkbWluIjoiYWRtaW4iLCJ1c2VySWQiOiI2MmYyYWVkZThmOTg5YTdiNzk5ZjU2ZDAiLCJpYXQiOjE2NjAwNzI4MTcsImV4cCI6MTY2MDA5MDgxN30.6jNL51T3dBrJJ-AGGLjtkgwQLvFsq8y3ZKZWiJsfpJk");

var raw = JSON.stringify({
  "title": "nile view",
  "price": 320,
  "maxPeople": 3,
  "desc": "Ac adapted , 2 king size bed with smart tv , netflix included , minibar with soft drinks , fruit bascet in the checkin ",
  "roomNumbers": {
    "number": 1205
  }
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("localhost:8080/api/rooms/62f2b3b586ab3077b06338f2", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error)); */

/////////////////////////////////////////
// get all hotels
//   var myHeaders = new Headers();
//   myHeaders.append(
//     "Cookie",
//     "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkbWluIjoiYWRtaW4iLCJ1c2VySWQiOiI2MmYyYWVkZThmOTg5YTdiNzk5ZjU2ZDAiLCJpYXQiOjE2NjAwNzI4MTcsImV4cCI6MTY2MDA5MDgxN30.6jNL51T3dBrJJ-AGGLjtkgwQLvFsq8y3ZKZWiJsfpJk"
//   );

//   var requestOptions = {
//     method: "GET",
//     headers: myHeaders,
//     redirect: "follow",
//   };

//   fetch("localhost:8080/api/hotels/", requestOptions)
//     .then((response) => response.text())
//     .then((result) => console.log(result))
//     .catch((error) => console.log("error", error));

////////////////////////////////
// find one hotel
/*var myHeaders = new Headers();
myHeaders.append("Cookie", "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkbWluIjoiYWRtaW4iLCJ1c2VySWQiOiI2MmYyYWVkZThmOTg5YTdiNzk5ZjU2ZDAiLCJpYXQiOjE2NjAwNzI4MTcsImV4cCI6MTY2MDA5MDgxN30.6jNL51T3dBrJJ-AGGLjtkgwQLvFsq8y3ZKZWiJsfpJk");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("localhost:8080/api/hotels/find/62f2b3b586ab3077b06338f2", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));*/

///////////////////////////////////////
// update hotel
/*
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append(
  "Cookie",
  "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkbWluIjoiYWRtaW4iLCJ1c2VySWQiOiI2MmYyYWVkZThmOTg5YTdiNzk5ZjU2ZDAiLCJpYXQiOjE2NjAwNzI4MTcsImV4cCI6MTY2MDA5MDgxN30.6jNL51T3dBrJJ-AGGLjtkgwQLvFsq8y3ZKZWiJsfpJk"
);

var raw = JSON.stringify({
  distance: "3 k.m",
});

var requestOptions = {
  method: "PUT",
  headers: myHeaders,
  body: raw,
  redirect: "follow",
};

fetch("localhost:8080/api/hotels/62f2c32c388ee70c57ceacfd", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));
  */
