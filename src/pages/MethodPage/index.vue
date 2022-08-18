<template>
  <header-page :link="true"/>

  <main class="content">
    <div class="methods" >
        <div
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
        </div>
    </div>
  </main>

  <footer-page />
</template>

<script>
import HeaderPage from '@/components/HeaderPage.vue';
import CardCoffee from '@/components/card-coffee/CardCoffee.vue';
import FooterPage from '@/components/footer-page/FooterPage.vue';

export default {
  name: 'MethodPage',
  components: {
    HeaderPage,
    CardCoffee,
    FooterPage,
  },

  computed: {
    apisMethods() {
      const components = require.context( '@/api', false, /.json/ )
      return components.keys().map(x => components(x))
    },

    currentMethod() {
      return this.apisMethods.filter((method) => { return method.name === this.$route.params.methodName } );
    }
  }
}
</script>

<style lang="less" scoped>
.method {
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

