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
                    age:28
                },
                {
                    name:"Kyaw Kyaw",
                    sex:true,
                    age:21
                },
                {
                    name:"Si Si",
                    sex:false,
                    age:23
                },
                {
                    name:"Aye Aye",
                    sex:false,
                    age:20
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