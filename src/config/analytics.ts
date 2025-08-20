export interface AnalyticsConfig {
  gtm: {
    id: string;
    enabled: boolean;
  };
  ga: {
    measurementId: string;
    enabled: boolean;
  };
}

export const analyticsConfig: AnalyticsConfig = {
  gtm: {
    id: "GTM-XXXXXXX", // Replace with your Google Tag Manager ID
    enabled: false // Set to true when GTM ID is configured
  },
  ga: {
    measurementId: "G-XXXXXXXXXX", // Replace with your Google Analytics 4 Measurement ID
    enabled: false // Set to true when GA4 ID is configured
  }
};

// Helper function to initialize Google Tag Manager
export const initializeGTM = (gtmId: string) => {
  if (typeof window === 'undefined' || !gtmId) return;

  // GTM Script for head
  const gtmScript = document.createElement('script');
  gtmScript.innerHTML = `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${gtmId}');
  `;
  document.head.appendChild(gtmScript);

  // GTM NoScript for body
  const gtmNoScript = document.createElement('noscript');
  gtmNoScript.innerHTML = `
    <iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}"
    height="0" width="0" style="display:none;visibility:hidden"></iframe>
  `;
  document.body.insertBefore(gtmNoScript, document.body.firstChild);
};

// Helper function to track page views
export const trackPageView = (path: string, title?: string) => {
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: 'page_view',
      page_path: path,
      page_title: title || document.title
    });
  }
};

// Helper function to track custom events
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: eventName,
      ...parameters
    });
  }
};