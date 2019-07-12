<template>
  <div class="home">
    <div class="container">
      <div class="navbar">
        <ul>
          <li class="logo">
            <nuxt-link to="/">
              <svg id="logo" xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45">
                <path id="Path_12" data-name="Path 12" d="M22.5,45A22.5,22.5,0,1,1,45,22.5,22.534,22.534,0,0,1,22.5,45Zm0-35A12.5,12.5,0,1,0,35,22.5,12.5,12.5,0,0,0,22.5,10Z" />
              </svg>
              <h2>Ceempl</h2>
            </nuxt-link>
          </li>
          <li>
            <span>V0.0.8</span>
          </li>
          <li>
            <a href="https://github.com/ceempl/ceempl" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="18.942" height="18.485" viewBox="0 0 18.942 18.485">
                <g id="github" transform="translate(0.001 -5.364)">
                  <path id="Path_1" data-name="Path 1" d="M17.669,10.08a9.429,9.429,0,0,0-3.447-3.446,9.263,9.263,0,0,0-4.754-1.27,9.264,9.264,0,0,0-4.754,1.27A9.428,9.428,0,0,0,1.269,10.08,9.264,9.264,0,0,0,0,14.835,9.2,9.2,0,0,0,1.805,20.4a9.275,9.275,0,0,0,4.667,3.422.552.552,0,0,0,.493-.086.482.482,0,0,0,.16-.37q0-.037-.006-.665t-.006-1.1l-.284.049a3.618,3.618,0,0,1-.684.043,5.214,5.214,0,0,1-.857-.086,1.915,1.915,0,0,1-.826-.37,1.565,1.565,0,0,1-.542-.758L3.8,20.2a3.081,3.081,0,0,0-.389-.629,1.489,1.489,0,0,0-.537-.47l-.086-.062a.9.9,0,0,1-.16-.148.676.676,0,0,1-.111-.173q-.037-.086.062-.142a.8.8,0,0,1,.358-.055l.247.037a1.8,1.8,0,0,1,.612.3,1.99,1.99,0,0,1,.6.641,2.174,2.174,0,0,0,.684.771,1.452,1.452,0,0,0,.808.266,3.507,3.507,0,0,0,.7-.061,2.452,2.452,0,0,0,.555-.186,2,2,0,0,1,.6-1.271,8.444,8.444,0,0,1-1.264-.222,5.033,5.033,0,0,1-1.159-.481,3.32,3.32,0,0,1-.993-.826,3.97,3.97,0,0,1-.647-1.295,6.157,6.157,0,0,1-.253-1.85A3.6,3.6,0,0,1,4.4,11.8a3.315,3.315,0,0,1,.086-2.515,1.728,1.728,0,0,1,1.06.166,7.414,7.414,0,0,1,1.03.475q.327.2.524.333a8.906,8.906,0,0,1,4.735,0l.469-.3a6.637,6.637,0,0,1,1.134-.543,1.616,1.616,0,0,1,1-.136,3.283,3.283,0,0,1,.1,2.515,3.6,3.6,0,0,1,.974,2.54,6.226,6.226,0,0,1-.253,1.856,3.816,3.816,0,0,1-.653,1.295,3.447,3.447,0,0,1-1,.82,5.042,5.042,0,0,1-1.159.481,8.435,8.435,0,0,1-1.264.222,2.2,2.2,0,0,1,.641,1.751v2.6a.491.491,0,0,0,.154.37.536.536,0,0,0,.487.086A9.274,9.274,0,0,0,17.133,20.4a9.206,9.206,0,0,0,1.807-5.567A9.271,9.271,0,0,0,17.669,10.08Z" transform="translate(0 0)" />
                </g>
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <div class="intro">
        <svg id="logo" xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45">
          <path id="Path_12" data-name="Path 12" d="M22.5,45A22.5,22.5,0,1,1,45,22.5,22.534,22.534,0,0,1,22.5,45Zm0-35A12.5,12.5,0,1,0,35,22.5,12.5,12.5,0,0,0,22.5,10Z" />
        </svg>
        <p>A lightweight and simple front-end framework for developing fast web interfaces.</p>
        <div class="action">
          <nuxt-link to="/docs" class="primary">Get started</nuxt-link>
          <a class="secondary" href="https://github.com/ceempl/ceempl" target="_blank">GitHub</a>
        </div>
      </div>
      <div class="footer">
        <ul>
          <li>
            <a href="https://github.com/ceempl/ceempl" target="_blank">Download</a>
          </li>
          <li>
            <nuxt-link to="/docs">Docs</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
    <svg class="bg" id="logo" xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45">
      <path id="Path_12" data-name="Path 12" d="M22.5,45A22.5,22.5,0,1,1,45,22.5,22.534,22.534,0,0,1,22.5,45Zm0-35A12.5,12.5,0,1,0,35,22.5,12.5,12.5,0,0,0,22.5,10Z" />
    </svg>
  </div>
</template>

<style scoped>

.home {
  background-image: linear-gradient(55deg, #2538B1 0%, #2F4BFF 50%, #00D6F8 100%);
  font-weight: bold;
}

.bg {
  position: fixed;
  bottom: -450px;
  left: -550px;
  width: 1200px;
  height: 1200px;
  z-index: 0;
  fill: #FFF;
  opacity: 0.03;
  user-select: none;
}

.navbar {
  height: 100px;
  border-bottom: none;
  position: relative;
  z-index: 2;
}

.navbar ul {
  padding: 30px 0;
  display: flex;
  align-items: center;
}

.navbar ul li {
  list-style: none;
  display: flex;
  align-items: center;
  margin-left: 18px;
}

.navbar ul li a {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.navbar ul li.logo {
  flex: 1;
  margin: 0;
}

.navbar ul li.logo svg {
  width: 40px;
  margin-right: 12px;
  fill: #FFF;
}

.navbar ul li.logo h2 {
  font-size: 20px;
  color: #FFF;
}

.navbar ul li span {
  font-size: 12px;
  color: #FFF;
}

.navbar ul li a svg {
  width: 18px;
  fill: #FFF;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}

.intro {
  width: 100%;
  height: calc(100vh - 200px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  z-index: 2;
}

.intro svg {
  width: 100px;
  height: 100px;
  margin-bottom: 30px;
  fill: #FFF;
}

.intro p {
  max-width: 340px;
  font-size: 14px;
  text-align: center;
  color: #FFF;
  line-height: 1.75;
  margin-bottom: 30px;
}

.intro .action {
  user-select: none;
}

.intro .action a {
  padding: 9px 20px;
  border-radius: 6px;
}

.intro .action a.primary {
  background-color: #FFF;
  color: #2538B1;
}

.intro .action a.secondary {
  background-color: #435EFF;
  color: #FFF;
  margin-left: 10px;
}

.footer {
  min-height: 100px;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 2;
}

.footer ul {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}

.footer ul li {
  margin: 0 9px;
}

.footer ul li a {
  color: #FFF;
}

</style>
