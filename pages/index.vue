<template>
  <div class="container">
      <Navbar />
      <div class="intro">
        <img src="~/assets/logo.svg" alt="ceempl">
        <p>A lightweight and simple front-end framework for developing fast web interfaces.</p>
        <div class="action">
          <nuxt-link to="/docs/installation" class="primary">Get started</nuxt-link>
          <a class="secondary" href="https://github.com/ceempl/ceempl" target="_blank">GitHub</a>
        </div>
      </div>
      <div class="footer">
        <ul>
          <li>
            <nuxt-link to="/docs/installation">Documentation</nuxt-link>
          </li>
          <li>
            <a href="https://github.com/ceempl/ceempl" target="_blank">Download</a>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>

<style>

body {
  font-weight: bold;
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
}

.intro img {
  width: 100px;
  margin-bottom: 30px;
}

.intro p {
  max-width:350px;
  font-size: 13px;
  text-align: center;
  color: #2F4BFF;
  line-height: 1.75;
  margin-bottom: 30px;
}

.intro .action {
  user-select: none;
}

.intro .action a {
  font-size: 13px;
  padding: 9px 20px;
  border-radius: 6px;
}

.intro .action a.primary {
  background-color: #2F4BFF;
  color: #FFF;
}

.intro .action a.secondary {
  background-color: #F8F9FF;
  color: #2F4BFF;
  margin-left: 10px;
}

.footer {
  min-height: 100px;
  display: flex;
  align-items: center;
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
  font-size: 13px;
  color: #2F4BFF;
}

</style>
