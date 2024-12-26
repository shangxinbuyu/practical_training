import VueRouter from"vue-router"

import InitiateVote from "@/pages/InitiateVote.vue";
import VoteList from "@/pages/VoteList.vue";
import StudentLogin from '@/pages/StudentLogin.vue'
import AdminLogin from '@/pages/AdminLogin.vue'
import RegisterLogin from '@/pages/RegisterLogin.vue'


const router = new VueRouter({
  mode: "history",
  routes:[//InitiateVote
    {
      path:"/InitiateVote",
      component:InitiateVote,
    },
    {
      path:"/VoteList",
      component:VoteList,
    },
    { path: '/', component: StudentLogin },
    { path: '/studentlogin', component: StudentLogin },
    { path: '/adminlogin', component: AdminLogin },
    { path: '/registerlogin', component: RegisterLogin }
  ]
})


export default router;