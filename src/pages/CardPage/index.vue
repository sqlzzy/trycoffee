<template>
  <header-page :link="true"/>
  <main class="content">
    <info-coffee 
      :title="currentCard.title"
      :author="currentCard.author"
      :time="currentCard.time"
      :temperature="currentCard.temperature"
      :weight="currentCard.weight"
      :capacity="currentCard.capacity"
      :authorId="currentCard.author_id"
      :barista="currentCard.barista"
      :existIcon="currentCard.exist_icon"
    />
    <recipe-coffee
      :isRecipeTable="currentCard.recipe.table"
      :isRecipeText="currentCard.recipe.text"
      :prewettingStages="currentCard.recipe.prewetting_stages"
      :infusionStages="currentCard.recipe.infusion_stages"
      :preparationStages="currentCard.recipe.preparation_stages"
      :ingredientsList="currentCard.recipe.ingredients_list"
      :extractionTime="currentCard.recipe.extraction_time"
    />
    <note-coffee
      :noteText="currentCard.note"
      :noteLink="currentCard.note_link"
    />
  </main>
  <footer-page />
</template>

<script>
import HeaderPage from '@/components/header-page/HeaderPage.vue';
import InfoCoffee from '@/components/info-coffee/InfoCoffee.vue';
import FooterPage from '@/components/footer-page/FooterPage.vue';
import RecipeCoffee from '@/components/RecipeCoffee.vue';
import NoteCoffee from '@/components/note-coffee/NoteCoffee.vue';

export default {
  name: 'CardPage',
  components: {
    HeaderPage,
    InfoCoffee,
    RecipeCoffee,
    FooterPage,
    NoteCoffee,
  },

  computed: {
    apisMethods() {
      const components = require.context( '@/api', false, /\w*(?=\.json)/ )
      return components.keys().map(x => components(x))
    },

    currentCard() {
      let currentCard;
      
      this.apisMethods.forEach((method) => {
        if (method.name === this.$route.params.methodName) {
          currentCard = method.cards[this.$route.params.idCoffee];
        }
      });

      return currentCard;
    }
  }
}
</script>

<style lang="less" scoped>

</style>
