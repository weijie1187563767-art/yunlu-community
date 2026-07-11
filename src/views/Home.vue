<template>
  <div>
    <!-- Hero -->
    <section class="hero">
      <div class="hero__bg" aria-hidden="true"></div>
      <div class="container hero__inner">
        <span class="pill">TOD 生活圈 · 改善型住宅 · 业主家园</span>
        <h1>郑轨云麓</h1>
        <p class="hero__slogan">云端上的理想社区</p>
        <p class="hero__sub">一个属于云麓业主的线上家园——楼盘资料、户型点评、装修方案与邻里交流，一站通达。</p>
        <div class="hero__actions">
          <router-link to="/house" class="btn btn--primary">进入社区</router-link>
          <router-link to="/house" class="btn btn--ghost">查看户型</router-link>
        </div>
      </div>
    </section>

    <!-- 交房倒计时 -->
    <section class="section">
      <div class="container">
        <div class="countdown">
          <div class="countdown__main">
            <span class="countdown__label">距离郑轨云麓交付</span>
            <div class="countdown__num"><b>{{ daysLeft }}</b> 天</div>
            <span class="countdown__date">预计 {{ project.delivery }}</span>
          </div>
          <div class="countdown__sides">
            <div class="mini"><span class="mini__k">📍 位置</span><span class="mini__v">{{ project.location }}</span></div>
            <div class="mini"><span class="mini__k">🚇 交通</span><span class="mini__v">{{ project.subway }}</span></div>
            <div class="mini"><span class="mini__k">🌳 绿化率</span><span class="mini__v">{{ project.green }}</span></div>
          </div>
        </div>
      </div>
    </section>

    <!-- 社区导航 -->
    <section class="section section--alt">
      <div class="container">
        <h2 class="sec-title">社区导航</h2>
        <div class="navgrid" style="margin-top:26px">
          <router-link to="/about" class="navcard"><span>🏠</span><b>小区介绍</b><i>项目参数与定位</i></router-link>
          <router-link to="/house" class="navcard"><span>📐</span><b>户型中心</b><i>6 款户型点评</i></router-link>
          <router-link to="/decoration" class="navcard"><span>🔧</span><b>装修专区</b><i>预算与避坑</i></router-link>
          <router-link to="/map" class="navcard"><span>🚇</span><b>周边配套</b><i>交通商业教育</i></router-link>
          <router-link to="/forum" class="navcard"><span>👥</span><b>业主论坛</b><i>邻里与二手</i></router-link>
          <router-link to="/about" class="navcard"><span>🌳</span><b>社区环境</b><i>绿化与园林</i></router-link>
        </div>
      </div>
    </section>

    <!-- 最新动态 -->
    <section class="section">
      <div class="container">
        <div class="sec-head">
          <h2 class="sec-title">最新动态</h2>
          <router-link to="/forum" class="more">进入论坛 →</router-link>
        </div>
        <div class="newslist">
          <NewsCard v-for="n in news" :key="n.title" :news="n" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { PROJECT, NEWS } from '../data/site.js'
import NewsCard from '../components/NewsCard.vue'

const project = PROJECT
const news = NEWS

const daysLeft = computed(() => {
  const target = new Date(project.delivery + 'T00:00:00')
  const now = new Date()
  const d = Math.ceil((target - now) / 86400000)
  return d > 0 ? d : 0
})
</script>
