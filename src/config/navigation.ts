import type { BusinessUnit, MenuSubItem, NavigationConfig, NavigationConfigs } from '@/types/navigation';

// Shared main menu items across all business units
const sharedMainMenuItems = [
  {
    title: 'npaServices', // ทรัพย์รอการขาย
    href: '/npa',
  },
  {
    title: 'debtRestructuring', // ปรับโครงสร้างหนี้
    href: '/npl',
  },
  {
    title: 'investorRelations', // นักลงทุนสัมพันธ์
    href: 'https://investor.bam.co.th/th/home',
    external: true,
  },
  {
    title: 'contactUs', // ติดต่อเรา
    href: '/contact',
  },
];

// Business unit specific submenus
const businessUnitSubMenus = {
  corporate: {
    '/corporate': [
      { label: 'freshStart', isTextOnly: true, className: 'text-primary-content' },
      {
        label: 'Corporate.aboutBAM',
        hasDropdown: true,
        children: [
          {
            label: 'Corporate.companyOverview',
            hasDropdown: true,
            children: [
              { label: 'Corporate.history', href: '/corporate/about/history' },
              { label: 'Corporate.visionMission', href: '/corporate/about/vision-mission' },
              { label: 'Corporate.bamMission', href: '/corporate/about/mission' },
              { label: 'Corporate.businessStrategy', href: '/corporate/about/strategy' },
              { label: 'Corporate.logo', href: '/corporate/about/logo' },
            ],
          },
          {
            label: 'Corporate.organizationStructure',
            hasDropdown: true,
            children: [
              { label: 'Corporate.organizationChart', href: '/corporate/about/organization-chart' },
              { label: 'Corporate.boardOfDirectors', href: '/corporate/about/board' },
              { label: 'Corporate.subCommittees', href: '/corporate/about/committees' },
              { label: 'Corporate.executives', href: '/corporate/about/executives' },
            ],
          },
          {
            label: 'Corporate.awardsAchievements',
            href: '/corporate/about/awards',
          },
          {
            label: 'Corporate.annualReport',
            hasDropdown: true,
            children: [
              { label: 'Corporate.annualReport', href: '/corporate/about/annual-report/report' },
              { label: 'Corporate.form56OneReport', href: '/corporate/about/annual-report/56-1' },
              { label: 'Corporate.companyProfile', href: '/corporate/about/annual-report/profile' },
              { label: 'Corporate.publications', href: '/corporate/about/annual-report/publications' },
            ],
          },
        ],
      },
      {
        label: 'Corporate.corporateGovernance',
        hasDropdown: true,
        children: [
          { label: 'Corporate.corporatePolicies', href: '/corporate/governance/policies' },
          { label: 'Corporate.charters', href: '/corporate/governance/charters' },
          { label: 'Corporate.practicesImplementation', href: '/corporate/governance/practices' },
          { label: 'Corporate.criteriaPerformance', href: '/corporate/governance/criteria' },
          { label: 'Corporate.whistleblowingComplaints', href: '/corporate/governance/whistleblowing' },
        ],
      },
      {
        label: 'Corporate.sustainability',
        hasDropdown: true,
        children: [
          { label: 'Corporate.sustainabilityOverview', href: '/corporate/sustainability/overview' },
          { label: 'Corporate.chairmanMessage', href: '/corporate/sustainability/chairman-message' },
          { label: 'Corporate.sustainabilityGoals', href: '/corporate/sustainability/goals' },
          { label: 'Corporate.sustainabilityReport', href: '/corporate/sustainability/report' },
          { label: 'Corporate.esgNewsActivities', href: '/corporate/sustainability/esg-news' },
        ],
      },
      {
        label: 'Corporate.newsAnnouncement',
        hasDropdown: true,
        children: [
          { label: 'Corporate.newsList', href: '/corporate/news/list' },
          { label: 'Corporate.announcements', href: '/corporate/news/announcements' },
          { label: 'Corporate.articles', href: '/corporate/news/articles' },
          { label: 'Corporate.mediaPublications', href: '/corporate/news/publications' },
          { label: 'Corporate.videos', href: '/corporate/news/videos' },
          { label: 'Corporate.eventSchedule', href: '/corporate/news/events' },
          { label: 'Corporate.investorNews', href: 'https://investor.bam.co.th/th/home' },
        ],
      },
      { label: 'Corporate.bamCareers', href: '/corporate/career' },
    ] as MenuSubItem[],
  },

  npa: {
    '/npa': [
      { label: 'searchProperties', href: '/npa/search' },
      { label: 'featuredAssets', href: '/npa/featured' },
      { label: 'auctionSchedule', href: '/npa/auction' },
      { label: 'sellYourProperty', href: '/npa/sell' },
    ] as MenuSubItem[],
  },

  npl: {
    '/npl': [
      { label: 'freshStart', isTextOnly: true, className: 'text-bam-navy' },
      { label: 'NPL.debtProcess', href: '/npl/process' },
      { label: 'NPL.calculator', href: '/npl/calculator' },
      { label: 'NPL.privileges', href: '/npl/privileges' },
      { label: 'NPL.bookConsultation', href: '/npl/consultation' },
      { label: 'NPL.successStories', href: '/npl/success-stories' },
      { label: 'NPL.helpCenter', href: '/npl/help' },
    ] as MenuSubItem[],
  },
};

// Default navigation config (common settings)
export const defaultNavigationConfig: NavigationConfig = {
  menuItems: sharedMainMenuItems,
  logoHref: '/',
  showContactButton: true,
  showSearchButton: true,
};

// Business Unit specific navigation configs
export const navigationConfigs: NavigationConfigs = {
  corporate: {
    ...defaultNavigationConfig,
    subMenus: businessUnitSubMenus.corporate,
  },

  npa: {
    ...defaultNavigationConfig,
    subMenus: businessUnitSubMenus.npa,
  },

  npl: {
    ...defaultNavigationConfig,
    subMenus: businessUnitSubMenus.npl,
  },

  common: {
    ...defaultNavigationConfig,
    subMenus: businessUnitSubMenus.corporate, // ใช้ submenu เดียวกับ corporate
  },
};

// Helper function to get navigation config by business unit
export function getNavigationConfigByBU(businessUnit: BusinessUnit): NavigationConfig {
  return navigationConfigs[businessUnit] || navigationConfigs.corporate;
}
