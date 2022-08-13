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
        clickFav(person){
            // console.log(person)
            person.isFav = !person.isFav;
        }
    },
    computed:{
        // computed property က ကျနော်တို့ရဲ့ data နဲ့ တွဲသုံးတာပါ။ အပေါ်က data array ကို အသုံးချပြီးတော့ data ကို ထိခိုက်မရှိပဲ နောက်ထပ် data array တစ်ခုကို ဖန်တီးတာပါ။ အခုက ကျနော်တို့က ကိုကြိုက်တဲ့ person ကိုပဲ သီးသန့် ပြချင်တာပါ။
        filterFavPerson(){
            return this.people.filter(person=>{
                return person.isFav===true;
            });
        }
    }
});


app.mount("#app"); //vue control the div tag that called app