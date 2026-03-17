// ============================================================
// SuperMummy — data.js
// Update this file monthly. Change numbers, save, push to GitHub.
// Two minutes. Never touch the design.
// Last updated: March 17, 2026
// All numbers verified from YouTube Studio Advanced mode exports.
// ============================================================

const SM = {

  // --- Channel Numbers (update monthly) ---
  totalViews:           '10.6 करोड़+',
  totalViewsEn:         '10.6 Crore+',
  monthlyViews:         '1.15 करोड़',
  monthlyViewsEn:       '1.15 Crore',
  monthlyViewsExact:    '11,455,481',
  subscribers:          '1.49 लाख',
  subscribersEn:        '1.49 Lakh',
  subscribersExact:     '149,628',
  totalVideos:          '900+',
  yearsActive:          '8',

  // --- 28-Day Window (Feb 16 – Mar 15, 2026) ---
  window28Days:         'Feb 16 – Mar 15, 2026',
  dailyAvgViews:        '4.09 लाख',
  dailyAvgViewsEn:      '4.09 Lakh',
  dailyAvgViewsExact:   '409,124',
  peakDay:              '4.68 लाख',
  peakDayEn:            '4.68 Lakh',
  peakDayExact:         '468,229',
  peakDayDate:          'March 12, 2026',
  watchHours28d:        '39,816',
  newSubs28d:           '6,204',
  revenue28d:           '$143.39',

  // --- Growth (YoY January daily average) ---
  dailyAvgJan2024:      '4,222',
  dailyAvgJan2025:      '19,933',
  dailyAvgJan2026:      '3,22,200',
  yoyGrowth2425:        '+372%',
  yoyGrowth2526:        '+1,516%',
  momGrowth:            '+16.3%',
  annualRunRate:        '14.9 crore views/year',

  // --- Traffic Sources (28-day, Feb 16 – Mar 15, 2026) ---
  searchViewsPct:       '80.4%',
  searchViewsExact:     '9,214,828',
  searchViewsEn:        '9.2 million',
  searchRetention:      '84.98%',
  searchCTR:            '7.75%',
  searchWatchHours:     '29,991',
  shortsFeedPct:        '13.2%',
  shortsFeedViews:      '1,507,245',
  browsePct:            '5.3%',
  browseViews:          '608,432',
  suggestedViewsPct:    '0.5%',
  suggestedViewsExact:  '56,532',
  suggestedAVD:         '2:16',

  // --- Audience Geography (28-day) ---
  indiaPct:             '97.11%',
  indiaViews:           '11,112,386',
  pakistanPct:          '1.25%',
  nepalPct:             '0.85%',

  // --- India Tier Breakdown (28-day, city-level export) ---
  tier1Pct:             '9.5%',
  tier1Views:           '1,059,294',
  tier2Pct:             '48.5%',
  tier2Views:           '5,389,403',
  tier3Pct:             '11.8%',
  tier3Views:           '1,315,828',
  invisibleIndiaPct:    '30%',
  invisibleIndiaExact:  '30.1%',
  invisibleIndiaViews:  '3,347,861',
  // Note: Invisible India = views YouTube cannot attribute to any named city.
  // Calculated as: India total views minus sum of all 150 named cities in export.
  // This is the correct, data-derived figure as of March 15, 2026.
  // An earlier figure of 64% cited on this website was unverified and has been corrected.

  // --- Hindi Belt (UP+BR+MP+RJ+HR+UK+JH+CG+HP combined) ---
  hindiBeltPct:         '58.0%',
  hindiBeltViews:       '6,444,903',

  // --- India State Breakdown (top states, 28-day) ---
  stateUP:              '2,794,934',
  stateUPPct:           '25.15%',
  stateBihar:           '1,316,993',
  stateBiharPct:        '11.85%',
  stateMH:              '1,213,077',
  stateMHPct:           '10.92%',
  stateMP:              '984,516',
  stateMPPct:           '8.86%',
  stateRJ:              '714,450',
  stateRJPct:           '6.43%',
  stateGJ:              '623,832',
  stateGJPct:           '5.61%',
  stateDL:              '537,091',
  stateDLPct:           '4.83%',

  // --- Shorts Performance (28-day) ---
  shortsCount:          '423',
  shortsViewsPct:       '96.8%',
  shortsViews28d:       '11,074,561',
  shortsRPM:            '$0.006',
  shortsAvgRetention:   '106.9%',
  shortsHighRetCount:   '367',   // Shorts with 70%+ retention

  // --- Long-form Performance (28-day) ---
  longFormCount:        '77',
  longFormActiveCount:  '45',    // got views in 28 days with no promotion
  longFormViewsPct:     '3.2%',
  longFormViews28d:     '361,925',
  longFormRevPct:       '51.4%', // % of total revenue despite 3.2% of views
  longFormRPM:          '$0.20',
  longFormRPMExact:     '$0.2015',
  longFormVsShorts:     '32x',   // long-form earns 32x more per view than Shorts

  // --- Revenue (28-day) ---
  totalRev28d:          '$143.39',
  shortsRev28d:         '$69.07',
  longFormRev28d:       '$72.95',
  channelRPM:           '$0.012',
  anomalyVideoRPM:      '$3.006', // "which metal vessel to cook in" — 250x channel average

  // --- Lifetime Revenue ---
  lifetimeRevenue:      '$3,010.66',
  lifetimeViews:        '106,000,000',
  lifetimeRPM:          '$0.028',

  // --- Growth Chart Data (annual views in crores) ---
  growthData: [
    { year: '2018', views: 0.01 },
    { year: '2019', views: 0.17 },
    { year: '2020', views: 0.31 },
    { year: '2021', views: 0.12 },
    { year: '2022', views: 0.24 },
    { year: '2023', views: 0.19 },
    { year: '2024', views: 0.21 },
    { year: '2025', views: 6.67 },
    { year: '2026*', views: 2.69 }  // YTD to Mar 15 — asterisk signals partial year
  ],

  // --- Market Data (sourced — do not approximate) ---
  annualPregnancies:    '2.9 crore (29 million)',
  specialistVacancy:    '70%',
  reliableVideos:       '15.3%',
  hindiSpeakers:        '600 million',
  dailyPregnancies:     '~80,000',

  // --- Top Cities (last 28 days, Feb 16 – Mar 15, 2026) ---
  topCities: [
    { rank: 1,  city: 'Patna',      state: 'Bihar',       views: '10.99 लाख', viewsExact: 1099432 },
    { rank: 2,  city: 'Lucknow',    state: 'UP',          views: '10.39 लाख', viewsExact: 1038915 },
    { rank: 3,  city: 'Indore',     state: 'MP',          views: '5.99 लाख',  viewsExact: 598897  },
    { rank: 4,  city: 'Agra',       state: 'UP',          views: '5.51 लाख',  viewsExact: 551125  },
    { rank: 5,  city: 'Delhi',      state: 'Delhi',       views: '4.99 लाख',  viewsExact: 499172  },
    { rank: 6,  city: 'Jaipur',     state: 'Rajasthan',   views: '3.84 लाख',  viewsExact: 384248  },
    { rank: 7,  city: 'Pune',       state: 'Maharashtra', views: '3.67 लाख',  viewsExact: 367169  },
    { rank: 8,  city: 'Ahmedabad',  state: 'Gujarat',     views: '2.95 लाख',  viewsExact: 295022  },
    { rank: 9,  city: 'Nagpur',     state: 'Maharashtra', views: '1.97 लाख',  viewsExact: 197001  },
    { rank: 10, city: 'Ludhiana',   state: 'Punjab',      views: '1.96 लाख',  viewsExact: 195662  },
    { rank: 11, city: 'Mumbai',     state: 'Maharashtra', views: '1.95 लाख',  viewsExact: 195278  },
    { rank: 12, city: 'Bhopal',     state: 'MP',          views: '1.88 लाख',  viewsExact: 188398  },
    { rank: 13, city: 'Varanasi',   state: 'UP',          views: '1.75 लाख',  viewsExact: 174648  },
    { rank: 14, city: 'Bengaluru',  state: 'Karnataka',   views: '1.47 लाख',  viewsExact: 147289  },
    { rank: 15, city: 'Meerut',     state: 'UP',          views: '1.42 लाख',  viewsExact: 141658  }
  ],

  // --- Top Videos (lifetime views) ---
  topVideos: [
    { title: 'प्रेगनेंसी टेस्ट कितने दिन बाद करना चाहिए', views: '84 लाख+', url: 'https://youtube.com/watch?v=R9TnrckiPRI' },
    { title: 'Pregnant Hone Ke Liye Kitna Virya Andar Jana Chahie', views: '72 लाख+', url: 'https://youtube.com/watch?v=Lk4kRzyGorQ' },
    { title: 'प्रेगनेंट होने के लक्षण | Pregnant Hone Ke Lakshan', views: '48 लाख+', url: 'https://youtube.com/watch?v=YLfIJSts27c' },
    { title: 'Early Pregnancy Me White Discharge', views: '27 लाख+', url: 'https://youtube.com/watch?v=5GR2GvGMLls' },
    { title: 'Pregnancy Me Kamar Dard Kab Hota Hai', views: '19 लाख+', url: 'https://youtube.com/watch?v=lz6_-Z4kNx0' },
    { title: 'प्रेगनेंसी में कौन सा फल खाना चाहिए', views: '18 लाख+', url: 'https://youtube.com/watch?v=igm0GaiDc_4' },
    { title: 'Baby Karne Ke Liye Kitni Baar Karna Chahiye', views: '16 लाख+', url: 'https://youtube.com/watch?v=R0aMkfWYUyA' },
    { title: 'Early Pregnancy Me Fever', views: '16 लाख+', url: 'https://youtube.com/watch?v=_BwVCPWP5rc' },
    { title: 'प्रेगनेंसी में बार बार पेशाब आना', views: '16 लाख+', url: 'https://youtube.com/watch?v=J_uHs7_4pK4' },
    { title: 'Pregnant Hone Ke Lakshan - Pet Dard Hona', views: '15 लाख+', url: 'https://youtube.com/watch?v=W6yZ7j0RMWc' },
    { title: 'Urine Pregnancy Test Kit में क्या क्या होता है', views: '15 लाख+', url: 'https://youtube.com/watch?v=9BKZfWa4ukY' },
    { title: 'Pregnancy Test Negative But No Period', views: '14 लाख+', url: 'https://youtube.com/watch?v=fn9_XYMbZns' }
  ],

  // --- Links ---
  youtube:    'https://www.youtube.com/channel/UCXbpISwEehv_dUNr8FMWK8g',
  facebook:   'https://www.facebook.com/share/1888aEXNYU/',
  instagram:  '#',
  linkedin:   'https://www.linkedin.com/in/chandachaudhary/',
  jananam:    'https://jananam.co',
  email:      'chanda@jananam.co',
  whatsapp:   '#',
  membership: '#',

};
