<template>
    <div class="menu-wrapper" :class="{ visible }">
        <div class="menu-cover" @click=toggleMenu() />
        <div class="menu" :class="{ 'is-header': header, 'is-left': left, 'is-right': right }">
            <slot />
        </div>
    </div>
</template>
<script>
    export default {
        props: [
            'type',

            'header',
            'left',
            'right'
        ],
        data() {
            return {
                visible: false
            }
        },
        methods: {
            toggleMenu() {
                this.visible = !this.visible
            }
        }
    }
</script>
