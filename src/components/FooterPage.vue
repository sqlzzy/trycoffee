<template>
    <footer class="footer">
        <p class="footer__text">2022-...</p>
    </footer>
</template>

<script>
export default {
  name: 'FooterPage',
}
</script>

<style lang="less" scoped>
.footer {
    position: relative;
    bottom: 0;
    padding: 12px;

    &__text {
        font-family: 'Montserrat', Arial, Helvetica, sans-serif;
        text-align: center;
        color: #2c3e50;
    }
}

</style>