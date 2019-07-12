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
                  <h1>Overview</h1>
                  <p>Components and options for laying out your Ceempl project, including wrapping containers, a powerful grid system, a flexible media object, and responsive utility classes.</p>
                </div>
                <div class="item">
                  <div class="header">
                    <a href="#container">#</a>
                    <span>1</span>
                    <h4>Containers</h4>
                  </div>
                  <p class="description">Containers are the most basic layout element in Ceempl and are required when using our default grid system.</p>
                  <div class="code">
                    <pre><code><<span>div class="container"</span>>
  <span class="comment"> <span><</span>!-- Content here --> </span>
<<span>/div</span>></code></pre>
                  </div>
                </div>
                <div class="item">
                  <div class="header">
                    <a href="#containerFluid">#</a>
                    <span>2</span>
                    <h4>Container fluid</h4>
                  </div>
                  <p class="description">Containers are the most basic layout element in Ceempl and are required when using our default grid system.</p>
                  <div class="code">
                    <pre><code><<span>div class="container-fluid"</span>>
  <span class="comment"> <span><</span>!-- Content here --> </span>
<<span>/div</span>></code></pre>
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
                        <a href="#container">Container</a>
                      </li>
                      <li>
                        <a href="#containerFluid">Container-fluid</a>
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
