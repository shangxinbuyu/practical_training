import VueRouter from "vue-router"
import Login from "@/components/Login.vue";
import StudentLogin from "@/pages/StudentLogin.vue";
import AdminLogin from "@/pages/AdminLogin.vue";
import RegisterLogin from "@/pages/RegisterLogin.vue";
import VotingSystem from "@/components/VotingSystem.vue";
import InitiateVote from "@/pages/InitiateVote.vue";
import VoteList from "@/pages/VoteList.vue";


const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Login,
      redirect: "/StudentLogin",
      children: [
        {
          path: "StudentLogin",
          name: "StudentLogin",
          component: StudentLogin
        },
        {
          path: "AdminLogin",
          name: "AdminLogin",
          component: AdminLogin
        },
        {
          path: "RegisterLogin",
          name: "RegisterLogin",
          component: RegisterLogin
        }
      ]
    },
    {
      path: "/VotingSystem",
      name: "VotingSystem",
      component: VotingSystem,
      children: [
        {
          path: "InitiateVote",
          name: "InitiateVote",
          component: InitiateVote
        },
        {
          path: "VoteList",
          name: "VoteList",
          component: VoteList
        }
      ]
    }
  ]
})


export default router;