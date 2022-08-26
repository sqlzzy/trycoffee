<template>
  <header-page :link="true"/>
  <menu-page
    :methods="apisMethods"
  />
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
import RecipeCoffee from '@/components/recipe-coffee/RecipeCoffee.vue';
import NoteCoffee from '@/components/note-coffee/NoteCoffee.vue';
import MenuPage from '@/components/menu-page/MenuPage.vue';

export default {
  name: 'CardPage',
  components: {
    HeaderPage,
    InfoCoffee,
    RecipeCoffee,
    FooterPage,
    NoteCoffee,
    MenuPage,
  },

  computed: {
    apisMethods() {
      const components = require.context( '@/api', false, /\w*(?=\.json)/ )
      return components.keys().map(x => components(x))
    },

    currentCard() {
      const currentMethod = this.apisMethods.filter(method => method.name === this.$route.params.methodName );
      const currentCard = currentMethod[0].cards[this.$route.params.idCoffee]

      return currentCard;
    }
  }
}
</script>
