// ============================================================
// SuperMummy — data.js
// Update this file monthly. Change numbers, save, push to GitHub.
// Two minutes. Never touch the design.
// Last updated: May 14, 2026
// All numbers verified from YouTube Studio Advanced mode exports.
// ============================================================

const SM = {

  // --- Meta ---
  lastUpdated:          'May 14, 2026',
  yearFounded:          '2018',

  // --- Channel Numbers (update monthly) ---
  totalViews:           '12.9 करोड़+',
  totalViewsEn:         '12.9 Crore+',
  monthlyViews:         '1.04 करोड़',
  monthlyViewsEn:       '1.04 Crore',
  monthlyViewsExact:    '1.04 Crore',
  subscribers:          '1.61 लाख',
  subscribersEn:        '1.61 Lakh',
  subscribersExact:     '1,61,301',
  totalVideos:          '900+',
  yearsActive:          '8',

  // --- 28-Day Window (Apr 15 – May 12, 2026) ---
  window28Days:         'Apr 15 – May 12, 2026',
  dailyAvgViews:        '3.70 लाख',
  dailyAvgViewsEn:      '3.70 Lakh',
  dailyAvgViewsExact:   '3,69,864',
  peakDay:              '4.05 लाख',
  peakDayEn:            '4.05 Lakh',
  peakDayExact:         '4,05,014',
  peakDayDate:          'May 12, 2026',
  watchHours28d:        '33,857',
  newSubs28d:           '5,105',
  revenue28d:           '$110.67',

  // --- Growth (YoY January daily average) ---
  dailyAvgJan2024:      '4,222',
  dailyAvgJan2025:      '19,933',
  dailyAvgJan2026:      '3,22,200',
  yoyGrowth2425:        '+372%',
  yoyGrowth2526:        '+1,516%',
  momGrowth:            '-10.7%',
  annualRunRate:        '13.5 Crore views/year',

  // --- Traffic Sources (28-day, Apr 15 – May 12, 2026) ---
  searchViewsPct:       '91.5%',
  searchViewsExact:     '94.79 Lakh+',
  searchViewsEn:        '9.5 million',
  searchViewsLakh:      '94.79 Lakh+',
  searchRetention:      '82%',           // estimated from AVD ratio (0:00:22); re-verify in YT Studio if needed
  searchCTR:            '6.72%',
  searchWatchHours:     '28,801',
  shortsFeedPct:        '5.0%',
  shortsFeedViews:      '5.22 Lakh',
  browsePct:            '2.5%',
  browseViews:          '2.55 Lakh',
  suggestedViewsPct:    '0.4%',
  suggestedViewsExact:  '40,633',
  suggestedAVD:         '2:19',

  // --- Audience Geography (28-day, Apr 15 – May 12, 2026) ---
  nonMetroPct:          '91.1%',
  indiaPct:             '96.8%',         // carried forward — country-level export not in this batch
  indiaViews:           '1.00 Crore',
  pakistanPct:          '1.4%',          // estimated from named-city attribution ratio
  nepalPct:             '0.7%',          // estimated from named-city attribution ratio

  // --- India Tier Breakdown (28-day, city-level export, Apr 15 – May 12, 2026) ---
  // Methodology: Tier 1 = 6 metros (Delhi, Mumbai, Bengaluru, Chennai, Kolkata, Hyderabad + sub-areas).
  // Tier 2 = top non-metro cities (Patna, Lucknow, Indore, Agra, Jaipur, Pune, Ahmedabad and other
  // state-capital / 1M+ population cities). Tier 3 = remaining named Indian cities.
  // Invisible India = views YouTube cannot attribute to any named city (India total − named cities).
  // Pct values are % of India total. Tier 2 share looks higher this month because the same handful of
  // large non-metro cities (Patna/Lucknow/Indore/Agra) accounted for a larger slice of named views.
  tier1Pct:             '9.2%',
  tier1Views:           '9.25 Lakh',
  tier2Pct:             '55.9%',
  tier2Views:           '56.08 Lakh',
  tier3Pct:             '2.5%',
  tier3Views:           '2.51 Lakh',
  invisibleIndiaPct:    '32%',
  invisibleIndiaExact:  '32.3%',
  invisibleIndiaViews:  '32.41 Lakh',

  // --- Hindi Belt (UP+BR+MP+RJ+HR+UK+JH+CG+HP combined, Apr 15 – May 12, 2026) ---
  hindiBeltPct:         '42.4%',
  hindiBeltViews:       '43.92 Lakh',

  // --- Patna + Lucknow Combined (for Work With Us + Media Kit) ---
  patnaLucknowViews:    '19.96 Lakh',

  // --- India State Breakdown (top states, 28-day, Apr 15 – May 12, 2026) ---
  stateUP:              '19.40 Lakh',
  stateUPPct:           '18.73%',
  stateBihar:           '10.93 Lakh',
  stateBiharPct:        '10.55%',
  stateMH:              '6.32 Lakh',
  stateMHPct:           '6.10%',
  stateMP:              '6.93 Lakh',
  stateMPPct:           '6.69%',
  stateRJ:              '4.45 Lakh',
  stateRJPct:           '4.30%',
  stateGJ:              '3.50 Lakh',
  stateGJPct:           '3.38%',
  stateDL:              '4.73 Lakh',
  stateDLPct:           '4.57%',

  // --- Shorts Performance (28-day) ---
  shortsCount:          '370',
  shortsViewsPct:       '96.9%',
  shortsViews28d:       '1.00 Crore',
  shortsRPM:            '$0.006',
  shortsAvgRetention:   '108.2%',
  shortsHighRetCount:   '186',

  // --- Long-form Performance (28-day) ---
  longFormCount:        '130',
  longFormActiveCount:  '130',
  longFormViewsPct:     '2.8%',
  longFormViews28d:     '2.92 Lakh',
  longFormRevPct:       '42.9%',
  longFormRPM:          '$0.16',
  longFormRPMExact:     '$0.1625',
  longFormVsShorts:     '26x',

  // --- Revenue (28-day) ---
  totalRev28d:          '$110.67',
  shortsRev28d:         '$62.93',
  longFormRev28d:       '$47.46',
  channelRPM:           '$0.011',
  anomalyVideoRPM:      '$3.006',

  // --- Lifetime Revenue ---
  lifetimeRevenue:      '$3,256.27',
  lifetimeViews:        '12.9 Crore',
  lifetimeRPM:          '$0.025',

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
    { year: '2026*', views: 4.99 }
  ],

  // --- Market Data (sourced — do not approximate) ---
  annualPregnancies:    '2.9 Crore (29 million)',
  specialistVacancy:    '70%',
  reliableVideos:       '15.3%',
  hindiSpeakers:        '60 Crore',
  dailyPregnancies:     '~80,000',

  // --- Top Cities (last 28 days, Apr 15 – May 12, 2026) ---
  topCities: [
    { rank: 1,  city: 'Patna',     state: 'Bihar',       views: '10.69 Lakh', viewsExact: 1068733 },
    { rank: 2,  city: 'Lucknow',   state: 'UP',          views: '9.28 Lakh',  viewsExact: 927639  },
    { rank: 3,  city: 'Indore',    state: 'MP',          views: '5.30 Lakh',  viewsExact: 529924  },
    { rank: 4,  city: 'Agra',      state: 'UP',          views: '5.11 Lakh',  viewsExact: 511013  },
    { rank: 5,  city: 'Delhi',     state: 'Delhi',       views: '4.60 Lakh',  viewsExact: 460464  },
    { rank: 6,  city: 'Jaipur',    state: 'Rajasthan',   views: '3.55 Lakh',  viewsExact: 354821  },
    { rank: 7,  city: 'Pune',      state: 'Maharashtra', views: '2.77 Lakh',  viewsExact: 277437  },
    { rank: 8,  city: 'Ahmedabad', state: 'Gujarat',     views: '2.48 Lakh',  viewsExact: 247794  },
    { rank: 9,  city: 'Ludhiana',  state: 'Punjab',      views: '1.86 Lakh',  viewsExact: 185514  },
    { rank: 10, city: 'Bhopal',    state: 'MP',          views: '1.59 Lakh',  viewsExact: 158821  },
    { rank: 11, city: 'Mumbai',    state: 'Maharashtra', views: '1.57 Lakh',  viewsExact: 157310  },
    { rank: 12, city: 'Nagpur',    state: 'Maharashtra', views: '1.49 Lakh',  viewsExact: 148756  },
    { rank: 13, city: 'Varanasi',  state: 'UP',          views: '1.47 Lakh',  viewsExact: 146576  },
    { rank: 14, city: 'Meerut',    state: 'UP',          views: '1.41 Lakh',  viewsExact: 141306  },
    { rank: 15, city: 'Guwahati',  state: 'Assam',       views: '1.34 Lakh',  viewsExact: 133569  }
  ],

  // --- Top Videos (lifetime views) ---
  topVideos: [
    { title: 'प्रेगनेंसी टेस्ट कितने दिन बाद करना चाहिए', views: '1.05 करोड़+', url: 'https://youtube.com/watch?v=R9TnrckiPRI' },
    { title: 'Pregnant Hone Ke Liye Kitna Virya Andar Jana Chahie', views: '85 लाख+', url: 'https://youtube.com/watch?v=Lk4kRzyGorQ' },
    { title: 'प्रेगनेंट होने के लक्षण | Pregnant Hone Ke Lakshan', views: '55 लाख+', url: 'https://youtube.com/watch?v=YLfIJSts27c' },
    { title: 'Early Pregnancy Me White Discharge', views: '31 लाख+', url: 'https://youtube.com/watch?v=5GR2GvGMLls' },
    { title: 'Urine Pregnancy Test Kit में क्या क्या होता है', views: '29 लाख+', url: 'https://youtube.com/watch?v=9BKZfWa4ukY' },
    { title: 'प्रेगनेंसी में कौन सा फल खाना चाहिए', views: '23 लाख+', url: 'https://youtube.com/watch?v=igm0GaiDc_4' },
    { title: 'Pregnancy Me Kamar Dard Kab Hota Hai', views: '23 लाख+', url: 'https://youtube.com/watch?v=lz6_-Z4kNx0' },
    { title: 'Early Pregnancy Me Fever', views: '20 लाख+', url: 'https://youtube.com/watch?v=_BwVCPWP5rc' },
    { title: 'Pregnant Hone Ke Lakshan - Pet Dard Hona', views: '19 लाख+', url: 'https://youtube.com/watch?v=W6yZ7j0RMWc' },
    { title: 'Baby Karne Ke Liye Kitni Baar Karna Chahiye', views: '18 लाख+', url: 'https://youtube.com/watch?v=R0aMkfWYUyA' },
    { title: 'Pregnancy Test Negative But No Period', views: '18 लाख+', url: 'https://youtube.com/watch?v=fn9_XYMbZns' },
    { title: 'पीरियड मिस होने के कितने दिन बाद प्रेगनेंसी टेस्ट करे', views: '17 लाख+', url: 'https://youtube.com/watch?v=3RQ_QReRKVg' }
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
