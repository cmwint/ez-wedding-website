<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Emily & Zach are getting married!</title>
    <link rel="icon" href="images/favicon.png" type="image/x-icon" />
    <link href="https://fonts.googleapis.com/css?family=Mouse+Memoirs" rel="stylesheet">
</head>

<style>
* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
*:before, *:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

html {
  min-height: 100vh;
  display: grid;
}

body {
  min-height: 100vh;
  display: grid;
  margin: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  background: #fff6ea;
}

.titles {
    padding: 0 1em;
}

.sub-header {
    margin-top: 3em;
    text-align: center;
    font-family: 'Mouse Memoirs', sans-serif;
    font-weight: bold;
    font-size: 35px;
}

.header {
    margin-top: 0.2em;
    text-align: center;
    font-family: 'Mouse Memoirs', sans-serif;
    font-weight: bold;
    font-size: 80px;
}

.container {
  margin: auto;
  width: 4rem;
  height: 2rem;
}

.heart {
  position: absolute;
}
.heart:nth-child(1) svg {
  opacity: 0;
  -webkit-animation: heartUp 1.4s infinite ease-in;
  animation: heartUp 1.4s infinite ease-in;
}
.heart:nth-child(2) svg {
  position: absolute;
  left: 1rem;
  opacity: 0;
  -webkit-animation: heartUp 1.4s 0.3s infinite ease-in;
  animation: heartUp 1.4s 0.3s infinite ease-in;
}
.heart:nth-child(3) svg {
  position: absolute;
  left: 0.5rem;
  opacity: 0;
  -webkit-animation: heartUp 1.4s 0.6s infinite ease-in;
  animation: heartUp 1.4s 0.6s infinite ease-in;
}

svg {
  fill: #f58d9c;
}

@-webkit-keyframes heartUp {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 0, 0) rotate(10deg);
    transform: translate3d(0, 0, 0) rotate(10deg);
  }
  50% {
    opacity: 1;
  }
  65% {
    opacity: 1;
  }
  90% {
    opacity: 0;
    -webkit-transform: translate3d(0, -35vh, 0) scale(1.2) rotate(-10deg);
    transform: translate3d(0, -35vh, 0) scale(1.2) rotate(-10deg);
  }
  100% {
    opacity: 0;
  }
}
@keyframes heartUp {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 0, 0) rotate(10deg);
    transform: translate3d(0, 0, 0) rotate(10deg);
  }
  50% {
    opacity: 1;
  }
  65% {
    opacity: 1;
  }
  90% {
    opacity: 0;
    -webkit-transform: translate3d(0, -35vh, 0) scale(1.2) rotate(-10deg);
    transform: translate3d(0, -35vh, 0) scale(1.2) rotate(-10deg);
  }
  100% {
    opacity: 0;
  }
}

</style>

<body id="home">
<!-- All credit goes to Katherine Kato on code pen! https://codepen.io/kathykato/pen/NwzJNL -->
    <div class="wrap-all-the-things">
        <div class="container">
            <div class="heart">
                <svg width="80" height="80" viewBox="0 0 800 700" xmlns="http://www.w3.org/2000/svg">
                <path d="m263.42 235.15c-66.24 0-120 53.76-120 120 0 134.76 135.93 170.09 228.56 303.31 87.574-132.4 228.56-172.86 228.56-303.31 0-66.24-53.76-120-120-120-48.048 0-89.402 28.37-108.56 69.188-19.161-40.817-60.514-69.188-108.56-69.188z" />
                </svg>
            </div>
            <div class="heart">
                <svg width="70" height="70" viewBox="0 0 800 700" xmlns="http://www.w3.org/2000/svg">
                <path d="m263.42 235.15c-66.24 0-120 53.76-120 120 0 134.76 135.93 170.09 228.56 303.31 87.574-132.4 228.56-172.86 228.56-303.31 0-66.24-53.76-120-120-120-48.048 0-89.402 28.37-108.56 69.188-19.161-40.817-60.514-69.188-108.56-69.188z" />
                </svg>
            </div>
            <div class="heart">
                <svg width="68" height="68" viewBox="0 0 800 700" xmlns="http://www.w3.org/2000/svg">
                <path d="m263.42 235.15c-66.24 0-120 53.76-120 120 0 134.76 135.93 170.09 228.56 303.31 87.574-132.4 228.56-172.86 228.56-303.31 0-66.24-53.76-120-120-120-48.048 0-89.402 28.37-108.56 69.188-19.161-40.817-60.514-69.188-108.56-69.188z" />
                </svg>
            </div>
        </div>
        <div class="titles">
            <div class="sub-header">
              E&Z ~ 7.7.18
              </br>
              Ralston’s Crossing
              </br>
              Arvada, CO
            </div>
            <div class="header">Coming Soon!</div>
        </div>
    </div>
</body>
</html>