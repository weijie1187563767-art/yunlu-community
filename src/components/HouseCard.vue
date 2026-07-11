<template>
  <article class="hcard">
    <div class="hcard__art" :style="{ background: artBg }">
      <svg viewBox="0 0 200 132" preserveAspectRatio="xMidYMax meet" aria-hidden="true">
        <!-- 地面 -->
        <rect x="0" y="116" width="200" height="16" fill="rgba(255,255,255,.35)" />
        <!-- 楼体 -->
        <rect :x="60" y="34" width="80" height="84" rx="4" :fill="artFill" />
        <!-- 屋顶 -->
        <polygon :points="`60,34 100,14 140,34`" :fill="artFill" opacity="0.92" />
        <!-- 窗格 -->
        <g fill="rgba(255,255,255,.78)">
          <rect x="70" y="46" width="14" height="12" rx="2" />
          <rect x="93" y="46" width="14" height="12" rx="2" />
          <rect x="116" y="46" width="14" height="12" rx="2" />
          <rect x="70" y="68" width="14" height="12" rx="2" />
          <rect x="93" y="68" width="14" height="12" rx="2" />
          <rect x="116" y="68" width="14" height="12" rx="2" />
          <rect x="70" y="92" width="14" height="12" rx="2" />
          <rect x="116" y="92" width="14" height="12" rx="2" />
          <rect x="93" y="92" width="14" height="20" rx="2" fill="rgba(255,255,255,.95)" />
        </g>
        <!-- 小树 -->
        <circle cx="26" cy="104" r="12" fill="rgba(255,255,255,.5)" />
        <circle cx="174" cy="104" r="12" fill="rgba(255,255,255,.5)" />
      </svg>
    </div>
    <div class="hcard__body">
      <div class="hcard__name">{{ house.name }} · {{ house.area }}㎡</div>
      <div class="hcard__meta">{{ house.rooms }} · {{ house.type }}</div>
      <div class="hcard__chips">
        <span class="feat" v-for="f in house.features" :key="f">{{ f }}</span>
      </div>
      <button class="hcard__toggle" @click="open = !open">
        {{ open ? '收起装修预算 ▲' : '查看装修预算 ▼' }}
      </button>
      <div class="budget" v-if="open">
        <div class="budget__row"><span>经济型</span><b>{{ house.budget.eco }}</b></div>
        <div class="budget__row"><span>中档</span><b>{{ house.budget.mid }}</b></div>
        <div class="budget__row"><span>高端</span><b>{{ house.budget.high }}</b></div>
      </div>
    </div>
  </article>
</template>

<script setup>
import { ref, computed } from 'vue'
const props = defineProps({ house: { type: Object, required: true } })
const open = ref(false)

const palette = {
  '三房': { bg: 'linear-gradient(135deg,#d9f0e7,#eaf4fb)', fill: '#1f9e7a' },
  '四房': { bg: 'linear-gradient(135deg,#e3eefb,#eaf4fb)', fill: '#3b82c4' }
}
const art = computed(() => palette[props.house.type] || palette['三房'])
const artBg = art.value.bg
const artFill = art.value.fill
</script>
