<template>
    <div class="container">
        <app-header></app-header>
        <app-table></app-table>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from './components/header/Header.vue';
    import Footer from './components/header/Footer.vue';
    import Table from './components/table/Table.vue';
    export default {
        data(){
            return{
            }
        },
        components: {
            appHeader: Header,
            appFooter: Footer,
            appTable: Table
        }
    }
</script>

<style>
</style>
