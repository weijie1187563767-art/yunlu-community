<template>
  <article class="news">
    <div class="news__top">
      <span class="news__date">{{ news.date }}</span>
      <span class="news__tag">{{ news.tag }}</span>
    </div>
    <h3 class="news__title">{{ news.title }}</h3>
    <p class="news__summary">{{ news.summary }}</p>
  </article>
</template>

<script setup>
defineProps({ news: { type: Object, required: true } })
</script>
