<template>
  <div class="section">
    <div class="container">
      <div class="section__head" style="text-align:center;margin-bottom:24px">
        <span class="pill">装修专区</span>
        <h2 class="sec-title" style="margin-top:10px">云麓装修数据库</h2>
        <p style="color:var(--muted);margin-top:8px">装修公司评价、报价、全屋定制、避坑指南……业主共建的装修经验库。</p>
      </div>

      <div class="decor-cats">
        <div class="dcard" v-for="c in cats" :key="c.name">
          <span>{{ c.icon }}</span>
          <b>{{ c.name }}</b>
          <i>{{ c.desc }}</i>
        </div>
      </div>

      <!-- 示例：101㎡ 装修方案 -->
      <div class="decor-plan">
        <h3>📐 101㎡ 三房 · 装修方案参考</h3>
        <p>以下为按面积估算的整装预算区间（含硬装 + 基础软装，不含家具家电），实际以本地报价为准。</p>
        <div class="plan-cols">
          <div class="plan plan--eco">
            <h4>经济型</h4>
            <div class="price">8-12 万</div>
            <ul>
              <li>国产乳胶漆 + 强化地板</li>
              <li>刚需品牌瓷砖 / 洁具</li>
              <li>成品柜为主，少定制</li>
              <li>基础水电，无全屋智能</li>
            </ul>
          </div>
          <div class="plan plan--mid">
            <h4>中档</h4>
            <div class="price">15-20 万</div>
            <ul>
              <li>环保漆 + 实木复合地板</li>
              <li>全屋定制柜体（收纳增容）</li>
              <li>中央空调 / 新风可选</li>
              <li>局部智能照明与门锁</li>
            </ul>
          </div>
          <div class="plan plan--high">
            <h4>高端</h4>
            <div class="price">25 万+</div>
            <ul>
              <li>进口/高端品牌主材</li>
              <li>系统化全屋定制 + 设计</li>
              <li>全屋智能（影音/暖通/安防）</li>
              <li>软装陈设一体化</li>
            </ul>
          </div>
        </div>
      </div>

      <p style="margin-top:22px;font-size:13px;color:var(--muted);text-align:center">
        提示：预算区间仅供参考。建议多对比 2-3 家本地装修公司，重点核对增项与验收条款。
      </p>
    </div>
  </div>
</template>

<script setup>
import { DECOR_CATS } from '../data/site.js'
const cats = DECOR_CATS
</script>
