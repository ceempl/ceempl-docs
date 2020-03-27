<template>
  <div class="container">
    <Navbar />
    <div class="docs">
      <div class="row">
        <div class="col xl-2 lg-2 md-12 sm-12">
          <Sidebar />
        </div>
        <div class="col xl-8 lg-8 md-12 sm-12">
          <div class="main">
            <div class="title">
              <h1>Usage</h1>
              <p>
                <nuxt-link to="/docs">Install Ceempl</nuxt-link>as a module using npm or yarn.
              </p>
            </div>
            <div class="item" id="import">
              <div class="header">
                <a href="#import">#</a>
                <h4>Import as a module</h4>
              </div>
              <p class="description">
                Import Ceempl by adding this line to your app’s entry point (usually
                <code>index.js</code> or
                <code>app.js</code>)
              </p>
              <div class="code">
                <pre><code>import <span class="blue">'ceempl'</span></code></pre>
              </div>
            </div>
            <div class="item" id="webpack">
              <div class="header">
                <a href="#webpack">#</a>
                <h4>Webpack</h4>
              </div>
              <p class="description">You can easily add Ceempl in your webpack config file.</p>
              <div class="code">
                <pre><code>export default {
      css: [
        <span class="blue">'ceempl'</span>
    ]
}</code></pre>
              </div>
            </div>
          </div>
        </div>
        <div class="col xl-2 lg-2 md-12 sm-12">
          <div class="sidebar right">
            <div class="item">
              <span class="title">On this page</span>
              <ul>
                <li>
                  <a href="#import">#import</a>
                </li>
                <li>
                  <a href="#webpack">#webpack</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import Sidebar from "~/components/Sidebar.vue";

export default {
  components: {
    Navbar,
    Sidebar
  }
};
</script>

<style>
</style>
