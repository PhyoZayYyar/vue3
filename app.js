// create vue app
const app =Vue.createApp({
    // template:"<h1>I am Learning Vue3</h1>",// using template
    data() {
        // data injection 
        return {
            people:[
                {
                    name:"Phyo Si Thu Or Phyo Zay Yyar",
                    sex:false,
                    age:28,
                    image:'images/1.png',
                    isFav:true
                },
                {
                    name:"Kyaw Kyaw",
                    sex:true,
                    age:21,
                    image:'images/2.jpeg',
                    isFav:false
                },
                {
                    name:"Si Si",
                    sex:false,
                    age:23,
                    image:'images/3.jpeg',
                    isFav:true
                },
                {
                    name:"Aye Aye",
                    sex:false,
                    age:20,
                    image:'images/4.png',
                    isFav:true
                }
            ],
            showInfo:true,
            link:"http://www.google.com"
        }
    },
    methods:{
        mouseoverHandler(event,data){
            console.log("Mouse Over is Working!", event.type, data);
        },
        mouseleaveHandler(event){
            console.log("Mouse is leaving", event.type)
        },
        dblclickHandler(event){
            console.log("Doubld Click is working", event.type)
        }
    }
});


app.mount("#app"); //vue control the div tag that called app