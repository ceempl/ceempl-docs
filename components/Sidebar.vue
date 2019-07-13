<template>
    <div class="sidebar left">
        <div class="item">
            <span class="title">Getting started</span>
            <ul>
                <li>
                    <nuxt-link to="/docs">Introduction</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/docs/installation">Installation</nuxt-link>
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
        <div class="item">
            <span class="title">Content</span>
            <ul>
                <li>
                    <nuxt-link to="/content/typography">Typography</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/content/code">Code</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/content/images">Images</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/content/tables">Tables</nuxt-link>
                </li>
            </ul>
        </div>
        <div class="item">
            <span class="title">Components</span>
            <ul>
                <li>
                    <nuxt-link to="/components/buttons">Buttons</nuxt-link>
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
        color: #9A9A9A;
    }

    .sidebar .item ul {
        margin-top: 10px;
        padding: 0;
    }

    .sidebar .item ul li {
        list-style: none;
        margin: 5px 0;
    }

    .sidebar .item ul li a {
        color: #212121;
        text-decoration: none;
        padding: 7px 10px;
        background-color: #FFF;
        border-radius: 6px;
        width: 135px;
        display: flex;
    }

    .sidebar .item ul li p {
        color: #212121;
        padding: 7px 10px;
        display: flex;
    }

    .sidebar .item ul li a.nuxt-link-exact-active {
        color: #2F4BFF;
        background-color: #F8F9FF;
    }
</style>

