<template>
    <a :href="`/card/${methodName}-${authorNameInLowerCase}-${id}`" class="card-coffee">
        <p class="card-coffee__title">{{ title }}</p>
        <div class="card-coffee__info-items">
            <span v-if="time" class="card-coffee__info-item card-coffee__info-item_type_time">
                <img src="../assets/info-icons/icon-time.svg" alt="icon-time" class="card-coffee__icon card-coffee__icon_type_time">
                {{ time }}
            </span>
            <span v-if="temperature" class="card-coffee__info-item card-coffee__info-item_type_temp">
                <img src="../assets/info-icons/icon-temp.svg" alt="icon-temp" class="card-coffee__icon card-coffee__icon_type_temp">
                {{ temperature }} °C
            </span>
            <span v-if="weight" class="card-coffee__info-item card-coffee__info-item_type_weight">
                <img src="../assets/info-icons/icon-weight.svg" alt="icon-weight" class="card-coffee__icon card-coffee__icon_type_weight">
                {{ weight }} г.
            </span>
            <span v-if="capacity" class="card-coffee__info-item card-coffee__info-item_type_capacity">
                <img src="../assets/info-icons/icon-capacity.svg" alt="icon-capacity" class="card-coffee__icon card-coffee__icon_type_capacity">
                {{ capacity }} мл
            </span>
            <span v-if="ice" class="card-coffee__info-item card-coffee__info-item_type_ice">
                <img src="../assets/info-icons/icon-ice.svg" alt="icon-ice" class="card-coffee__icon card-coffee__icon_type_ice">
                {{ ice }} г.
            </span>
        </div>
        <p class="card-coffee__author">Автор:
            <img
                v-if="existIcon"
                :src="createPathToIconAuthor(authorNameInLowerCase)"
                :alt="`icon-author-${authorNameInLowerCase}`"
                class="card-coffee__icon-author"
                :class="`card-coffee__card-coffee__icon-author_type_${authorNameInLowerCase}`"
            > 
            {{ fullAuthorName }}
        </p>
    </a>
</template>

<script>
    export default {
        name: 'CardCoffee',

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
.card-coffee {
    display: flex;
    flex-direction: column;
    padding: 25px;
    box-shadow: 0 2px 18px -14px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 10%);
    border-radius: 15px;
    margin-right: 12px;
    margin-bottom: 6px;
    text-decoration: none;
    justify-content: space-between;
    max-width: 235px;
    width: 100%;
    color: inherit;

    &:hover {
        box-shadow: 0px 0px 20px 10px rgb(0 0 0 / 20%);
    }

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