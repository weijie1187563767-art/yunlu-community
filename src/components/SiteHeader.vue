<template>
  <header class="hdr">
    <div class="hdr__inner container">
      <router-link to="/" class="brand">
        <span class="brand__logo">🏔️</span>
        <span class="brand__txt">
          <b>郑轨云麓</b>
          <small>云麓家园</small>
        </span>
      </router-link>
      <nav class="hdr__nav" :class="{ open }">
        <router-link to="/">首页</router-link>
        <router-link to="/about">小区介绍</router-link>
        <router-link to="/house">户型中心</router-link>
        <router-link to="/decoration">装修专区</router-link>
        <router-link to="/map">周边地图</router-link>
        <router-link to="/forum">业主论坛</router-link>
      </nav>
      <button class="hdr__toggle" @click="open = !open" aria-label="菜单">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const open = ref(false)
</script>
