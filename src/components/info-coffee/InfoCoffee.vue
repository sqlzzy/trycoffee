<template>
    <section class="info-coffee">
        <p class="info-coffee__title">{{ title }}</p>
        <div class="info-coffee__info-items">
            <span v-if="time" class="info-coffee__info-item info-coffee__info-item_type_time">
                <img src="../../assets/icons/info/icon-time.svg" alt="icon-time" loading="lazy" class="info-coffee__icon info-coffee__icon_type_time">
                {{ time }}
            </span>
            <span v-if="temperature" class="info-coffee__info-item info-coffee__info-item_type_temp">
                <img src="../../assets/icons/info/icon-temp.svg" alt="icon-temp" loading="lazy" class="info-coffee__icon info-coffee__icon_type_temp">
                {{ temperature }} °C
            </span>
            <span v-if="weight" class="info-coffee__info-item info-coffee__info-item_type_weight">
                <img src="../../assets/icons/info/icon-weight.svg" alt="icon-weight" loading="lazy" class="info-coffee__icon info-coffee__icon_type_weight">
                {{ weight }} г.
            </span>
            <span v-if="capacity" class="info-coffee__info-item info-coffee__info-item_type_capacity">
                <img src="../../assets/icons/info/icon-capacity.svg" alt="icon-capacity" loading="lazy" class="info-coffee__icon info-coffee__icon_type_capacity">
                {{ capacity }} мл
            </span>
            <span v-if="ice" class="info-coffee__info-item info-coffee__info-item_type_ice">
                <img src="../../assets/icons/info/icon-ice.svg" alt="icon-ice" loading="lazy" class="info-coffee__icon info-coffee__icon_type_ice">
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
                const images = require.context('../../assets/icons/info/', false, /\.svg$/);
                return images('./icon-author-' + author_name + ".svg");
            }
        }
    };
</script>

<style src="./style.less" lang="less" scoped />
