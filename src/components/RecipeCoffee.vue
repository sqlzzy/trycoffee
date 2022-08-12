<template>
    <section class="recipe">
        <h2 class="recipe__title">Рецепт</h2>
        <div
            v-if="isRecipeTable"
            class="recipe__table-wrapper"
        >
            <table class="recipe__table">
                <thead class="recipe__table-body">
                    <tr class="recipe__table-container">
                        <td class="recipe__table-data-cell" width="200">Время</td>
                        <td class="recipe__table-data-cell" width="200">Вес</td>
                        <td class="recipe__table-data-cell" width="200">Итого</td>
                    </tr>
                </thead>
                
                <tbody
                    v-if="prewettingStages"
                    class="recipe__table-body"
                >
                    <th class="recipe__table-header-cell" colspan="3">Предсмачивание</th>
                    <tr
                        v-for="prewettingStage in prewettingStages"
                        :key="prewettingStage"
                        class="recipe__table-container"
                    >
                        <td class="recipe__table-data-cell" width="200">{{ prewettingStage.time }}</td>
                        <td class="recipe__table-data-cell" width="200">{{ prewettingStage.weight }} г.</td>
                        <td class="recipe__table-data-cell" width="200">{{ prewettingStage.total }} г.</td>
                    </tr>
                </tbody>
                <tbody
                    v-if="infusionStages"
                    class="recipe__table-body"
                >
                    <th class="recipe__table-header-cell" colspan="3">Вливания</th>
                    <tr
                        v-for="infusionStage in infusionStages"
                        :key="infusionStage"
                        class="recipe__table-container"
                    >
                        <td class="recipe__table-data-cell" width="200">{{ infusionStage.time }}</td>
                        <td class="recipe__table-data-cell" width="200">{{ infusionStage.weight }} г.</td>
                        <td class="recipe__table-data-cell" width="200">{{ infusionStage.total }} г.</td>
                    </tr>
                </tbody>
            </table>
            <p
                v-if="extractionTime"
                class="recipe__extraction-time"
            >
                Общее время экстракции <span class="recipe__extraction-time-value">{{ extractionTime }}</span>
            </p>
        </div>
        <div v-if="isRecipeText">
            <div 
                v-if="ingredientsList"
                class="recipe__ingredients-list"
            >
                <h3 class="recipe__subtitle">Ингредиенты:</h3>
                <div
                    v-for="(ingredients, index) in ingredientsList"
                    :key="ingredients"
                    :class="{ 'recipe__ingredients' : (isObjectList(ingredientsList) && isObjectList(preparationStages)) }"
                >
                    <div v-if="isObjectList(ingredientsList) && isObjectList(preparationStages)">
                        <p class="recipe__subtitle recipe__subtitle_type_stage">Этап {{ index }}</p>
                        <p
                            v-for="(ingredient) in ingredients"
                            :key="ingredient"
                            class="recipe__text recipe__text_type_ingredient"
                        >
                            – {{ ingredient }}
                        </p>
                    </div>
                    <p
                        v-else
                        class="recipe__text recipe__text_type_ingredient"
                    >
                        – {{ ingredients }}
                    </p>
                </div>
            </div>

            <div class="recipe__preparation-stages" v-if="preparationStages">
                <h3 class="recipe__subtitle">Приготовление:</h3>
                <div
                    v-for="(preparationStage, index) in preparationStages"
                    :key="preparationStage"
                    :class="{ 'recipe__preparation-stage' : (isObjectList(ingredientsList) && isObjectList(preparationStages)) }"
                >
                    <div v-if="isObjectList(ingredientsList) && isObjectList(preparationStages)">
                        <p class="recipe__subtitle recipe__subtitle_type_stage">Этап {{ index }}</p>
                        <p
                            v-for="(preparation, index) in preparationStage"
                            :key="preparation"
                            class="recipe__text"
                        >
                            {{ index + 1 }}. {{ preparation }}
                        </p>
                    </div>
                    <p v-else class="recipe__text">{{ index + 1 }}. {{ preparationStage }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'RecipeCoffee',

        props: {
            isRecipeTable : Boolean,
            isRecipeText  : Boolean,
            prewettingStages : Array,
            infusionStages : Array,
            preparationStages : Object,
            ingredientsList : Object,
            extractionTime : String,
        },

        methods: {
            isObjectList(item) {
                return (typeof item === "object" && !Array.isArray(item) && item !== null);
            }
        }
    };
</script>

<style lang="less" scoped>
    .recipe {
        display: flex;
        flex-direction: column;
        width: calc(100% - 25px);
        margin: 18px 0;
        padding: 15px;
        box-shadow: 0px 2px 2px 0px rgb(0 0 0 / 5%);
        border-radius: 5px;

        &__title {
            font-size: x-large;
            font-weight: bold;
            margin: 0 0 18px;
        }

        &__subtitle {
            font-size: large;
            font-weight: bold;
            margin: 0 0 12px;

            &_type_stage {
                font-style: italic;
            }
        }

        &__ingredients {
            margin-bottom: 24px;
        }

        &__preparation-stage {
            margin-bottom: 24px;
        }

        &__text {
            margin: 0 0 12px;

            &_type_ingredient {
                margin: 0 0 6px;
            }
        }

        &__table {
            font-size: large;
        }

        &__table-container {
            height: 42px;
        }

        &__table-header-cell {
            font-weight: bold;
            height: 36px;
            text-align: left;
        }

        &__extraction-time {
            margin-top: 12px;
            font-size: large;
        }

        &__extraction-time-value {
            font-weight: bold;
        }
    }
</style>