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
              <h1>Grid</h1>
              <p>Components and options for laying out your Ceempl project, including wrapping containers, a powerful grid system, a flexible media object, and responsive utility classes.</p>
            </div>
            <div class="item">
              <div class="header">
                <a href="#container">#</a>
                <h4>How it works</h4>
              </div>
              <p
                class="description"
              >Containers are the most basic layout element in Ceempl and are required when using our default grid system.</p>
              <div class="example">
                <div class="container-example">
                  <div class="grid-example col body">
                    <code>.col</code>
                  </div>
                  <div class="grid-example col body">
                    <code>.col</code>
                  </div>
                </div>
              </div>
              <div class="code">
                <pre><code><<span>div class=<span class="blue">“container”</span>></span>
  <<span>div class=<span class="blue">“row”</span>></span>
    <<span>div class=<span class="blue">“col”</span>></span>
      <span class="comment"><span><</span>!-- Content here --></span>
    <<span>/div></span>
    <<span>div class=<span class="blue">“col”</span>></span>
      <span class="comment"><span><</span>!-- Content here --></span>
    <<span>/div></span>
  <<span>/div></span>
<<span>/div></span></code></pre>
              </div>
            </div>
            <div class="tip">
              <h4>Utility classes for hiding elements</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolore dolorem quaerat ea aliquid, enim animi culpa magnam nulla, impedit ad laboriosam nemo error minus?</p>
            </div>
            <div class="item" id="table">
              <div class="header">
                <a href="#">#</a>
                <h4>Classname Description</h4>
              </div>
              <table>
                <tr>
                  <th>Classname</th>
                  <th>Description</th>
                </tr>
                <tr>
                  <td>.sm</td>
                  <td>some text</td>
                </tr>
                <tr>
                  <td>.md</td>
                  <td>some text</td>
                </tr>
                <tr>
                  <td>.lg</td>
                  <td>some text</td>
                </tr>
                <tr>
                  <td>.xl</td>
                  <td>some text</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div class="col xl-2 lg-2 md-12 sm-12">
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
import Navbar from "~/components/Navbar.vue";
import Sidebar from "~/components/Sidebar.vue";

export default {
  components: {
    Navbar,
    Sidebar
  }
};
</script>

<style scoped>
.container-example {
  height: 35px;
  width: 60%;
  margin: auto;
  display: flex;
}

.grid-example {
  height: 35px;
  flex-basis: 50%;
  margin: 0 5px;
}

.container-fluid-example {
  height: 100px;
  width: 100%;
  margin: auto;
}
</style>
