import TabsView from '@/layouts/tabs/TabsView'
import BlankView from '@/layouts/BlankView'
// import PageView from '@/layouts/PageView'

// 路由配置
const options = {
  routes: [
    {
      path: '/login',
      name: '登录页',
      component: () => import('@/pages/login')
    },
    {
      path: '*',
      name: '404',
      component: () => import('@/pages/exception/404'),
    },
    {
      path: '/403',
      name: '403',
      component: () => import('@/pages/exception/403'),
    },
    {
      path: '/',
      name: '首页',
      component: TabsView,
      redirect: '/login',
      children: [
        // {
        //   path: 'demo',
        //   name: '演示页',
        //   meta: {
        //     icon: 'file-ppt'
        //   },
        //   component: () => import('@/pages/demo')
        // },
        // {
        //   path: 'parent1',
        //   name: '父级路由1',
        //   meta: {
        //     icon: 'dashboard',
        //   },
        //   component: BlankView,
        //   children: [
        //     {
        //       path: 'demo1',
        //       name: '演示页面1',
        //       component: () => import('@/pages/demo'),
        //     }
        //   ]
        // },
        // {
        //   path: 'parent2',
        //   name: '父级路由2',
        //   meta: {
        //     icon: 'form'
        //   },
        //   component: PageView,
        //   children: [
        //     {
        //       path: 'demo2',
        //       name: '演示页面2',
        //       component: () => import('@/pages/demo'),
        //     }
        //   ]
        // },
        // {
        //   path: 'exception',
        //   name: '异常页',
        //   meta: {
        //     icon: 'warning',
        //   },
        //   component: BlankView,
        //   children: [
        //     {
        //       path: '404',
        //       name: 'Exp404',
        //       component: () => import('@/pages/exception/404')
        //     },
        //     {
        //       path: '403',
        //       name: 'Exp403',
        //       component: () => import('@/pages/exception/403')
        //     },
        //     {
        //       path: '500',
        //       name: 'Exp500',
        //       component: () => import('@/pages/exception/500')
        //     }
        //   ]
        // },
        {
          path: 'demo',
          name: '起始页',
          meta: {
            icon: 'file-ppt'
          },
          component: () => import('@/pages/demo')
        },
        {
          path: 'CardProductSupplyChain',
          name: '卡产品供应链',
          meta: {
            icon: 'credit-card',
          },
          component: BlankView,
          children: [
            // {
            //   path: '404',
            //   name: 'Exp404',
            //   component: () => import('@/pages/exception/404')
            // },
            // {
            //   path: '403',
            //   name: 'Exp403',
            //   component: () => import('@/pages/exception/403')
            // },
            // {
            //   path: '500',
            //   name: 'Exp500',
            //   component: () => import('@/pages/exception/500')
            // },
            {
              path: 'publishView',
              name: '发行展示',
              component: () => import('@/pages/CardProductSupplyChain/publishView/publishView')
            },
            {
              path: 'publishPreparation',
              name: '发行准备',
              component: () => import('@/pages/CardProductSupplyChain/publishPreparation/publishPreparation')
            },
            {
              path: 'publishChange',
              name: '发行变更',
              component: () => import('@/pages/CardProductSupplyChain/publishChange/publishChange')
            },
            {
              path: 'inventoryManagement',
              name: '库存管理',
              component: BlankView,
              children: [
                {
                  path: 'cardOrder',
                  name: '卡基订购',
                  component: () => import('@/pages/CardProductSupplyChain/inventoryManagement/cardOrder')
                },
                {
                  path: 'cardCraft',
                  name: '卡基工艺',
                  component: () => import('@/pages/CardProductSupplyChain/inventoryManagement/cardCraft')
                },
                {
                  path: 'cardOut',
                  name: '卡基出库',
                  component: () => import('@/pages/CardProductSupplyChain/inventoryManagement/cardOut')
                },
                {
                  path: 'cardDestroy',
                  name: '卡基销毁',
                  component: () => import('@/pages/CardProductSupplyChain/inventoryManagement/cardDestroy')
                },
                {
                  path: 'changeApproval',
                  name: '变更审核',
                  component: () => import('@/pages/CardProductSupplyChain/inventoryManagement/changeApproval')
                },
                {
                  path: 'overstockWarning',
                  name: '积压提醒',
                  component: () => import('@/pages/CardProductSupplyChain/inventoryManagement/overstockWarning')
                },
                {
                  path: 'additionalWarning',
                  name: '增订提醒',
                  component: () => import('@/pages/CardProductSupplyChain/inventoryManagement/additionalWarning')
                },
              ]
              // component: () => import('@/pages/CardProductSupplyChain/inventoryManagement/inventoryManagement')
            },
            {
              path: 'dailyManagement',
              name: '日常管理',
              component: () => import('@/pages/CardProductSupplyChain/dailyManagement/dailyManagement')
            },
            {
              path: 'costSettlement',
              name: '费用结算',
              component: () => import('@/pages/CardProductSupplyChain/costSettlement/costSettlement')
            }
          ]
        },
        {
          name: '验权页面',
          path: 'auth/demo',
          meta: {
            icon: 'file-ppt',
            authority: {
              permission: 'form',
              role: 'manager'
            },
            component: () => import('@/pages/demo')
          }
        }
      ]
    }
  ]
}

export default options
