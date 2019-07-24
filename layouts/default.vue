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
    min-height: 80vh
  }

  .main .title {
    border-bottom: 1px solid #F8F9FD;
    padding-bottom: 30px;
  }

  .main .title h1 {
    font-size: 24px;
    color: #2A2E4C;
    margin-bottom: 5px;
  }

  .main .title p {
    color: #9C9C9F;
  }

  .main .title a {
    color: #001FFF;
    text-decoration: none;
  }

  .main .item {
    margin: 30px 0 50px 0;
  }

  .main .item:hover .header a {
    opacity: 1;
    transform: translateX(0px)
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
    transform: translateX(5px);
    transition: all 100ms ease-in-out;
  }

  .main .item .header a:hover {
    color: #001FFF;
  }

  .main .item .header span {
    width: 28px;
    height: 28px;
    display: flex;
    margin-right: 10px;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    background-color: #F8F9FD;
    color: #001FFF;
  }

  .main .item .header h4 {
    font-size: 16px;
    color: #2A2E4C;
  }

  .main .item p.description {
    color: #9A9A9A;
  }

  .main .item p.description code {
    background: #F8F9FD;
    margin: 0 2px;
    border-radius: 4px;
    font-size: 12px;
    padding: 4px 8px;
    color: #001FFF;
  }

  .main .item .code {
    margin: 20px 0;
    padding: 10px 20px;
    background: #2A2E4C;
    color: #FFF;
    border-radius: 7px;
  }

  .main .item img {
    width: 100%;
    margin-bottom: 20px;
    border-radius: 8px;
  }

  .main .item .example {
    font-family: Ubuntu;
    margin: 20px 0;
    padding: 10px;
    border: 1px solid #F8F9FD;
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .main .item .example .body {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    color: #001FFF;
    background-color: #F8F9FD;
  }

  .main .item .code span.comment {
    font-size: 12px;
    color: #C1C6E0;
    display: inline-block;
  }

  .main .item .code span.comment.margin {
    margin-bottom: 15px;
  }

  .main .item .code span.blue {
    font-size: 13px;
    color: #65CAFF;
    margin-bottom: 0;
  }

  .main .item .code span.green {
    color: #39ef2f;
    font-size: 13px;
  }

  .main .item .code span.purple {
    color: #ff47fe;
    font-size: 13px;
  }

  .main .item .code span.red {
    color: #ff496b;
    font-size: 13px;
  }

  .main .item .code span.orange {
    color: #ff9c43;
    font-size: 13px;
  }

</style>
