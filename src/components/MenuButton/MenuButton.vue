<template>
    <button
        :aria-label="buttonDescription"
        class="menuButton"
        :class="{'menuButton__active' : isActive}"
        @click="isActive = !isActive"
    />
</template>

<script>
export default {
    name: "MenuButton",
    data() {
        return {
            isActive: true,
        }
    },
    computed: {
        buttonDescription() {
            return this.isActive ? 'Закрыть меню' : 'Открыть меню'
        }
    }
}
</script>

<style src="./style.less" lang="less" scoped />
