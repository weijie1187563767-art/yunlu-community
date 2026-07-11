<template>
  <div class="section">
    <div class="container">
      <div class="section__head" style="text-align:center;margin-bottom:8px">
        <span class="pill">户型中心</span>
        <h2 class="sec-title" style="margin-top:10px">6 款户型 · 三房 / 四房</h2>
        <p style="color:var(--muted);margin-top:8px">点开任意户型查看空间亮点与装修预算参考；数据为公开资料整理，以实际交付为准。</p>
      </div>

      <div class="house-filters">
        <button class="chip" :class="{ 'is-active': filter === '全部' }" @click="filter = '全部'">全部</button>
        <button class="chip" :class="{ 'is-active': filter === '三房' }" @click="filter = '三房'">三房</button>
        <button class="chip" :class="{ 'is-active': filter === '四房' }" @click="filter = '四房'">四房</button>
      </div>

      <div class="house-grid">
        <HouseCard v-for="h in filtered" :key="h.id" :house="h" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { HOUSES } from '../data/site.js'
import HouseCard from '../components/HouseCard.vue'

const filter = ref('全部')
const filtered = computed(() =>
  filter.value === '全部' ? HOUSES : HOUSES.filter(h => h.type === filter.value)
)
</script>
