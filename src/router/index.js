import VueRouter from"vue-router"

import InitiateVote from "@/pages/InitiateVote.vue";
import VoteList from "@/pages/VoteList.vue";


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
    }
  ]
})


export default router;