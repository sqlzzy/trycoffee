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

<style lang="less" scoped>
.header {
    box-shadow: 0px -5px 24px -5px rgb(34 60 80 / 25%);
    border-bottom: 1px solid transparent;
    padding: 12px;

    &__title {
        font-size: xx-large;
        font-weight: bold;
        text-align: center;
        margin-bottom: 12px;
    }

    &__subtitle {
        text-align: center;
        margin-bottom: 6px;
    }

    &__link {
        color: inherit;
    }
}

</style>