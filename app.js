// create vue app
const app =Vue.createApp({
    // template:"<h1>I am Learning Vue3</h1>",// using template
    data() {
        return {
            name:"Phyo Si Thu Or Phyo Zay Yyar",
            sex:false,
            age:28
        }
    }
});


app.mount("#app"); //vue control the div tag that called app