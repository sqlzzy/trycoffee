<template>
    <nav class="menu">
        <div class="menu__container">
            <a
                v-for="(key, value) in objectMenuItems"
                :key="value"
                :href="[ isHomeMenuItem( value ) ? '/' : `/method/${value}` ]"
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

    isHomeMenuItem( nameMenuItem ) {
        return nameMenuItem === 'home';
    }
  }
}
</script>

<style src="./style.less" lang="less" scoped />
