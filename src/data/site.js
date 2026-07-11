// 郑轨云麓社区网站 · 集中数据
// 资料来源：房天下等公开楼盘信息整理（非官方，仅供参考）

export const PROJECT = {
  name: '郑轨云麓',
  brand: '云麓家园',
  slogan: '云端上的理想社区',
  intro: '一个属于云麓业主的线上家园',
  region: '郑州高新区',
  location: '嵩山北路 · 东风路附近',
  developer: '郑州西汇房地产开发有限公司',
  type: '住宅',
  far: '约 2.99', // 容积率
  green: '约 35%', // 绿化率
  delivery: '2026-09-30', // 预计交房
  subway: '规划中地铁 8 号线五龙口站',
  concept: 'TOD 城市发展理念',
  areaRange: '101㎡ - 144㎡',
  position: '年轻家庭改善型社区'
}

// 户型中心（重点模块）
export const HOUSES = [
  {
    id: '101', name: 'A户型', area: 101, rooms: '三室两厅两卫', type: '三房',
    features: ['三开间朝南', '大阳台', '动静分区', '全明户型'],
    budget: { eco: '8-12 万', mid: '15-20 万', high: '25 万+' }
  },
  {
    id: '112', name: 'B户型', area: 112, rooms: '三室两厅两卫', type: '三房',
    features: ['三开间朝南', '宽景阳台', '主卧套间', '高得房率'],
    budget: { eco: '10-14 万', mid: '18-23 万', high: '28 万+' }
  },
  {
    id: '118', name: 'C户型', area: 118, rooms: '三室两厅两卫', type: '三房',
    features: ['通透三房', '独立玄关', 'U型厨房', '儿童房朝阳'],
    budget: { eco: '11-15 万', mid: '19-24 万', high: '30 万+' }
  },
  {
    id: '132', name: 'D户型', area: 132, rooms: '四室两厅两卫', type: '四房',
    features: ['四开间朝南', '横厅设计', '双卫干湿分离', '书房可变'],
    budget: { eco: '14-18 万', mid: '22-28 万', high: '35 万+' }
  },
  {
    id: '133', name: 'F户型', area: 133, rooms: '四室两厅两卫', type: '四房',
    features: ['奢阔四房', '超大阳台', '主卧衣帽间', '餐客一体'],
    budget: { eco: '14-18 万', mid: '23-29 万', high: '36 万+' }
  },
  {
    id: '144', name: 'G户型', area: 144, rooms: '四室两厅两卫', type: '四房',
    features: ['地标级四房', '南北通透', '双阳台', '多功能厅'],
    budget: { eco: '16-20 万', mid: '25-32 万', high: '40 万+' }
  }
]

// 最新动态
export const NEWS = [
  { date: '2026-07-08', tag: '施工进度', title: '郑轨云麓主体结构全面封顶，外立面施工启动', summary: '项目多栋住宅已封顶，园林与公区同步推进，按节点迈向 2026 年 9 月交付。' },
  { date: '2026-06-20', tag: '邻里', title: '首批云麓业主交流群正式开放', summary: '已购房邻居可凭认购信息加入业主群，交流收房、装修与邻里事务。' },
  { date: '2026-06-05', tag: '配套', title: '地铁 8 号线五龙口站建设推进中', summary: 'TOD 出行利好持续兑现，未来轨交接驳将大幅缩短通勤时间。' },
  { date: '2026-05-18', tag: '户型', title: '101-144㎡ 全系户型样板间开放预约', summary: '三房、四房实景样板间开放，可直观感受空间尺度与采光。' }
]

// 装修专区分类
export const DECOR_CATS = [
  { icon: '🏗️', name: '装修公司评价', desc: '业主实测口碑与避坑清单' },
  { icon: '💰', name: '装修报价', desc: '按面积与档位的预算参考' },
  { icon: '🪵', name: '全屋定制', desc: '柜体、收纳与板材选择' },
  { icon: '🧱', name: '瓷砖品牌', desc: '客厅、厨卫瓷砖对比' },
  { icon: '🍳', name: '厨房设计', desc: '动线与收纳方案' },
  { icon: '🤖', name: '智能家居', desc: '门锁、照明与影音' },
  { icon: '⚠️', name: '避坑指南', desc: '合同、增项与验收' },
  { icon: '🛋️', name: '软装搭配', desc: '家具尺寸与风格' }
]

// 周边配套 POI（相对小区的方位）
export const POIS = [
  { name: '购物中心', dir: '上', icon: '🛍️', desc: '商场 / 商业综合体' },
  { name: '三甲医院', dir: '左', icon: '🏥', desc: '优质医疗资源' },
  { name: '地铁 8 号线五龙口站', dir: '右', icon: '🚇', desc: 'TOD 轨交（规划中）' },
  { name: '九年制学校', dir: '下', icon: '🏫', desc: '教育资源' },
  { name: '生活超市', dir: '右下', icon: '🛒', desc: '日常采买' }
]

// 业主论坛分类
export const FORUM_CATS = [
  { icon: '🏠', name: '买房交流', desc: '选房、贷款与合同' },
  { icon: '🎨', name: '装修交流', desc: '设计、施工与团购' },
  { icon: '👋', name: '邻居签到', desc: '认识同小区邻居' },
  { icon: '🛡️', name: '物业反馈', desc: '报修与服务建议' },
  { icon: '🚗', name: '拼车信息', desc: '通勤与出行互助' },
  { icon: '♻️', name: '二手交易', desc: '闲置转让与求购' }
]

// 论坛示例帖子（本地演示，无后端）
export const FORUM_POSTS = [
  { cat: '买房交流', user: '麓邻小江', time: '3 天前', title: '101㎡ 三房采光实测，朝南三开间确实香', reply: 12 },
  { cat: '装修交流', user: '装修ing', time: '1 天前', title: '112㎡ 中档装修 18 万落地，附清单', reply: 28 },
  { cat: '邻居签到', user: '新业主阿May', time: '5 小时前', title: '准备 9 月收房，同栋的邻居冒个泡~', reply: 6 },
  { cat: '物业反馈', user: '业主老王', time: '2 天前', title: '建议增加电动车充电点位', reply: 9 }
]
