import ChildPage from '@/modules/child-page/child-page.vue';
import SidePage from '@/modules/side-page/side-page.vue';
import axios from 'axios';
import { Options, Vue } from 'vue-class-component';

@Options({
    components:{
        SidePage,
        'child-page': ChildPage
    },
    watch:{
        watchLayoutChange: (_) => {}
    },
    methods:{
        getTestMethod(){
            console.log("getTestMethod 호출 테스트");
            this.$refs.ChildPage.getChildMethod();
        },
        getMenuList(){
            axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
                console.log(res.data);
            })
        }
    }
})

export default class MainPage extends Vue {
    private msg: string = 'hello';
    public list = MENU;
    buttons = ['버튼1','버튼2','버튼3'];
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