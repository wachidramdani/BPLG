export default {
  items: [
    {
      title: true,
      name: 'Home',
      wrapper: {            
        element: '',        
        attributes: {}        
      },
      class: ''
    },
    {
      name: 'Main Menu',
      url: '/home',
      icon: 'icon-home2',
      // badge: {
      //   variant: 'info',
      //   text: 'NEW',
      // },
    },
    {
      title: true,
      name: 'Transaction',
      wrapper: {            
        element: '',        
        attributes: {}        
      },
      class: ''
    },
    {
      name: 'HR',
      url: '#',
      icon: 'icon-man-woman',
    },
    {
      name: 'F&A',
      url: '#',
      icon: 'icon-calculator2',
    },
    {
      name: 'Purchasing',
      url: '#',
      icon: 'icon-cart4',
    },
    {
      name: 'HSE',
      url: '#',
      icon: 'icon-shield2',
    },
    {
      name: 'Dashboard',
      url: '#',
      icon: 'icon-chart',
    },
    {
      name: 'Asset Management',
      url: '#',
      icon: 'icon-price-tags',
    },
    {
      name: 'Planner',
      url: '#',
      icon: 'icon-presentation',
      children: [
        {
          name: 'Check Resource',
          url: '/planner',
          icon: 'icon-truck',
        },
        {
          name: 'Truck Monitoring',
          url: '#',
          icon: 'icon-display',
        },
        {
          name: 'Truck Tracking',
          url: '#',
          icon: 'icon-location4',
        },
        {
          name: 'Dashboard',
          url: '#',
          icon: 'icon-chart',
        },
      ]
    },
    {
      name: 'Customer Center',
      url: '#',
      icon: 'icon-phone-wave',
    },
    {
      name: 'Sales & Marketing',
      url: '#',
      icon: 'icon-puzzle3',
    },
    {
      name: 'IT',
      url: '#',
      icon: 'icon-lan',
    },
    {
      name: 'Resources Management',
      url: '#',
      icon: 'icon-magic-wand',
    },
    {
      name: 'Coordinator',
      url: '#',
      icon: 'icon-mobile3',
    },
    {
      name: 'Cashier',
      url: '#',
      icon: 'icon-printer2',
    },
    {
      name: 'Security',
      url: '#',
      icon: 'icon-balance',
    },
    {
      name: 'Maintenance / Workshop',
      url: '#',
      icon: 'icon-hammer-wrench',
    },
    {
      name: 'HR BPK',
      url: '#',
      icon: 'icon-man-woman',
    },
    {
      title: true,
      name: 'Administration',
      wrapper: {            
        element: '',        
        attributes: {}        
      },
      class: ''
    },
    {
      name: 'Master Data',
      url: '/master',
      icon: 'icon-database',
      children: [
        {
          name: 'Truck',
          url: '#',
          icon: 'icon-truck',
        },
        {
          name: 'Customer',
          url: '#',
          icon: 'icon-store',
        },
        {
          name: 'Job Type',
          url: '#',
          icon: 'icon-stars',
        },
        {
          name: 'User',
          url: '/master/user',
          icon: 'icon-users2',
        },
        {
          name: 'Menu',
          url: '/master/menu',
          icon: 'icon-stack',
        },
      ]
    },
    {
      name: 'User Management',
      url: '#',
      icon: 'icon-users4',
      children: [
        {
          name: 'User Name',
          url: '#',
          icon: 'icon-accessibility',
        },
        {
          name: 'Organization Type',
          url: '#',
          icon: 'icon-crown',
        },
      ]
    }
    
    // {
    //   name: 'Base',
    //   url: '/base',
    //   icon: 'icon-puzzle',
    //   children: [
    //     {
    //       name: 'Breadcrumbs',
    //       url: '/base/breadcrumbs',
    //       icon: 'icon-puzzle',
    //     },
    //     {
    //       name: 'Cards',
    //       url: '/base/cards',
    //       icon: 'icon-puzzle',
    //     },
    //     {
    //       name: 'Carousels',
    //       url: '/base/carousels',
    //       icon: 'icon-puzzle',
    //     },
    //     {
    //       name: 'Collapses',
    //       url: '/base/collapses',
    //       icon: 'icon-puzzle',
    //     },
    //     {
    //       name: 'Dropdowns',
    //       url: '/base/dropdowns',
    //       icon: 'icon-puzzle',
    //     },
    //     {
    //       name: 'Forms',
    //       url: '/base/forms',
    //       icon: 'icon-puzzle',
    //     },
    //     {
    //       name: 'Jumbotrons',
    //       url: '/base/jumbotrons',
    //       icon: 'icon-puzzle',
    //     },
    //     {
    //       name: 'List groups',
    //       url: '/base/list-groups',
    //       icon: 'icon-puzzle',
    //     },
    //     {
    //       name: 'Navs',
    //       url: '/base/navs',
    //       icon: 'icon-puzzle',
    //     },
    //     {
    //       name: 'Paginations',
    //       url: '/base/paginations',
    //       icon: 'icon-puzzle',
    //     },
    //     {
    //       name: 'Popovers',
    //       url: '/base/popovers',
    //       icon: 'icon-puzzle',
    //     },
    //     {
    //       name: 'Progress Bar',
    //       url: '/base/progress-bar',
    //       icon: 'icon-puzzle',
    //     },
    //     {
    //       name: 'Switches',
    //       url: '/base/switches',
    //       icon: 'icon-puzzle',
    //     },
    //     {
    //       name: 'Tables',
    //       url: '/base/tables',
    //       icon: 'icon-puzzle',
    //     },
    //     {
    //       name: 'Tabs',
    //       url: '/base/tabs',
    //       icon: 'icon-puzzle',
    //     },
    //     {
    //       name: 'Tooltips',
    //       url: '/base/tooltips',
    //       icon: 'icon-puzzle',
    //     },
    //   ],
    // },
    // {
    //   name: 'Buttons',
    //   url: '/buttons',
    //   icon: 'icon-cursor',
    //   children: [
    //     {
    //       name: 'Buttons',
    //       url: '/buttons/buttons',
    //       icon: 'icon-cursor',
    //     },
    //     {
    //       name: 'Button dropdowns',
    //       url: '/buttons/button-dropdowns',
    //       icon: 'icon-cursor',
    //     },
    //     {
    //       name: 'Button groups',
    //       url: '/buttons/button-groups',
    //       icon: 'icon-cursor',
    //     },
    //     {
    //       name: 'Brand Buttons',
    //       url: '/buttons/brand-buttons',
    //       icon: 'icon-cursor',
    //     },
    //   ],
    // },
    // {
    //   name: 'Charts',
    //   url: '/charts',
    //   icon: 'icon-pie-chart',
    // },
    // {
    //   name: 'Icons',
    //   url: '/icons',
    //   icon: 'icon-star',
    //   children: [
    //     {
    //       name: 'CoreUI Icons',
    //       url: '/icons/coreui-icons',
    //       icon: 'icon-star',
    //       badge: {
    //         variant: 'info',
    //         text: 'NEW',
    //       },
    //     },
    //     {
    //       name: 'Flags',
    //       url: '/icons/flags',
    //       icon: 'icon-star',
    //     },
    //     {
    //       name: 'Font Awesome',
    //       url: '/icons/font-awesome',
    //       icon: 'icon-star',
    //       badge: {
    //         variant: 'secondary',
    //         text: '4.7',
    //       },
    //     },
    //     {
    //       name: 'Simple Line Icons',
    //       url: '/icons/simple-line-icons',
    //       icon: 'icon-star',
    //     },
    //   ],
    // },
    // {
    //   name: 'Notifications',
    //   url: '/notifications',
    //   icon: 'icon-bell',
    //   children: [
    //     {
    //       name: 'Alerts',
    //       url: '/notifications/alerts',
    //       icon: 'icon-bell',
    //     },
    //     {
    //       name: 'Badges',
    //       url: '/notifications/badges',
    //       icon: 'icon-bell',
    //     },
    //     {
    //       name: 'Modals',
    //       url: '/notifications/modals',
    //       icon: 'icon-bell',
    //     },
    //   ],
    // },
    // {
    //   name: 'Widgets',
    //   url: '/widgets',
    //   icon: 'icon-calculator',
    //   badge: {
    //     variant: 'info',
    //     text: 'NEW',
    //   },
    // },
    // {
    //   divider: true,
    // },
    // {
    //   title: true,
    //   name: 'Extras',
    // },
    // {
    //   name: 'Pages',
    //   url: '/pages',
    //   icon: 'icon-star',
    //   children: [
    //     {
    //       name: 'Login',
    //       url: '/login',
    //       icon: 'icon-star',
    //     },
    //     {
    //       name: 'Register',
    //       url: '/register',
    //       icon: 'icon-star',
    //     },
    //     {
    //       name: 'Error 404',
    //       url: '/404',
    //       icon: 'icon-star',
    //     },
    //     {
    //       name: 'Error 500',
    //       url: '/500',
    //       icon: 'icon-star',
    //     },
    //   ],
    // },
    // {
    //   name: 'Disabled',
    //   url: '/dashboard',
    //   icon: 'icon-ban',
    //   attributes: { disabled: true },
    // },
  ],
};
