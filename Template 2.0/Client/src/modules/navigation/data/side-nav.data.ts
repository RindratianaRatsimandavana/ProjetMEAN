import { SideNavItems, SideNavSection } from '@modules/navigation/models';

export const sideNavSections: SideNavSection[] = [
    {
        // text: 'VOITURE EN GARAGE',
        items: ['dashboard'],
    },
    {
        //text: 'DEPOSER VOITURE',
        items: ['forms'],
    },
    {
        //text: 'REPARATION',
        items: ['list'],
    },
    {
        //text: 'VOITURE ENREGISTER',
        items: ['tables'],
    },
    {
        //text: 'FACTURE',
        items: ['facture'],
    },
    {
        //text: 'HISTORIQUE',
        items: ['historique'],
    },
];

export const sideNavItems: SideNavItems = {
    dashboard: {
        icon: 'tachometer-alt',
        text: 'Voiture en garage',
        link: '/dashboard',
    },
    layouts: {
        icon: 'columns',
        text: 'Layouts',
        submenu: [
            {
                text: 'Static Navigation',
                link: '/dashboard/static',
            },
            {
                text: 'Light Sidenav',
                link: '/dashboard/light',
            },
        ],
    },
    pages: {
        icon: 'book-open',
        text: 'Pages',
        submenu: [
            {
                text: 'Authentication',
                submenu: [
                    {
                        text: 'Login',
                        link: '/auth/login',
                    },
                    {
                        text: 'Register',
                        link: '/auth/register',
                    },
                    {
                        text: 'Forgot Password',
                        link: '/auth/forgot-password',
                    },
                ],
            },
            {
                text: 'Error',
                submenu: [
                    {
                        text: '401 Page',
                        link: '/error/401',
                    },
                    {
                        text: '404 Page',
                        link: '/error/404',
                    },
                    {
                        text: '500 Page',
                        link: '/error/500',
                    },
                ],
            },
        ],
    },
    charts: {
        icon: 'chart-area',
        text: 'Charts',
        link: '/charts',
    },
    tables: {
        icon: 'table',
        text: 'Voiture enregistrer',
        link: '/tables',
    },
    forms: {
        icon: 'book-open',
        text: 'Depot voiture',
        link: '/charts',
    },
    list: {
        icon: 'columns',
        text: 'List Reparation',
        link: '/dashboard/static',
    },
    facture: {
        icon: 'table',
        text: 'Facture',
        link: '/dashboard/facture',
    },
    historique: {
        icon: 'chart-area',
        text: 'Historique',
        link: '/dashboard/historique',
    },
};
