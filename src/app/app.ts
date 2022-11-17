import { Options, Vue } from 'vue-class-component';

@Options({
    watch:{
        currentWindowSize: (value) =>{
            console.log("app 실행");
        }
    }
})

export default class App extends Vue {

}