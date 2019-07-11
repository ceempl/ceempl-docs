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
              </div>
            </div>
            <div class="col md-2">
              right
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

</style>
