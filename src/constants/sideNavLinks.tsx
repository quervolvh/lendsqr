import {
    ArrowLeft,
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
    LogoutIcon,
    DashboardIcon,
} from 'components';

type sideNavBlockItemType = {
    title: string,
    link: string,
    type?: "logout" | "side-nav-item-block",
    links: {
        title: string,
        icon: string,
        link: string,
    }[]
};


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
            link: "/customers"

        },

        {
            title: "Loans",
            icon: LoanIcon,
            link: "/customers"

        },

        {
            title: "Decision Models",
            icon: DecisionsIcon,
            link: "/customers"

        },

        {
            title: "Savings",
            icon: SavingsIcon,
            link: "/customers"

        },

        {
            title: "Loan Requests",
            icon: LoansRequestIcons,
            link: "/customers"

        },

        {
            title: "Whitelist",
            icon: WhiteListIcon,
            link: "/customers"

        },

        {
            title: "Karma",
            icon: KarmaIcon,
            link: "/customers"

        },

    ]

}

export const SIDENAVLINKS: sideNavBlockItemType[] = [

    customerBlock

];
