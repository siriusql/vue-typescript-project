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

export const MENU = [    
    {
        name: '홈',
        path: '/'
    },
    {
        name: '메뉴1',
        path: '/menu1'
    },
    {
        name: '메뉴2',
        path: '/menu2'
    },
    {
        name: '메뉴3',
        path: '/menu3'
    }
]