<template>
  <div>
    <nuxt />
  </div>
</template>

<style>

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
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
    font-family: menlo;
    font-weight: normal;
    font-size: 12px;
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
</style>
