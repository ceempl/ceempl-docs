<template>
  <div class="navbar">
    <ul>
      <li class="logo">
        <nuxt-link to="/">
          <img src="~/assets/logo.svg" alt="">
          <h2>Ceempl</h2>
        </nuxt-link>
      </li>
      <li>
        <span>V 0.0.8</span>
      </li>
      <li>
        <a href="https://github.com/ceempl/ceempl" target="_blank">
          <img src="~/assets/github.svg" alt="">
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="css">
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

  .navbar ul li.logo img {
    width: 40px;
    margin-right: 12px;
  }

  .navbar ul li.logo h2 {
    font-size: 20px;
    color: #2F4BFF;
  }

  .navbar ul li span {
    font-size: 12px;
    color: #9A9A9A;
  }

  .navbar ul li a img {
    width: 18px;
  }
</style>

