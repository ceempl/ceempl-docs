<template>
  <div>
    <nuxt />
  </div>
</template>

<style>

  ::-webkit-scrollbar {
    width: 10px;
    height: 0px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 200px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #DAE0E6;
    border: 3px solid transparent;
    border-width: 3px;
    border-radius: 9px;
    background-clip: content-box;
  }

  body {
    font-weight: bold;
  }
  
  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  p, a, span {
    font-size: 13px;
  }

  code {
    font-family: ubuntu;
    font-weight: normal;
    font-size: 13px;
    letter-spacing: 0.25px;
  }

  pre {
    overflow-y: auto;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
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

  .main .title a {
    color: #2F4BFF;
    text-decoration: none;
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
    margin-left: -20px;
    padding-right: 10px;
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

  .main .item p.description code {
    background: #F8F9FF;
    margin: 0 2px;
    padding: 3px 8px;
    color: #2F4BFF;
  }

  .main .item .code {
    margin: 20px 0;
    padding: 10px 20px;
    background: #2D3748;
    color: #FFF;
    border-radius: 7px;
  }

  .main .item img {
    width: 100%;
    margin-bottom: 20px;
    border-radius: 8px;
  }

  .main .item .code span.comment {
    font-size: 12px;
    color: #A0AEC0;
    display: inline-block;
    font-style: italic;
  }

  .main .item .code span.comment.margin {
    margin-bottom: 15px;
  }

  .main .item .code span.blue {
    font-size: 13px;
    color: #65CAFF;
    margin-bottom: 0;
  }

</style>
