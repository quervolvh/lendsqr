import {
    UsersIcon,
    GuarantorsIcon,
    LoanIcon,
    DecisionsIcon,
    SavingsIcon,
    LoansRequestIcons,
    WhiteListIcon,
    KarmaIcon,
    OrganizationIcon,
    SavingsProductIcons,
    FeesAndChargesIcon,
    TransactionsIcon,
    ServicesIcon,
    ServiceAccountIcon,
    SettlementsIcon,
    ReportsIcon,
    PreferencesIcon,
    FeesAndPricingIcon,
    AuditLogsIcons,
    SystemMessagesIcon,
    DashboardIcon,
} from 'components';

type sideNavBlockItemType = {
    title?: string,
    link?: string,
    type?: "dashboard" | "side-nav-item-block",
    links: {
        title: string,
        icon: string,
        link: string,
    }[]
};

const dashboardBlock: sideNavBlockItemType = {

    title: "",

    link: "",

    type: "side-nav-item-block",

    links: [

        {
            title: "Dashboard",
            icon: DashboardIcon,
            link: "/customers"

        },

    ]

}


const customerBlock: sideNavBlockItemType = {

    title: "CUSTOMERS",

    link: "/customers",

    type: "side-nav-item-block",

    links: [

        {
            title: "Users",
            icon: UsersIcon,
            link: "/customers"

        },

        {
            title: "Guarantors",
            icon: GuarantorsIcon,
            link: "/customers?tab=guarantors"

        },

        {
            title: "Loans",
            icon: LoanIcon,
            link: "/customers?tab=loans"

        },

        {
            title: "Decision Models",
            icon: DecisionsIcon,
            link: "/customers?tab=models"

        },

        {
            title: "Savings",
            icon: SavingsIcon,
            link: "/customers?tab=savings"

        },

        {
            title: "Loan Requests",
            icon: LoansRequestIcons,
            link: "/customers?tab=requests"

        },

        {
            title: "Whitelist",
            icon: WhiteListIcon,
            link: "/customers?tab=whitelist"

        },

        {
            title: "Karma",
            icon: KarmaIcon,
            link: "/customers?tab=karma"

        },

    ]

}

const businessBlock: sideNavBlockItemType = {

    title: "BUSINESS",

    link: "/business",

    type: "side-nav-item-block",

    links: [

        {
            title: "Organization",
            icon: OrganizationIcon,
            link: "/business"

        },

        {
            title: "Loan Products",
            icon: LoanIcon,
            link: "/business"

        },

        {
            title: "Savings Product",
            icon: SavingsProductIcons,
            link: "/business"

        },

        {
            title: "Fees and Charges",
            icon: FeesAndChargesIcon,
            link: "/business"

        },

        {
            title: "Transactions",
            icon: TransactionsIcon,
            link: "/business"

        },

        {
            title: "Services",
            icon: ServicesIcon,
            link: "/business"

        },

        {
            title: "Service Account",
            icon: ServiceAccountIcon,
            link: "/business"

        },

        {
            title: "Settlements",
            icon: SettlementsIcon,
            link: "/business"

        },

        {
            title: "Reports",
            icon: ReportsIcon,
            link: "/business"

        },


    ]

}

const settingsBlock: sideNavBlockItemType = {

    title: "SETTINGS",

    link: "/business",

    type: "side-nav-item-block",

    links: [

        {
            title: "Preferences",
            icon: PreferencesIcon,
            link: "/settings"

        },

        {
            title: "Fees and Pricing",
            icon: FeesAndPricingIcon,
            link: "/settings"

        },

        {
            title: "Audit Logs",
            icon: AuditLogsIcons,
            link: "/settings"

        },

        {
            title: "System Messages",
            icon: SystemMessagesIcon,
            link: "/settings"

        }

    ]

}


export const SIDENAVLINKS: sideNavBlockItemType[] = [

    dashboardBlock,

    customerBlock,

    businessBlock,

    settingsBlock

];
