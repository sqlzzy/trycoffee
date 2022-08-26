<template>
    <nav class="menu">
        <div class="menu__container">
            <a
                v-for="(key, value) in objectMenuItems"
                :key="value"
                :href="urlOrIdlinkMenuItem( value )"
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
    methods : Array,
    isIdLinkMethod : Boolean,
  },

  methods: {
    linkMenuItem( nameMenuItem ) {
        let urlMenuItem = nameMenuItem === 'home' ? '/' : `/method/${nameMenuItem}`;
        return urlMenuItem;
    },

    urlOrIdlinkMenuItem( nameMenuItem ) {
        console.log(nameMenuItem, 'urlOrIdlinkMenuItem')
        let structureLinkMenuItem = this.isIdLinkMethod ? `#${nameMenuItem}` : this.linkMenuItem( nameMenuItem );
        console.log(structureLinkMenuItem, 'structureLinkMenuItem')
        return structureLinkMenuItem;
    }
  },
  
  computed: {
    objectMenuItems() {
        const objectMenuItems = {};

        if(document.location.pathname !== '/') {
            objectMenuItems['home'] = 'Главная';
        }

        this.methods.forEach( method => {
            objectMenuItems[method.name] = method.name_ru;
        } );

        return objectMenuItems;
    },
  }
}
</script>

<style src="./style.less" lang="less" scoped />
