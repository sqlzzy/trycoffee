<template>
    <nav class="menu">
        <div class="menu__container">
            <a
                v-for="(key, value) in objectMenuItems"
                :key="value"
                :href="urlOrIdlinkMenuItem( value )"
                class="menu__item"
                :class="{ 'menu__item_type_active' : makeActiveMenuItem( value ) }"
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
    methods : Array,
    isIdLinkMethod : Boolean,
  },

  methods: {
    linkMenuItem( nameMenuItem ) {
        let urlMenuItem = nameMenuItem === 'home' ? '/' : `/method/${nameMenuItem}`;
        return urlMenuItem;
    },

    urlOrIdlinkMenuItem( nameMenuItem ) {
        let structureLinkMenuItem = this.isIdLinkMethod ? `#${nameMenuItem}` : this.linkMenuItem( nameMenuItem );
        return structureLinkMenuItem;
    },

    makeActiveMenuItem(nameMenuItem) {
        const currentPathname = document.location.pathname;
        let currentNameMenuItem;

        if (currentPathname === `/method/${nameMenuItem}`) {
            currentNameMenuItem = currentPathname.match(/(?<=\/method\/).+/gi)[0];
        } else if (currentPathname === `/`) {
            currentNameMenuItem = 'home';
        }

        return currentNameMenuItem === nameMenuItem;
    }
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
