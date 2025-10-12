/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://daadras.org',
  generateRobotsText: true,
  generateIndexSitemap: false,
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: [
    '/api/*',
    '/admin/*',
    '/private/*',
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/'],
      },
    ],
    // Remove circular reference - this config generates sitemap.xml
    // additionalSitemaps: [
    //   'https://daadras.org/sitemap.xml',
    // ],
  },
  transform: async (config, path) => {
    // Custom priority and changefreq for different pages
    const customConfig = {
      // High priority pages
      '/': { priority: 1.0, changefreq: 'daily' },
      '/about/our-story': { priority: 0.9, changefreq: 'weekly' },
      '/initiatives': { priority: 0.9, changefreq: 'weekly' },
      '/initiatives/project-salam': { priority: 0.9, changefreq: 'weekly' },
      '/ways-to-give': { priority: 0.9, changefreq: 'monthly' },
      '/our-team': { priority: 0.8, changefreq: 'monthly' },
      
      // Initiative pages
      '/initiatives/emergency-relief': { priority: 0.8, changefreq: 'monthly' },
      '/initiatives/economic-upliftment': { priority: 0.8, changefreq: 'monthly' },
      '/initiatives/project-salam/sel-program': { priority: 0.7, changefreq: 'monthly' },
      '/initiatives/project-salam/it-program': { priority: 0.7, changefreq: 'monthly' },
      '/initiatives/project-salam/strategic-gaming': { priority: 0.7, changefreq: 'monthly' },
      
      // Get involved pages
      '/get-involved/volunteer': { priority: 0.8, changefreq: 'daily' },
      '/get-involved/career': { priority: 0.8, changefreq: 'daily' },
      '/get-involved/partnership': { priority: 0.8, changefreq: 'daily' },
      
      // News and resources
      '/news-resources/news': { priority: 0.7, changefreq: 'daily' },
      '/news-resources/reports': { priority: 0.7, changefreq: 'weekly' },
      
      // Contact
      '/about/contact': { priority: 0.6, changefreq: 'monthly' },
    }

    const customSettings = customConfig[path] || {}
    
    return {
      loc: path,
      changefreq: customSettings.changefreq || config.changefreq,
      priority: customSettings.priority || config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
  additionalPaths: async (config) => {
    const additionalPaths = []
    
    // Team member IDs (hardcoded for sitemap generation)
    const teamMemberIds = [
      "umar-zafar",
      "fateh-muhammad", 
      "arooj-hameed-khan",
      "sawaiz-naseem",
      "sarmad-sabir",
      "nabeeha-irfan",
      "duaa-tahir",
      "syeda-mariam-naqvi",
      "zaryab-mustafa",
      "unsa-noor",
      "khair-ullah",
      "ali-mahmood",
      "zafir-ahmed",
      "abdul-muqadim",
      "shanzay-khan"
    ]
    
    // Add team member pages
    teamMemberIds.forEach(id => {
      additionalPaths.push({
        loc: `/our-team/${id}`,
        changefreq: 'daily',
        priority: 0.6,
        lastmod: new Date().toISOString(),
      })
    })
    
    // Article slugs - add your article slugs here as you create them
    const articleSlugs = [
      // Example: "project-salam-reaches-500-students",
      // Add more article slugs as they are created
    ]
    
    // Add article pages
    articleSlugs.forEach(slug => {
      additionalPaths.push({
        loc: `/news-resources/article/layout-1/${slug}`,
        changefreq: 'weekly',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      })
    })
    
    return additionalPaths
  },
}
