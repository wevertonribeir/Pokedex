<template>
    <div class="filters">
        <div class="menu">Menu</div>
        <div class="search">
            <input type="text" placeholder="Search">
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .filters{
        display: flex;
        justify-content: space-between;
        padding: 15px;
        border-radius: 25px;
        height: 80px;
        align-items: center;
        margin: 50px 0;
        background: #F5F6F7;
        border: solid 1px rgba(112,112,112, 14%);
        box-shadow: 0 0 3px rgba(0,0,0,.1);
    }
    .filters .search input{
        height: 45px;
        border-radius: 20px;
        border: navajowhite;
        outline: 0;
        padding: 0 20px;
    }
</style>