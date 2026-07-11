<template>
  <div class="section">
    <div class="container prose">
      <span class="pill">小区介绍</span>
      <h1 style="font-size:clamp(30px,5vw,46px);font-weight:900;margin:14px 0 6px">郑轨云麓</h1>
      <p class="hero__slogan" style="color:var(--green-d);font-weight:800">云端上的理想社区</p>

      <h3>项目简介</h3>
      <p>
        郑轨云麓位于郑州市{{ project.region }}，{{ project.location }}，由{{ project.developer }}开发，
        依托{{ project.concept }}打造。项目规划住宅产品覆盖{{ project.areaRange }}，
        定位为{{ project.position }}，营造便捷、绿色、宜居的 TOD 生活圈。
      </p>

      <h3>基本参数</h3>
      <div class="params" style="margin-top:14px">
        <div class="prow"><span class="k">所在区域</span><span class="v">{{ project.region }}</span></div>
        <div class="prow"><span class="k">项目位置</span><span class="v">{{ project.location }}</span></div>
        <div class="prow"><span class="k">开发商</span><span class="v">{{ project.developer }}</span></div>
        <div class="prow"><span class="k">物业类型</span><span class="v">{{ project.type }}</span></div>
        <div class="prow"><span class="k">容积率</span><span class="v">{{ project.far }}</span></div>
        <div class="prow"><span class="k">绿化率</span><span class="v">{{ project.green }}</span></div>
        <div class="prow"><span class="k">面积区间</span><span class="v">{{ project.areaRange }}</span></div>
        <div class="prow"><span class="k">预计交房</span><span class="v">{{ project.delivery }}</span></div>
        <div class="prow"><span class="k">轨道交通</span><span class="v">{{ project.subway }}</span></div>
        <div class="prow"><span class="k">社区定位</span><span class="v">{{ project.position }}</span></div>
      </div>

      <h3>关于 TOD</h3>
      <p>
        TOD（Transit-Oriented Development，以公共交通为导向的开发）强调在轨交站点周边高密度、混合功能开发，
        让居住、商业、通勤在步行范围内高效组织。郑轨云麓邻近规划中的{{ project.subway }}，
        是这一理念的在地实践，未来有望显著提升日常出行效率。
      </p>

      <p style="margin-top:24px;font-size:13px;color:var(--muted)">
        资料整理自房天下等公开楼盘信息，非官方数据，最终以政府批文与买卖合同为准。
      </p>
    </div>
  </div>
</template>

<script setup>
import { PROJECT } from '../data/site.js'
const project = PROJECT
</script>
