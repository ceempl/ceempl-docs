<template>
    <div class="container">
        <Navbar />
        <div class="docs">
          <div class="row">
            <div class="col md-2">
              <Sidebar />
            </div>
            <div class="col md-8">
              <div class="main">
                <div class="title">
                  <h1>Usage</h1>
                  <p><nuxt-link to="/docs/installation">Install Ceempl</nuxt-link> as a module using npm or yarn.</p>
                </div>
                <div class="item" id="import">
                  <div class="header">
                    <a href="#import">#</a>
                    <h4>Import as a module</h4>
                  </div>
                  <p class="description">Import Ceempl by adding this line to your app’s entry point (usually <code>index.js</code> or <code>app.js</code>)</p>
                  <div class="code">
                    <pre><code>import <span class="blue">'ceempl'</span></code></pre>
                  </div>
                </div>
                <div class="item" id="webpack">
                  <div class="header">
                    <a href="#webpack">#</a>
                    <h4>Webpack config</h4>
                  </div>
                  <p class="description">You can easily import in your <code>main.js</code> file and use.</p>
                  <div class="code">
                    <pre><code>export default {<span class="blue">
      css: [
        'ceempl'
    ]</span>
}</code></pre>
                  </div>
                </div>
              </div>
            </div>
            <div class="col md-2">
              <div class="sidebar right">
                <div class="item">
                  <span class="title">On this page</span>
                  <ul>
                      <li>
                        <a href="#import">Import</a>
                      </li>
                      <li>
                        <a href="#webpack">Webpack</a>
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
import Navbar from '~/components/Navbar.vue'
import Sidebar from '~/components/Sidebar.vue'

export default {
  components: {
    Navbar,
    Sidebar
  }
}
</script>

<style>

</style>
