<template>
  <header-page />
  <menu-page
    :methods="apisMethods"
  />
  <main class="content">
    <article class="methods" >
        <section
            class="method"
            v-for="method in currentMethod"
            :key="method"
        >
            <h2 class="method__title">{{ method.name_ru }}</h2>

            <div class="cards">
                <card-coffee
                    v-for="(card, index) in method.cards"
                    :key="card"
                    :title="card.title"
                    :author="card.author"
                    :time="card.time"
                    :temperature="card.temperature"
                    :weight="card.weight"
                    :ice="card.ice"
                    :id="index"
                    :capacity="card.capacity"
                    :methodName="method.name"
                    :barista="card.barista"
                    :existIcon="card.exist_icon"
                />
            </div>
        </section>
    </article>
  </main>

  <footer-page />
</template>

<script>
import HeaderPage from '@/components/header-page/HeaderPage.vue';
import CardCoffee from '@/components/card-coffee/CardCoffee.vue';
import FooterPage from '@/components/footer-page/FooterPage.vue';
import MenuPage from '@/components/menu-page/MenuPage.vue';

export default {
  name: 'MethodPage',
  components: {
    HeaderPage,
    CardCoffee,
    FooterPage,
    MenuPage,
  },

  computed: {
    apisMethods() {
      const components = require.context( '@/api', false, /.json/ )
      return components.keys().map(x => components(x))
    },

    currentMethod() {
      return this.apisMethods.filter(method => method.name === this.$route.params.methodName);
    }
  }
}
</script>

<style src="./style.less" lang="less" scoped />
