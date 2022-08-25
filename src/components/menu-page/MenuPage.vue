<template>
    <nav class="menu">
        <div class="menu__container">
            <a
                v-for="(key, value) in objectMenuItems"
                :key="value"
                :href="`/method/${value}`"
                class="menu__item"
                :name-menu-item="value"
            >
                {{ key }}
            </a>
        </div>   
    </nav>
</template>

<script>
export default {
  name: 'MenuPage',

  props: {
    link : Boolean,
    methods : Array
  },
  
  computed: {
    objectMenuItems() {
        const objectMenuItems = {};

        objectMenuItems['home'] = 'Главная';

        this.methods.forEach( method => {
            objectMenuItems[method.name] = method.name_ru;
        } );

        return objectMenuItems;
    },
  }
}
</script>

<style src="./style.less" lang="less" scoped />
