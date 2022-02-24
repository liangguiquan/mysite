<template>
    <div class="test-container">
        <Contact />

    </div>
</template>

<script>
import Contact from './index'
import '@/styles/global.less'
export default {
    components: {
        Contact,
    }

}
</script>


<style scoped lang="less">
    .test-container {
        width: 400px;
        height: 600px;
        border: 1px solid #12d6bc;
        margin: 0 auto;
        padding-top: 250px;
        background-color: #000;
    }
</style>

