<template>
    <header-page :link="true"/>
    <main class="content">
        hello
    </main>
    <footer-page />
</template>

<script>
import HeaderPage from '@/components/header-page/HeaderPage.vue';
import FooterPage from '@/components/footer-page/FooterPage.vue';

export default {
    name: "AboutPage",
    components: {
        HeaderPage,
        FooterPage,
    },
    computed: {}
}

</script>
