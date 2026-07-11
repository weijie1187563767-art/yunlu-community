<template>
  <div class="section">
    <div class="container">
      <div class="section__head" style="text-align:center;margin-bottom:24px">
        <span class="pill">业主论坛</span>
        <h2 class="sec-title" style="margin-top:10px">云麓论坛</h2>
        <p style="color:var(--muted);margin-top:8px">买房、装修、邻里、二手…… 云麓业主的交流地。（演示版，发帖保存在本机，后期可接入微信登录与后端）</p>
      </div>

      <div class="forum-cats">
        <div class="fcard" v-for="c in cats" :key="c.name">
          <span>{{ c.icon }}</span>
          <b>{{ c.name }}</b>
          <i>{{ c.desc }}</i>
        </div>
      </div>

      <!-- 本地发帖（演示） -->
      <div class="forum-compose">
        <div class="row">
          <select v-model="form.cat">
            <option v-for="c in cats" :key="c.name" :value="c.name">{{ c.name }}</option>
          </select>
          <input v-model="form.title" placeholder="想说点什么？例如：同栋的邻居来签个到~" />
        </div>
        <textarea v-model="form.body" placeholder="补充内容（可选）"></textarea>
        <div class="row" style="margin-top:12px;justify-content:flex-end">
          <button class="btn btn--primary" @click="post">发布帖子</button>
        </div>
      </div>

      <div class="posts">
        <article class="post" v-for="(p, i) in posts" :key="i">
          <div class="post__top">
            <span class="post__cat">{{ p.cat }}</span>
            <span>{{ p.user }}</span>
            <span>· {{ p.time }}</span>
          </div>
          <div class="post__title">{{ p.title }}</div>
          <div class="post__meta" v-if="p.body">💬 {{ p.body }}</div>
          <div class="post__meta">💬 {{ p.reply }} 条回复</div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { FORUM_CATS, FORUM_POSTS } from '../data/site.js'

const cats = FORUM_CATS
const posts = ref(FORUM_POSTS.map(p => ({ ...p })))

const form = reactive({ cat: '邻居签到', title: '', body: '' })

function post() {
  const title = form.title.trim()
  if (!title) return
  posts.value.unshift({
    cat: form.cat,
    user: '我',
    time: '刚刚',
    title,
    body: form.body.trim(),
    reply: 0
  })
  form.title = ''
  form.body = ''
}
</script>
