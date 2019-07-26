<template>
    <div class="sidebar left">
        <div class="item">
            <span class="title">Getting started</span>
            <ul>
                <li>
                    <nuxt-link to="/docs">Installation</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/docs/usage">Usage</nuxt-link>
                </li>
            </ul>
        </div>
        <div class="item">
            <span class="title">Layout</span>
            <ul>
                <li>
                    <nuxt-link to="/layout">Overview</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/layout/grid">Grid</nuxt-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<style>

    .sidebar {
        padding-top: 60px;
        position: sticky;
        top: 0;
    }

    .sidebar .item {
        margin-top: 30px;
    }

    .sidebar .item:first-child {
        margin-top: 0;
    }

    .sidebar .item .title {
        font-size: 13px;
        text-transform: uppercase;
        color: #ACA9C7;
    }

    .sidebar .item ul {
        margin-top: 15px;
        padding: 0;
    }

    .sidebar .item ul li {
        list-style: none;
        margin: 10px 0;
    }

    .sidebar .item ul li a {
        color: #ACA9C7;
        text-decoration: none;
        position: relative;
        padding: 3px 10px;
        width: 135px;
        display: flex;
        border-left: 2px solid transparent;
        transition: all 150ms ease-in-out;
    }

    .sidebar .item ul li a:hover {
        color: #17152E;
    }

    .sidebar .item ul li p {
        color: #ACA9C7;
        padding: 7px 10px;
        display: flex;
    }

    .sidebar .item ul li a.nuxt-link-exact-active {
        color: #17152E;
        /* border-color: #001FFF; */
    }

    .sidebar .item ul li a.nuxt-link-exact-active::before {
        content: '';
        width: 2px;
        height: 100%;
        position: absolute;
        left: 0;
        background-color: #001FFF;
        top: 0;
        border-radius: 10px;
    }
</style>

