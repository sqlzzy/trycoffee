<template>
  <header-page/>
  {{ comps }}
  <main class="content">
    <div class="methods">
        <div
            class="method"
            v-for="method in apisMethods"
            :key="method"
        >
            <a :href="`/method/${method.name}`" class="method__link">
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
        </div>
    </div>
  </main>
  <footer-page />
</template>

<script>
import CardCoffee from '@/components/CardCoffee.vue';
import HeaderPage from '@/components/HeaderPage.vue';
import FooterPage from '@/components/FooterPage.vue';

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

<style lang="less" scoped>

.method {
    margin-bottom: 30px;

    &__link {
      text-decoration: none;
      color: inherit;
    }

    &__title {
        font-size: x-large;
        font-weight: bold;
        margin: 12px 0 6px;
    }
}

.cards {
    display: flex;
    flex-wrap: wrap;
}

</style>
