<template>
    <section class="info-coffee">
        <p class="info-coffee__title">{{ title }}</p>
        <div class="info-coffee__info-items">
            <span v-if="time" class="info-coffee__info-item info-coffee__info-item_type_time">
                <img src="../assets/info-icons/icon-time.svg" alt="icon-time" class="info-coffee__icon info-coffee__icon_type_time">
                {{ time }}
            </span>
            <span v-if="temperature" class="info-coffee__info-item info-coffee__info-item_type_temp">
                <img src="../assets/info-icons/icon-temp.svg" alt="icon-temp" class="info-coffee__icon info-coffee__icon_type_temp">
                {{ temperature }} °C
            </span>
            <span v-if="weight" class="info-coffee__info-item info-coffee__info-item_type_weight">
                <img src="../assets/info-icons/icon-weight.svg" alt="icon-weight" class="info-coffee__icon info-coffee__icon_type_weight">
                {{ weight }} г.
            </span>
            <span v-if="capacity" class="info-coffee__info-item info-coffee__info-item_type_capacity">
                <img src="../assets/info-icons/icon-capacity.svg" alt="icon-capacity" class="info-coffee__icon info-coffee__icon_type_capacity">
                {{ capacity }} мл
            </span>
            <span v-if="ice" class="info-coffee__info-item info-coffee__info-item_type_ice">
                <img src="../assets/info-icons/icon-ice.svg" alt="icon-ice" class="info-coffee__icon info-coffee__icon_type_ice">
                {{ ice }} г.
            </span>
        </div>

        <p class="info-coffee__author">Автор:
            <img
                v-if="existIcon"
                :src="createPathToIconAuthor(authorNameInLowerCase)"
                :alt="`icon-author-${authorNameInLowerCase}`"
                class="info-coffee__icon-author"
                :class="`info-coffee__info-coffee__icon-author_type_${authorNameInLowerCase}`"
            > 
            {{ fullAuthorName }}
        </p>
    </section>
</template>

<script>
    export default {
        name: 'InfoCoffee',

        props: {
            title       : String,
            time        : String,
            temperature : Number,
            author      : String,
            weight      : Number,
            ice         : Number,
            id          : Number,
            capacity    : Number,
            methodName  : String,
            barista     : String,
            existIcon   : Boolean,
        },

        computed: {
            authorNameWithoutSpaces() {
                return this.author.replace(/\s+/g, '');
            },

            authorNameInLowerCase() {
                return this.authorNameWithoutSpaces.toLowerCase();
            },

            fullAuthorName() {
                return this.barista ? `${this.author} (${this.barista})` : this.author;
            }
        },

        methods: {
            createPathToIconAuthor(author_name) {
                const images = require.context('../assets/info-icons/', false, /\.svg$/);
                return images('./icon-author-' + author_name + ".svg");
            }
        }
    };
</script>

<style lang="less" scoped>
.info-coffee {
    display: flex;
    flex-direction: column;
    padding: 15px;
    box-shadow: 0px 2px 2px 0px rgb(0 0 0 / 5%);
    border-radius: 5px;
    margin-bottom: 6px;
    text-decoration: none;
    width: calc(100% - 25px);
    color: inherit;

    &__title {
        font-weight: bold;
        margin: 0 0 18px;
    }

    &__info-items {
        display: inline-flex;
        flex-wrap: wrap;
        margin-bottom: 12px;
    }

    &__info-item {
        display: flex;
        align-items: center;
        margin-right: 12px;
        max-width: 90px;
        width: 100%;
        margin-bottom: 6px;
    }

    &__icon {
        position: relative;
        bottom: 2px;
        margin-right: 6px;

        &_type_weight {
            margin-right: 3px;
        }
    }

    &__author {
        display: flex;
        align-items: center;
        margin: 0;
    }

    &__icon-author {
        width: 25px;
        height: 25px;
        margin-right: 4px;
        margin-left: 6px;
    }
}
</style>