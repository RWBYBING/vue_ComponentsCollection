<!-- 此组件通过外部传入的items属性来进行导航元素的布局 -->
<template>
    <el-container style="margin:0; padding: 0;">
        <el-header style="margin: 0; padding: 0;">
            <div id="title">Header</div>
        </el-header>
        <el-main style="margin: 0; padding: 0;">
            <el-menu 
                mode="horizontal"
                background-color="#ffffff"
                text-color="#bbbbbb"
                active-text-color="#000000"
                :default-active="0"
                @select="selectItem">
                <!-- 将父组件传输来的navItems依次渲染到导航栏 -->
                <el-menu-item
                    v-for="item in items"
                    :index="item.index"
                    :key="item.index">
                    <div id="text">{{ item.title }}</div>
                </el-menu-item>
                <!-- TODO:搜索栏 -->
            </el-menu>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        //从父组件Home接收items
        props: ["items"],
        methods: {
            //向父组件传递名称位selected的事件，参数为index
            selectItem(index){
                this.$emit('selected', index)
            }
        }
    };
</script>

<style scoped>
#title {
    color: black;
    font-size: 40px;
    font-weight: bold;
    font-family: Georgia, 'Times New Roman', Times, serif;
    text-align: left;
}
#text {
    font-size: 20px;
}
</style>