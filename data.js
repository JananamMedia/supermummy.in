// ============================================================
// SuperMummy — data.js
// Update this file monthly. Change numbers, save, push to GitHub.
// Two minutes. Never touch the design.
// Last updated: April 21, 2026
// All numbers verified from YouTube Studio Advanced mode exports.
// ============================================================

const SM = {

  // --- Meta ---
  lastUpdated:          'April 21, 2026',
  yearFounded:          '2018',

  // --- Channel Numbers (update monthly) ---
  totalViews:           '12.0 करोड़+',
  totalViewsEn:         '12.0 Crore+',
  monthlyViews:         '1.15 करोड़',
  monthlyViewsEn:       '1.15 Crore',
  monthlyViewsExact:    '1.15 Crore',
  subscribers:          '1.57 लाख',
  subscribersEn:        '1.57 Lakh',
  subscribersExact:     '1,57,072',
  totalVideos:          '900+',
  yearsActive:          '8',

  // --- 28-Day Window (Mar 23 – Apr 19, 2026) ---
  window28Days:         'Mar 23 – Apr 19, 2026',
  dailyAvgViews:        '4.14 लाख',
  dailyAvgViewsEn:      '4.14 Lakh',
  dailyAvgViewsExact:   '4,14,261',
  peakDay:              '4.68 लाख',
  peakDayEn:            '4.68 Lakh',
  peakDayExact:         '4,68,229',
  peakDayDate:          'March 12, 2026',
  watchHours28d:        '38,357',
  newSubs28d:           '6,215',
  revenue28d:           '$128.71',

  // --- Growth (YoY January daily average) ---
  dailyAvgJan2024:      '4,222',
  dailyAvgJan2025:      '19,933',
  dailyAvgJan2026:      '3,22,200',
  yoyGrowth2425:        '+372%',
  yoyGrowth2526:        '+1,516%',
  momGrowth:            '+16.3%',
  annualRunRate:        '15.1 Crore views/year',

  // --- Traffic Sources (28-day, Mar 23 – Apr 19, 2026) ---
  searchViewsPct:       '85.0%',
  searchViewsExact:     '98 Lakh+',
  searchViewsEn:        '9.8 million',
  searchViewsLakh:      '98 Lakh+',
  searchRetention:      '84.98%',
  searchCTR:            '7.39%',
  searchWatchHours:     '30,631',
  shortsFeedPct:        '10.5%',
  shortsFeedViews:      '12.20 Lakh',
  browsePct:            '3.4%',
  browseViews:          '3.95 Lakh',
  suggestedViewsPct:    '0.4%',
  suggestedViewsExact:  '51,337',
  suggestedAVD:         '2:24',

  // --- Audience Geography (28-day, Mar 23 – Apr 19, 2026) ---
  nonMetroPct:          '90.9%',
  indiaPct:             '96.8%',
  indiaViews:           '1.12 Crore',
  pakistanPct:          '1.3%',
  nepalPct:             '0.9%',

  // --- India Tier Breakdown (28-day, city-level export, Mar 23 – Apr 19, 2026) ---
  tier1Pct:             '9.1%',
  tier1Views:           '10.22 Lakh',
  tier2Pct:             '38.8%',
  tier2Views:           '43.62 Lakh',
  tier3Pct:             '21.4%',
  tier3Views:           '23.99 Lakh',
  invisibleIndiaPct:    '31%',
  invisibleIndiaExact:  '30.7%',
  invisibleIndiaViews:  '34.46 Lakh',
  // Note: Invisible India = views YouTube cannot attribute to any named city.
  // Calculated as: India total views minus sum of all 150 named cities in export.
  // This is the correct, data-derived figure as of March 15, 2026.
  // An earlier figure of 64% cited on this website was unverified and has been corrected.

  // --- Hindi Belt (UP+BR+MP+RJ+HR+UK+JH+CG+HP combined, Mar 23 – Apr 19, 2026) ---
  hindiBeltPct:         '45.3%',
  hindiBeltViews:       '50.85 Lakh',

  // --- Patna + Lucknow Combined (for Work With Us + Media Kit) ---
  patnaLucknowViews:    '23.69 Lakh',

  // --- India State Breakdown (top states, 28-day, Mar 23 – Apr 19, 2026) ---
  stateUP:              '22.24 Lakh',
  stateUPPct:           '19.81%',
  stateBihar:           '12.93 Lakh',
  stateBiharPct:        '11.52%',
  stateMH:              '7.66 Lakh',
  stateMHPct:           '6.83%',
  stateMP:              '7.93 Lakh',
  stateMPPct:           '7.07%',
  stateRJ:              '5.16 Lakh',
  stateRJPct:           '4.60%',
  stateGJ:              '4.35 Lakh',
  stateGJPct:           '3.88%',
  stateDL:              '5.13 Lakh',
  stateDLPct:           '4.57%',

  // --- Shorts Performance (28-day) ---
  shortsCount:          '423',
  shortsViewsPct:       '96.8%',
  shortsViews28d:       '1.11 Crore',
  shortsRPM:            '$0.006',
  shortsAvgRetention:   '106.9%',
  shortsHighRetCount:   '367',

  // --- Long-form Performance (28-day) ---
  longFormCount:        '77',
  longFormActiveCount:  '45',
  longFormViewsPct:     '3.2%',
  longFormViews28d:     '3.62 Lakh',
  longFormRevPct:       '51.4%',
  longFormRPM:          '$0.20',
  longFormRPMExact:     '$0.2015',
  longFormVsShorts:     '32x',

  // --- Revenue (28-day) ---
  totalRev28d:          '$143.39',
  shortsRev28d:         '$69.07',
  longFormRev28d:       '$72.95',
  channelRPM:           '$0.012',
  anomalyVideoRPM:      '$3.006',

  // --- Lifetime Revenue ---
  lifetimeRevenue:      '$3,010.66',
  lifetimeViews:        '12.0 Crore',
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
    { year: '2026*', views: 4.13 }
  ],

  // --- Market Data (sourced — do not approximate) ---
  annualPregnancies:    '2.9 Crore (29 million)',
  specialistVacancy:    '70%',
  reliableVideos:       '15.3%',
  hindiSpeakers:        '60 Crore',
  dailyPregnancies:     '~80,000',

  // --- Top Cities (last 28 days, Mar 23 – Apr 19, 2026) ---
  topCities: [
    { rank: 1,  city: 'Patna',       state: 'Bihar',       views: '12.68 Lakh', viewsExact: 1268878 },
    { rank: 2,  city: 'Lucknow',     state: 'UP',          views: '11.00 Lakh', viewsExact: 1100733 },
    { rank: 3,  city: 'Indore',      state: 'MP',          views: '6.03 Lakh',  viewsExact: 603229  },
    { rank: 4,  city: 'Agra',        state: 'UP',          views: '5.50 Lakh',  viewsExact: 550729  },
    { rank: 5,  city: 'Delhi',       state: 'Delhi',       views: '4.97 Lakh',  viewsExact: 497374  },
    { rank: 6,  city: 'Jaipur',      state: 'Rajasthan',   views: '3.82 Lakh',  viewsExact: 382886  },
    { rank: 7,  city: 'Pune',        state: 'Maharashtra', views: '3.25 Lakh',  viewsExact: 325144  },
    { rank: 8,  city: 'Ahmedabad',   state: 'Gujarat',     views: '2.88 Lakh',  viewsExact: 288037  },
    { rank: 9,  city: 'Nagpur',      state: 'Maharashtra', views: '1.91 Lakh',  viewsExact: 191786  },
    { rank: 10, city: 'Ludhiana',    state: 'Punjab',      views: '1.91 Lakh',  viewsExact: 191055  },
    { rank: 11, city: 'Mumbai',      state: 'Maharashtra', views: '1.85 Lakh',  viewsExact: 185804  },
    { rank: 12, city: 'Varanasi',    state: 'UP',          views: '1.78 Lakh',  viewsExact: 178423  },
    { rank: 13, city: 'Bhopal',      state: 'MP',          views: '1.71 Lakh',  viewsExact: 171798  },
    { rank: 14, city: 'Bhubaneswar', state: 'Odisha',      views: '1.39 Lakh',  viewsExact: 139788  },
    { rank: 15, city: 'Meerut',      state: 'UP',          views: '1.37 Lakh',  viewsExact: 137450  }
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
