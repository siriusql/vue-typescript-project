import { Options, Vue } from 'vue-class-component';

@Options({
    props:{
        msg: String
    },
    components:{}
})

export default class Main extends Vue {
    private msg: string = 'hello'
}