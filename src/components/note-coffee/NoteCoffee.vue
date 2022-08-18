<template>
    <section
        v-if="noteText || noteLink"
        class="note-coffee"
    >
        <p class="note-coffee__title">
            Примечание
        </p>
        <p
            v-if="noteText"
            class="note-coffee__text"
        >
            {{ noteText }}
        </p>
        <a
            v-if="noteLink"
            :href="noteLink"
            class="note-coffee__link"
        >
            Источник
        </a>
    </section>
</template>

<script> 
    export default {
        name: 'NoteCoffee',

        props: {
            noteText : String,
            noteLink : String,
        },
    };
</script>

<style src="./style.less" lang="less" scoped />
