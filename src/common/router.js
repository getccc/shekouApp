export const routerConfig = {
  "/": {
    models: ["layout"],
    router: () => import('../layouts/BasicLayout')
  },
  "/zntj": {
    props: { title: "智能统计", root: true },
    models: ["zntj"],
    router: () => import('../routes/zntj/App')
  },
  "/zntj_bgdlqk": {
    props: { title: "报关单量情况" },
    models: ["bgdlqk"],
    router: () => import('../routes/zntj/Bgdlqk')   
  },
  "/zntj_zsskqk": {
    props: { title: "征收税款情况" },
    models: ["zsskqk"],
    router: () => import('../routes/zntj/Zsskqk')   
  },
  "/zntj_mtcb": {
    props: { title: "码头船舶情况" },
    models: ["mtcbqk"],
    router: () => import('../routes/zntj/Mtcb')   
  },
  "/zntj_cbsbqk": {
    props: { title: "船舶申报情况" },
    models: ["cbsbqk"],
    router: () => import('../routes/zntj/Cbsbqk')   
  },
  "/zntj_tdsbqk": {
    props: { title: "提单申报情况" },
    models: ["tdsbqk"],
    router: () => import('../routes/zntj/Tdsbqk')   
  },
  "/zntj_mtjzx": {
    props: { title: "码头集装箱情况" },
    models: ["mtjzxxq"],
    router: () => import('../routes/zntj/Mtjzx')   
  },
  "/zncx": {
    props: { title: "智能查询", root: true },
    models: ["zncx"],
    router: () => import('../routes/zncx/App')
 
  },
  "/zncx_xx/:lx/:id": {
    props: { title: "智能查询详情"},
    models: ["xxinfo"],
    router: () => import('../routes/zncx/Xxinfo')  
  },
  "/spjk": {
    props: { title: "视频监控", root: true },
    models: ["spjk"],
    router: () => import('../routes/spjk/App')
 
  }
};