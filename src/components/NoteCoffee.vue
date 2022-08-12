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

<style lang="less" scoped>
.note-coffee {
    width: calc(100% - 25px);
    padding: 15px;
    border-radius: 5px;
    background-color: #00000505;

    &__title {
        font-size: x-large;
        font-weight: bold;
        margin: 0 0 18px;
    }

    &__text {
        margin-bottom: 36px;
    }

    &__link {
        color: #0000FF;
        text-decoration: underline;
    }
}
</style>