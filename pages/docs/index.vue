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
              <h1>Installation</h1>
              <p>Quickly get started with Ceempl.</p>
            </div>
            <div class="item" id="npm">
              <div class="header">
                <a href="#npm">#</a>
                <span>1</span>
                <h4>Install Ceempl via npm</h4>
              </div>
              <p class="description">For most projects, you’ll want to install Ceempl via npm,</p>
              <div class="code">
                <pre><code><span class="comment margin">#using npm</span>
npm install ceempl</code></pre>
              </div>
            </div>
            <div class="item" id="yarn">
              <div class="header">
                <a href="#yarn">#</a>
                <span>2</span>
                <h4>Install Ceempl via yarn</h4>
              </div>
              <p class="description">Also you can install Ceempl via Yarn,</p>
              <div class="code">
                <pre><code><span class="comment margin">#using yarn</span>
yarn add ceempl</code></pre>
              </div>
            </div>
            <div class="item" id="cdn">
              <div class="header">
                <a href="#cdn">#</a>
                <span>3</span>
                <h4>Using CDN</h4>
              </div>
              <p class="description">Or you can use CDN.</p>
              <div class="code">
                <pre><code><span class="comment margin">#using CDN</span>
<<span>link rel="<span class="blue">stylesheet</span>" href="<span class="blue">https://unpkg.com/ceempl/dist/ceempl.css</span>"</span>></code></pre>
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
                  <a href="#npm">#npm</a>
                </li>
                <li>
                  <a href="#yarn">#yarn</a>
                </li>
                <li>
                  <a href="#cdn">#cdn</a>
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