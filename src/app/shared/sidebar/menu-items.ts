import { RouteInfo } from './sidebar.metadata';



export const ROUTES: RouteInfo[] = [
  
  {
    path: '',
    title: 'Personal',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: []
  },
  {
    path: '/dashboard',
    title: 'Dashboard',
    icon: 'mdi mdi-gauge',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '',
    title: 'UI Components',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: []
  },
  {
    path: '/component/admin',
    title: 'Admin',
    icon: 'fa fa-id-card fa-lg ',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/client',
    title: 'Client',
    icon: 'fa fas fa-child fa-lg ',
    class: '',
    extralink: false,
    submenu: []
  },
  /*{
    path: '/component/creationEvenement',
    title: 'Creation Evenement',
    icon: 'fa fas fa-calendar-alt fa-lg ',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/consultationEvenement',
    title: 'Consultation Evenement',
    icon: 'fa far fa-calendar-check fa-lg ',
    class: '',
    extralink: false,
    submenu: []
  },*/
  {
    path: '/component/prestataire',
    title: 'Prestataire',
    icon: 'fa fas fa-truck-loading fa-lg ',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/prestataire-offres',
    title: 'Prestataire offres',
    icon: 'fa fas fa-coffee fa-lg ',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/prestataire-profil',
    title: 'Prestataire profil',
    icon: 'fa far fa-user-circle fa-lg ',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/card',
    title: 'Card',
    icon: 'mdi mdi-blur-radial',
    class: 'has-sub',
    extralink: false,
    submenu: []
  },
  
  {
    path: '/component/alert',
    title: 'Alert',
    icon: 'mdi mdi-message-bulleted',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/carousel',
    title: 'Carousel',
    icon: 'mdi mdi-view-carousel',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/dropdown',
    title: 'Dropdown',
    icon: 'mdi mdi-arrange-bring-to-front',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/modal',
    title: 'Modal',
    icon: 'mdi mdi-tablet',
    class: '',
    extralink: false,
    submenu: []
  },
 
  {
    path: '/component/poptool',
    title: 'Popover & Tooltip',
    icon: 'mdi mdi-image-filter-vintage',
    class: '',
    extralink: false,
    submenu: []
  },
  
  {
    path: '/component/rating',
    title: 'Ratings',
    icon: 'mdi mdi-bandcamp',
    class: '',
    extralink: false,
    submenu: []
  },
  
  
  {
    path: '/component/buttons',
    title: 'Button',
    icon: 'mdi mdi-toggle-switch',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/toast',
    title: 'Toast',
    icon: 'mdi mdi-alert',
    class: '',
    extralink: false,
    submenu: []
  }
  

];

