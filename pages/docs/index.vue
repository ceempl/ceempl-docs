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
                  <h1>Installation</h1>
                  <p>Quick start guide for installing and configuring Ceempl.</p>
                </div>
                <div class="item">
                  <div class="header">
                    <span>1</span>
                    <h4>Install Ceempl via npm</h4>
                  </div>
                  <p class="description">For most projects, you’ll want to install Ceempl via npm.</p>
                  <div class="code">
                    <pre><code><span class="comment">#using npm</span>
npm install ceempl</code></pre>
                  </div>
                </div>
                <div class="item">
                  <div class="header">
                    <span>2</span>
                    <h4>Install Ceempl via yarn</h4>
                  </div>
                  <p class="description">And for most projects, you’ll want to install Ceempl via yarn.</p>
                  <div class="code">
                    <pre><code><span class="comment">#using yarn</span>
yarn add ceempl</code></pre>
                  </div>
                </div>
                <div class="item">
                  <div class="header">
                    <span>3</span>
                    <h4>Using CDN</h4>
                  </div>
                  <p class="description">Looking to quickly add Ceempl to your project? Use CeemplCDN, provided for free by the folks at UNPKG. </p>
                  <div class="code">
                    <pre><code><span class="comment">#using CDN</span>
<<span>link rel="<span class="blue">stylesheet</span>" href=“<span class="blue">https://stackpath.ceempl.com/ceempl/4.1.3/css/ceempl.css</span>”</span>></code></pre>
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
                        <p>npm</p>
                      </li>
                      <li>
                        <p>yarn</p>
                      </li>
                      <li>
                        <p>cdn</p>
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

  .docs {

  }

  .main {
    margin-top: 50px;
  }

  .main .title {
    border-bottom: 1px solid #FAFAFA;
    padding-bottom: 30px;
  }

  .main .title h1 {
    font-size: 24px;
    color: #212121;
    margin-bottom: 5px;
  }

  .main .title p {
    color: #9A9A9A;
  }

  .main .item {
    margin: 30px 0 50px 0;
  }

  .main .item:hover .header a {
    opacity: 1;
  }

  .main .item .header {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
  }

  .main .item .header a {
    margin: 0 10px 0 -20px;
    opacity: 0;
    text-decoration: none;
    color: #9A9A9A;
    transition: all 100ms ease-in-out;
  }

  .main .item .header a:hover {
    color: #212121;
  }

  .main .item .header span {
    width: 28px;
    height: 28px;
    display: flex;
    margin-right: 10px;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    background-color: #F8F9FF;
    color: #2F4BFF;
  }

  .main .item .header h4 {
    font-size: 16px;
    color: #212121;
  }

  .main .item p.description {
    color: #9A9A9A;
  }

  .main .item .code {
    margin: 30px 0;
    padding: 10px 20px;
    background: #2D3748;
    color: #FFF;
    border-radius: 7px;
  }

  .main .item .code span.comment {
    font-size: 12px;
    color: #A0AEC0;
    margin-bottom: 15px;
    display: inline-block;
  }

  .main .item .code span.blue {
    font-size: 12px;
    color: #65CAFF;
    margin-bottom: 0;
  }

</style>
