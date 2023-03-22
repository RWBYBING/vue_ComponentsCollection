import axios from "axios";

const FileManager = {
    //post文件夹路径
    path:process.env.BASE_URL + "post/",
    //获取所有主题栏目
    getAllTopic: function(){
        return ["M30D mini", "M30C"]
    },
    //获取某个主题下的全部资料
    getPost: function(topic){
        switch(topic){
            case 0:
                return ["M30D mini资料1","M30D mini资料2"];
            case 1:
                return ["M30C资料1","M30C资料2"];
        }
    },
    //获取某个文章的详细内容
    getPostContent: function(topicName, postName){
        let url = this.path + topicName + '/' + postName + '.md';
        return new Promise((res, rej) => {
            axios.get(url).then((response) => {
                console.log(response)
            },rej)
        })
    }
}
export default FileManager

