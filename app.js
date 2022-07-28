// create vue app
const app =Vue.createApp({
    // template:"<h1>I am Learning Vue3</h1>",// using template
    data() {
        // data injection 
        return {
            name:"Phyo Si Thu Or Phyo Zay Yyar",
            sex:false,
            age:28,
            showInfo:true
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