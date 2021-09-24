import { createRouter,createWebHashHistory } from "vue-router";


const routes = [
    {
        name:"HomePage",
        path:"/",
        component:()=>import("@/views/Home")
    },
    {
        name:"AddPage",
        path:"/add",
        component:()=>import("@/views/Add")
    },
    {
        name:"ListPage",
        path:"/list",
        component:()=>import("@/views/List")
    },
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
    
});

export default router;