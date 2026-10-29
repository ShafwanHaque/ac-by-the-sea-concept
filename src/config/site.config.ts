export type StandardIcon =
  | "cooling"
  | "heating"
  | "plumbing"
  | "air-quality"
  | "electrical"
  | "maintenance";

export type ThemeStyle = "clean" | "technical" | "industrial" | "warm";

export type ThemeColors = {
  brandPrimary: string;
  brandSecondary: string;
  brandAccent: string;
  page: string;
  surfaceDark: string;
  surfaceDarkAlt: string;
  surfaceElevated: string;
  surfaceSoft: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  textOnBrand: string;
  borderSubtle: string;
  borderStrong: string;
  glowPrimary: string;
  glowSecondary: string;
  networkLine: string;
  success: string;
  service1: string;
  service2: string;
  service3: string;
  service4: string;
  service5: string;
};

export type CoverageLocation = {
  name: string;
  kind: "city" | "county" | "community";
  lat?: number;
  lng?: number;
  hub?: boolean;
  note?: string;
  href?: string;
};

export type ContactSubmissionMode = "demo" | "endpoint";

export type SiteConfig = {
  brand: {
    name: string;
    shortName: string;
    logo: string;
    logoLight: string;
    region: string;
  };
  theme: {
    style: ThemeStyle;
    colors: ThemeColors;
  };
  header: {
    navServices: string;
    navAreas: string;
    navContact: string;
    helpLabel: string;
    ctaLabel: string;
    mobileEyebrow: string;
    mobileCallLabel: string;
  };
  opening: {
    enabled: boolean;
    /** Total screen time including the final one-sheet lift reveal. */
    durationMs: number;
    eyebrow: string;
    line1: string;
    line2: string;
    detail: string;
    location: string;
    skipLabel: string;
  };
  hero: {
    /** The Climate Chamber is the new signature, with photo-based legacy layouts retained. */
    layout: "service-craft" | "climate-chamber" | "open-door" | "picture-window" | "keepsake";
    eyebrow: string;
    headlineLine1: string;
    headlineLine2: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    locationLabel: string;
    locationValue: string;
    edgeLabel: string;
    bottomStatement: string;
    sillLabel: string;
    serviceLabels: [string, string, string];
    discoverLabel: string;
    motion: {
      /** Turn off when capturing zero-animation QA screenshots or when desired for a prospect. */
      enabled: boolean;
      /** Balanced is more cinematic; gentle has the same choreography at a slower pace. */
      pace: "balanced" | "gentle";
      /** Very slight hovering of the inset media after the one-time entrance. */
      ambient: boolean;
      /** Small image-depth shift on scroll, disabled automatically for reduced motion. */
    };
    system?: {
      eyebrow: string;
      modes: [
        { id: "cool"; label: string; detail: string },
        { id: "warm"; label: string; detail: string },
        { id: "pure"; label: string; detail: string },
      ];
    };
    media: {
      primarySrc: string;
      primaryAlt: string;
      primaryPosition: string;
      /** For picture-window/keepsake only. Open-door always displays the entire image without cropping. */
      fit: "contain" | "cover";
      /** Backdrop for the alternate fixed-window layouts only. */
      backdrop: "matte" | "blur";
    };
  };
  seo: {
    title: string;
    description: string;
  };
  contact: {
    phoneDisplay: string;
    phoneHref: string;
    email: string;
    address: string;
    contactUrl: string;
    servicesUrl: string;
  };
  brandStandard: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    bodyTitle: string;
    body: string;
    callLabel: string;
    availabilityLabel: string;
    panelEyebrow: string;
    panelTitle: string;
    panelFooter: string;
    handoff: string;
    items: Array<{
      icon: StandardIcon;
      label: string;
      detail: string;
    }>;
  };
  services: {
    eyebrow: string;
    introLine1: string;
    introLine2: string;
    summaryEyebrow: string;
    summaryTitle: string;
    summaryBody: string;
    summaryCta: string;
    items: [
      ServiceConfig,
      ServiceConfig,
      ServiceConfig,
      ServiceConfig,
      ServiceConfig,
    ];
  };
  coverage: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    featuredLocation: string;
    locationDetail: string;
    ctaLabel: string;
    networkLabel: string;
    regionLabel: string;
    metrics: [
      { value: string; label: string },
      { value: string; label: string },
      { value: string; label: string },
    ];
    locations: CoverageLocation[];
  };
  contactSection: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    submissionMode: ContactSubmissionMode;
    formEndpoint: string;
    successMessage: string;
  };
};

