<template>
  <div class="section">
    <div class="container">
      <div class="section__head" style="text-align:center;margin-bottom:24px">
        <span class="pill">周边地图</span>
        <h2 class="sec-title" style="margin-top:10px">郑轨云麓 · 周边配套</h2>
        <p style="color:var(--muted);margin-top:8px">以小区为中心，示意周边交通、商业、医疗与教育配套。</p>
      </div>

      <div class="map-wrap">
        <div class="map-canvas">
          <div class="map-road h"></div>
          <div class="map-road v"></div>
          <div class="map-center">郑轨<br>云麓</div>
          <div
            v-for="p in pois"
            :key="p.name"
            class="map-poi"
            :style="posStyle(p.dir)"
          >
            <span class="dot">{{ p.icon }}</span>
            <span>{{ p.name }}</span>
          </div>
        </div>

        <div class="poi-list">
          <div class="poi-row" v-for="p in pois" :key="p.name">
            <span class="ico">{{ p.icon }}</span>
            <div>
              <b>{{ p.name }}</b>
              <span>{{ p.desc }}</span>
            </div>
          </div>
        </div>
      </div>

      <p style="margin-top:22px;font-size:13px;color:var(--muted);text-align:center">
        方位为示意，具体距离与可达性以实地与官方规划为准。
      </p>
    </div>
  </div>
</template>

<script setup>
import { POIS } from '../data/site.js'
const pois = POIS

// 把方位映射成相对中心的位置（百分比）
const posStyle = (dir) => {
  const map = {
    上: { left: '50%', top: '15%' },
    左: { left: '16%', top: '50%' },
    右: { left: '84%', top: '50%' },
    下: { left: '50%', top: '85%' },
    右下: { left: '74%', top: '78%' }
  }
  return map[dir] || { left: '50%', top: '50%' }
}
</script>
