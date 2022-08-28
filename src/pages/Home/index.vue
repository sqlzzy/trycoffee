<template>
  <header-page/>
  <main class="content">
    <article class="methods">
        <section
            class="method"
            v-for="method in apisMethods"
            :key="method"
        >
            <a
              :href="`/method/${method.name}`"
              class="method__link"
              :id="method.name"
            >
              <h2 class="method__title">{{ method.name_ru }}</h2>
            </a>

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
import CardCoffee from '@/components/card-coffee/CardCoffee.vue';
import HeaderPage from '@/components/header-page/HeaderPage.vue';
import FooterPage from '@/components/footer-page/FooterPage.vue';

export default {
  name: 'HomePage',
  components: {
    CardCoffee,
    HeaderPage,
    FooterPage,
  },

  computed: {
    apisMethods() {
      const components = require.context( '@/api', false, /\w*(?=\.json)/ )
      return components.keys().map(x => components(x))
    }
  },
}
</script>

<style src="./style.less" lang="less" scoped />
