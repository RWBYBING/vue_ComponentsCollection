<!-- 组装Header和Body组件 -->
<template>
    <el-container id="container">
        <el-header style="width: 100%" height="120px">
            <!-- 触发selected事件时调用changeSelected方法 -->
            <Header v-if="navItems.length > 0" :items="navItems" v-on:selected="changeSelected"></Header>
        </el-header>
        <el-main>
            <Body v-if="navItems.length > 0" :items="bodyItems" :topic="navItems[currentTopicIndex].title"></Body>
        </el-main>
    </el-container>
</template>

<script>
    import Header from "./Header.vue";
    import Body from "./Body.vue";
    import FM from "../tools/FileManager.js"

    export default {
        //为了保证导航栏在数据加载完毕之后再加载，在模板中加入一层v-if逻辑
        async mounted(){
            try {
                const data = await FM.getAllTopic();
                this.navItems = data.map((item, ind) => ({ index: ind, title: item }));
            }   
            catch (error) {
                console.error(error);
            }
        },
        components: {
            Header: Header,
            Body: Body,
        },
        data() {
            return {
                navItems: [],
                currentTopicIndex:0
            };
        },
        methods: {
            changeSelected(index){
                this.currentTopicIndex = index
            }
        },
        //实时更新现在页面渲染的是哪一个雷达下的资料
        computed: {
            bodyItems(){
                return FM.getPost(this.currentTopicIndex).map((item,ind)=>{
                    return {
                        index:ind,
                        title:item
                    }
                })
            }
        }
    };

</script>

<style scoped>
    #container {
        margin-left: 2%;
        margin-right: 2%;
        margin-top: 30px;
        height: 800px;
    }
</style>