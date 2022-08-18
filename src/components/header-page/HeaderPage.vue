<template>
    <header class="header">
        <a v-if="link" href="/" class="header__link">
            <h1 class="header__title">TRY COFFEE</h1>
        </a>
        <h1 v-else class="header__title">TRY COFFEE</h1>
        <p class="header__subtitle">Коллекция рецептов приготовления кофе от обжарщиков и барист</p>
  </header>
</template>

<script>
export default {
  name: 'HeaderPage',

  props: {
    link : Boolean,
  }
}
</script>

<style src="./style.less" lang="less" scoped />
