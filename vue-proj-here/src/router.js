import {createWebHistory, createRouter} from "vue-router";
import About from '@/components/About.vue';
import GuessingGame from '@/components/GuessingGame.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', alias: '/About', name: 'About', component: About, props: true},
        {path: '/GuessingGame', name:'GuessingGame', component: GuessingGame}
    ]
});

export default router;