export type ServiceConfig = {
  name: string;
  shortName: string;
  image: string;
  description?: string;
};

export const siteConfig: SiteConfig = {
  "brand": {
    "name": "AC By The Sea",
    "shortName": "AC By The Sea",
    "logo": "https://acbythesea.com/wp-content/uploads/2025/07/Seahorse-mascot-455x1024.webp",
    "logoLight": "https://acbythesea.com/wp-content/uploads/2025/07/Seahorse-mascot-455x1024.webp",
    "region": "Gulf Shores · Alabama Gulf Coast"
  },
  "theme": {
    "style": "warm",
    "colors": {
      "brandPrimary": "#075A6B",
      "brandSecondary": "#67C8C5",
      "brandAccent": "#F19A62",
      "page": "#07303A",
      "surfaceDark": "#0B3B46",
      "surfaceDarkAlt": "#124D59",
      "surfaceElevated": "#1A6170",
      "surfaceSoft": "#EEF8F6",
      "textPrimary": "#FCFDFD",
      "textSecondary": "#DEEFED",
      "textMuted": "#90AAA6",
      "textOnBrand": "#FFFFFF",
      "borderSubtle": "#2E5257",
      "borderStrong": "#58777A",
      "glowPrimary": "#075A6B",
      "glowSecondary": "#67C8C5",
      "networkLine": "#F19A62",
      "success": "#6FA77F",
      "service1": "#075A6B",
      "service2": "#F19A62",
      "service3": "#67C8C5",
      "service4": "#124D59",
      "service5": "#1A6170"
    }
  },
  "header": {
    "navServices": "Services",
    "navAreas": "Service areas",
    "navContact": "Contact",
    "helpLabel": "Call (251) 240-7794",
    "ctaLabel": "Schedule a service",
    "mobileEyebrow": "GULF SHORES · ALABAMA GULF COAST",
    "mobileCallLabel": "Call now"
  },
  "opening": {
    "enabled": false,
    "durationMs": 1400,
    "eyebrow": "GULF SHORES · COMFORT WITH A COASTAL TOUCH",
    "line1": "From the ocean",
    "line2": "to your front door.",
    "detail": "AC By The Sea · Gulf Shores · Alabama Gulf Coast",
    "location": "Local service · 100% satisfaction focus",
    "skipLabel": "Skip intro"
  },
  "hero": {
    "layout": "service-craft",
    "eyebrow": "GULF SHORES · COMFORT WITH A COASTAL TOUCH",
    "headlineLine1": "From the ocean",
    "headlineLine2": "to your front door.",
    "description": "Coastal-minded heating and cooling for homes from Gulf Shores and Foley to the communities in between.",
    "primaryCta": "Schedule a service",
    "secondaryCta": "Call AC By The Sea",
    "locationLabel": "GULF SHORES · ALABAMA GULF COAST",
    "locationValue": "Gulf Shores · Foley · Orange Beach",
    "edgeLabel": "FROM THE OCEAN FLOOR TO YOUR FRONT DOOR",
    "bottomStatement": "Gulf Shores · Foley · Orange Beach · Baldwin County",
    "sillLabel": "LOCAL SERVICE · 100% SATISFACTION FOCUS",
    "serviceLabels": [
      "Cooling",
      "Heating",
      "Air quality"
    ],
    "discoverLabel": "Explore services",
    "motion": {
      "enabled": true,
      "pace": "balanced",
      "ambient": false
    },
    "system": {
      "eyebrow": "LOCAL COMFORT / IN MOTION",
      "modes": [
        {
          "id": "cool",
          "label": "Cooling",
          "detail": "A considered path from warm intake to balanced, conditioned air."
        },
        {
          "id": "warm",
          "label": "Heating",
          "detail": "Steady circulation, carefully controlled for colder days."
        },
        {
          "id": "pure",
          "label": "Air quality",
          "detail": "A focus on filtration and the air moving through every room."
        }
      ]
    },
    "media": {
      "primarySrc": "https://acbythesea.com/wp-content/uploads/2025/07/VAN-2-WEBP-e1752875822617.webp",
      "primaryAlt": "AC By The Sea branded van, featured in company website imagery.",
      "primaryPosition": "center 52%",
      "fit": "cover",
      "backdrop": "matte"
    }
  },
  "seo": {
    "title": "AC By The Sea | Heating & Cooling in Gulf Shores, AL",
    "description": "AC repair, heating, installation and indoor air quality from a local Gulf Shores team serving Foley, Orange Beach, and the Alabama Gulf Coast. Call 251-240-7794."
  },
  "contact": {
    "phoneDisplay": "(251) 240-7794",
    "phoneHref": "tel:+12512407794",
    "email": "office@acbythesea.com",
    "address": "Gulf Shores, AL",
    "contactUrl": "#contact",
    "servicesUrl": "#services"
  },
  "brandStandard": {
    "eyebrow": "FROM THE OCEAN FLOOR TO YOUR FRONT DOOR.",
    "titleLine1": "Seaside know-how for year-round comfort.",
    "titleLine2": "From the ocean floor to your front door.",
    "bodyTitle": "Seaside know-how for year-round comfort.",
    "body": "AC By The Sea is a locally owned HVAC company serving Gulf Shores, Foley, and nearby Alabama Gulf Coast communities. Its team offers residential and commercial heating, cooling, maintenance, replacement, and indoor air-quality services.",
    "callLabel": "Call now",
    "availabilityLabel": "Gulf Shores · Alabama Gulf Coast",
    "panelEyebrow": "AC BY THE SEA",
    "panelTitle": "A local coastal HVAC team for repairs, system upgrades, heating, and cleaner indoor air.",
    "panelFooter": "Gulf Shores · Foley · Orange Beach · Baldwin County",
    "handoff": "Explore AC By The Sea services.",
    "items": [
      {
        "icon": "cooling",
        "label": "Cooling service",
        "detail": "Troubleshooting and repair to restore reliable cooling quickly."
      },
      {
        "icon": "heating",
        "label": "Heating & installation",
        "detail": "Replacement and maintenance planned around your home and comfort needs."
      },
      {
        "icon": "maintenance",
        "label": "Local expertise",
        "detail": "Heating installation, repair, heat pumps, and seasonal maintenance."
      }
    ]
  },
  "services": {
    "eyebrow": "YEAR-ROUND HOME COMFORT",
    "introLine1": "Service shaped",
    "introLine2": "around your home.",
    "summaryEyebrow": "AC BY THE SEA",
    "summaryTitle": "A local coastal HVAC team for repairs, system upgrades, heating, and cleaner indoor air.",
    "summaryBody": "AC By The Sea is a locally owned HVAC company serving Gulf Shores, Foley, and nearby Alabama Gulf Coast communities. Its team offers residential and commercial heating, cooling, maintenance, replacement, and indoor air-quality services.",
    "summaryCta": "Talk to the team",
    "items": [
      {
        "name": "AC repair & installation",
        "shortName": "Cooling",
        "image": "/services/01.svg",
        "description": "Troubleshooting and repair to restore reliable cooling quickly."
      },
      {
        "name": "AC replacement & maintenance",
        "shortName": "Heating",
        "image": "/services/02.svg",
        "description": "Replacement and maintenance planned around your home and comfort needs."
      },
      {
        "name": "Heating & heat pumps",
        "shortName": "Installation",
        "image": "/services/03.svg",
        "description": "Heating installation, repair, heat pumps, and seasonal maintenance."
      },
      {
        "name": "Air quality solutions",
        "shortName": "Maintenance",
        "image": "/services/04.svg",
        "description": "Air purifiers and duct cleaning to support cleaner indoor air."
      },
      {
        "name": "Residential & commercial HVAC",
        "shortName": "Air quality",
        "image": "/services/05.svg",
        "description": "Tailored HVAC solutions for residential and commercial properties."
      }
    ]
  },
  "coverage": {
    "eyebrow": "LOCAL SERVICE AREA",
    "titleLine1": "Close to home.",
    "titleLine2": "Here when you need us.",
    "description": "Gulf Shores · Alabama Gulf Coast — Gulf Shores, AL, Foley, AL, Orange Beach, AL, Elberta, AL, Lillian, AL, Magnolia Springs, AL, Fairhope, AL, Silverhill, AL, Summerdale, AL, Robertsdale, AL.",
    "featuredLocation": "Gulf Shores, AL",
    "locationDetail": "Proud to serve Gulf Shores · Alabama Gulf Coast.",
    "ctaLabel": "Schedule a service",
    "networkLabel": "THE LOCAL SERVICE NETWORK",
    "regionLabel": "Gulf Shores · Alabama Gulf Coast",
    "metrics": [
      {
        "value": "10 communities",
        "label": "Service area"
      },
      {
        "value": "Local service · 100% satisfaction focus",
        "label": "Local commitment"
      },
      {
        "value": "Local team",
        "label": "Gulf Shores · Alabama Gulf Coast"
      }
    ],
    "locations": [
      {
        "name": "Gulf Shores, AL",
        "kind": "city",
        "lat": 30.246,
        "lng": -87.7008,
        "hub": true
      },
      {
        "name": "Foley, AL",
        "kind": "city",
        "lat": 30.4066,
        "lng": -87.6836,
        "hub": false
      },
      {
        "name": "Orange Beach, AL",
        "kind": "city",
        "lat": 30.2944,
        "lng": -87.5736,
        "hub": false
      },
      {
        "name": "Elberta, AL",
        "kind": "city",
        "lat": 30.4144,
        "lng": -87.5978,
        "hub": false
      },
      {
        "name": "Lillian, AL",
        "kind": "city",
        "lat": 30.4191,
        "lng": -87.4478,
        "hub": false
      },
      {
        "name": "Magnolia Springs, AL",
        "kind": "city",
        "lat": 30.3905,
        "lng": -87.7769,
        "hub": false
      },
      {
        "name": "Fairhope, AL",
        "kind": "city",
        "lat": 30.5227,
        "lng": -87.9033,
        "hub": false
      },
      {
        "name": "Silverhill, AL",
        "kind": "city",
        "lat": 30.5469,
        "lng": -87.7503,
        "hub": false
      },
      {
        "name": "Summerdale, AL",
        "kind": "city",
        "lat": 30.4863,
        "lng": -87.6994,
        "hub": false
      },
      {
        "name": "Robertsdale, AL",
        "kind": "city",
        "lat": 30.5538,
        "lng": -87.7111,
        "hub": false
      }
    ]
  },
  "contactSection": {
    "eyebrow": "TALK WITH A LOCAL TEAM",
    "titleLine1": "Let’s get your",
    "titleLine2": "comfort back.",
    "body": "Tell AC By The Sea what you need, or call the team directly to get started.",
    "primaryCta": "Schedule a service",
    "secondaryCta": "Call AC By The Sea",
    "submissionMode": "demo",
    "formEndpoint": "",
    "successMessage": "Thanks for reaching out. This concept form is a preview and is not connected yet; call (251) 240-7794 to contact AC By The Sea directly."
  }
};
