import { Options, Vue } from 'vue-class-component';

@Options({
    props:{
        msg: String
    },
    components:{},
    methods:{
        getChildMethod(){
            console.log("getChildMethod 호출 테스트");
        }
    }
})

export default class ChildPage extends Vue {
    
}