<template>
    <header class="header">
        <MenuButton />
        <a v-if="hasLink" href="/" class="header__link">
            <h1 class="header__title">TRY COFFEE</h1>
        </a>
        <h1 v-else class="header__title">TRY COFFEE</h1>
  </header>
</template>

<script>
import MenuButton from "@/components/MenuButton/MenuButton";

export default {
  name: 'HeaderPage',
    components: {MenuButton},
    data: function () {
    const isMainPage = window.location.pathname === '/';
    return {
      hasLink: !isMainPage,
    }
  }
}
</script>

<style src="./style.less" lang="less" scoped />
