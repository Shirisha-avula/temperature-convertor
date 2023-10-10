<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="icon" type="image/x-icon" href="./svg/thermometer-sun-custom.svg">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>TempConvertPro</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Caveat&family=Ubuntu:wght@700&display=swap" rel="stylesheet">
    <style>
      /* Global styles */
body {
    background-size: cover;
    background-repeat: no-repeat;
    font-family: Arial, Helvetica, sans-serif;
}

/* Container styles */
.container {
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Input styles */
input {
    height: 40px;
    border-radius: 20px;
    outline: none;
    font-size: 32px;
    color: blueviolet;
    text-align: center;
    width: 330px;
}
 /* Loader styles */
  .loader-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999; /* Ensure the loader is above other content */
  }

  .loader {
    border: 8px solid #0c0000; /* Light gray border */
    border-top: 8px solid #3498db; /* Blue border for animation */
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 5s linear infinite; /* Rotate the loader */
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Hide the loader when content is loaded */
  body.loaded .loader-wrapper {
    display: none;
  }

input::placeholder {
    color: rgb(76, 221, 237);
    font-size: 23px;
    position: relative;
    left: 5px;
}

/* Card styles */
.card {
    display: flex;
    flex-direction: column;
    text-align: center;
    position: fixed;
    border-radius: 20px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

/* Other styles */
.nav-item {
    font-size: 20px;
    font-weight: bold;
    font-family: 'Caveat', cursive;
    font-family: 'Ubuntu', sans-serif;

}

.tempminandmax {
    margin-top: 2px;
    font-size: 25px;
    color: palevioletred;
}

input::placeholder {
    color: rgb(76, 221, 237);
    font-size: 23px;
    position: relative;
    left: 5px;
}

.city-details {
    display: flex;
    flex-direction: column;
    border-radius: 10px;
}

.date {
    margin-bottom: 0px;
    color: darkblue;
}

.name {
    font-size: 42px;
    color: orange;
    margin-bottom: 5px;
}

.temp-div {
    font-size: 60px;
    color: rgb(23, 241, 30);
    letter-spacing: 3px;
}

img {
    border-radius: 20px;
   
}

.lead{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 30px;
    font-weight: normal;
}

/* Media Queries for Responsiveness */

/* Small screens (phones) */
@media (max-width: 576px) {
    /* Adjust styles for small screens here */
    input {
        width: 100%;
        font-size: 24px;
    }
}

/* Medium screens (tablets) */
@media (min-width: 577px) and (max-width: 992px) {
    /* Adjust styles for medium screens here */
}

/* Large screens (desktops) */
@media (min-width: 993px) {
    /* Adjust styles for large screens here */
}


    </style>
</head>
<body>
<header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Ninth navbar example">
        <div class="container-sm">
            <a style="font-size: 30px; font-weight: bold;" class="navbar-brand" href="#"> <img
                        src="./svg/thermometer-sun-custom.svg" height="40px" alt="TempconvertPro brand icon">TempConvertPro</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarsExample07XL">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="./index.html">Home</a>
                    </li>
                  
                    <li class="nav-item">
                        <a class="nav-link" href="./converter.html">Converter</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./weather.html">Weather⛅</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./contact.html">Get in touch</a>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-warning" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
</header>

<div class="b-example-divider"></div>

<div class="container col-xxl-8 ">
    <div class="row flex-lg-row-reverse align-items-center ">
        <div class="col-10 col-sm-8 col-lg-6">
            <img class="header-image" src="./Images/weather.jpg" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="400" loading="lazy">

        </div>
        <div class="col-lg-6">
            <h1 class="display-5 fw-bold text-body-emphasis text-center ">Weatherwise</h1>

            <p class="lead"> Its a tool of science and technology to predict the conditions of the atmosphere for a given location and time. It is based on the user's location or a specified location. Users can access this information to plan their activities and stay informed about the weather.</p>
            <div  class="container-fluid">
           
                <input type="text" placeholder="Enter City Name" name="" id="search">
            </div>
        </div>
        <div class="city-details">
            <h1 class="name" id="city-name">Nagpur</h1>
            <h1 class="date" id="city-date">10 August, 2022 (Wednesday)</h1>
            <div class="temp-div"><span id="crt_temp">32°</span> </div>
            <div class="tempminandmax">
                <span>Min:</span>
                <span id="min-temp">22°</span>
                <span>Max</span>
                <span id="max-temp">32°</span>
            </div>
            <h1 id="cloud">Rainy</h1>
        </div>
    </div>
</div>
<div class="b-example-divider"></div>

<div class="container-sm">
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div class="col-md-4 d-flex align-items-center">
      <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
        <a style="font-size: 20px; font-weight: bold;"   class="navbar-brand" href="#"> <img src="./svg/thermometer-sun-custom.svg" height="80px" alt="TempConvertPro brand icon">TempConvertPro</a>
      </a>
      <span style="font-size: 20px ;" class="mb-3 mb-md-0 text-body-secondary">&copy; 2023-2024,Inc</span>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li class="ms-3"><a style="font-size: 20px;"   class="navbar-brand" href="#"> <img src="./svg/icons8-instagram.svg" height="30px" alt="Move it brand icon"></a></li>
      <li class="ms-3"><a style="font-size: 20px;"   class="navbar-brand" href="#"> <img src="./svg/icons8-facebook.svg" height="30px" alt="Move it brand icon"></a></li>
      <li class="ms-3"><a style="font-size: 20px;"   class="navbar-brand" href="#"> <img src="./svg/icons8-linkedin.svg" height="30px" alt="Move it brand icon"></a></li>
      <li class="ms-3"><a style="font-size: 20px;"   class="navbar-brand" href="#"> <img src="./svg/icons8-twitter.svg" height="30px" alt="Move it brand icon"></a></li>
      
    </ul>
  </footer>

<script src="path/to/jquery.min.js"></script>
<script src="path/to/bootstrap.min.js"></script>
<script
    src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
    integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
    crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
        integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+"
        crossorigin="anonymous"></script>
<script src="./weather.js"></script>
</body>
</html>
