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
  background-color: #dae0e6;
  border: 3px solid transparent;
  border-width: 3px;
  border-radius: 9px;
  background-clip: content-box;
}

@import url("https://fonts.googleapis.com/css?family=Nunito:400,700|Ubuntu&display=swap");

body {
  font-family: "Nunito", sans-serif;
  font-weight: bold;
  letter-spacing: 0.5px;
}

html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

p,
a,
span {
  font-size: 13px;
}

code {
  font-family: "Ubuntu", sans-serif;
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
  min-height: 85vh;
}

.main .title {
  border-bottom: 1px solid #f8f9fd;
  padding-bottom: 30px;
}

.main .title h1 {
  font-size: 24px;
  color: #2a2e4c;
  margin-bottom: 5px;
}

.main .title p {
  color: #9c9c9f;
}

.main .title a {
  color: #001fff;
  text-decoration: none;
}

.main .item {
  padding: 30px 0;
}

.main .item:hover .header a {
  opacity: 1;
  transform: translateX(0px);
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
  color: #9a9a9a;
  transform: translateX(5px);
  transition: all 100ms ease-in-out;
}

.main .item .header a:hover {
  color: #001fff;
}

.main .item .header span {
  width: 28px;
  height: 28px;
  display: flex;
  margin-right: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  background-color: #f8f9fd;
  color: #001fff;
}

.main .item .header h4 {
  font-size: 16px;
  color: #2a2e4c;
}

.main .item p.description {
  color: #9a9a9a;
}

.main .item p.description code {
  background: #f8f9fd;
  margin: 0 1px;
  border-radius: 4px;
  font-size: 12px;
  padding: 4px 8px;
  color: #001fff;
}

.main .item .code {
  margin: 20px 0;
  padding: 15px 25px;
  background: #2a2e4c;
  color: #fff;
  border-radius: 7px;
}

.main .item img {
  width: 100%;
  margin-bottom: 20px;
  border-radius: 8px;
}

.main .item .example {
  font-family: "Ubuntu", sans-serif;
  margin: 20px 0;
  padding: 10px;
  border: 1px solid #f8f9fd;
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
  color: #001fff;
  background-color: #f8f9fd;
}

.main .item .code span.comment {
  font-size: 12px;
  color: #c1c6e0;
  display: inline-block;
}

.main .item .code span.comment.margin {
  margin-bottom: 15px;
}

.main .item .code span.blue {
  font-size: 13px;
  color: #65caff;
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

.main .item table {
  width: 100%;
  font-size: 13px;
  text-align: left;
  color: #8b92bc;
  border-collapse: collapse;
}

.main .item table th {
  background-color: #f8f9fd;
  padding: 13px 20px;
}

.main .item table th:first-child {
  min-width: 150px;
  border-top-left-radius: 7px;
}

.main .item table th:last-child {
  border-top-right-radius: 7px;
}

.main .item table td {
  min-width: 150px;
  padding: 13px 20px;
  border-bottom: 1px solid #f8f9fd;
}

.main .tip {
  background-color: #f8f9fd;
  padding: 15px 25px;
  border-radius: 7px;
  position: relative;
}

.main .tip::before {
  content: "Tip";
  position: absolute;
  left: -10px;
  top: -10px;
  background-color: #001fff;
  color: #fff;
  font-size: 11px;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
}

.main .tip h4 {
  font-size: 14px;
  color: #17152e;
  margin-bottom: 6px;
}

.main .tip p {
  font-size: 13px;
  color: #aca9c7;
}

@media screen and (max-width: 991px) {
  .navbar {
    position: relative;
    z-index: 10000;
  }

  .navbar ul li.menu {
    display: flex !important;
  }

  .navbar ul li.version {
    display: none;
  }

  .sidebar.left {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #fff;
    width: 100%;
    height: 100%;
    z-index: 10;
    padding: 0;
    display: none;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    padding: 150px 40px;
  }

  .sidebar.left.show {
    display: flex;
  }

  .sidebar.right {
    display: none;
  }
}
</style>
