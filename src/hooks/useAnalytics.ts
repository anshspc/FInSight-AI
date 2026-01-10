import { useCallback, useEffect } from 'react';

type EventType = 'page_load' | 'search_usage' | 'filter_click' | 'strategy_button_click' | 'theme_toggle';

interface AnalyticsEvent {
  event: EventType;
  metadata?: Record<string, any>;
  timestamp: string;
}

export function useAnalytics() {
  const trackEvent = useCallback((event: EventType, metadata?: Record<string, any>) => {
    const payload: AnalyticsEvent = {
      event,
      metadata,
      timestamp: new Date().toISOString(),
    };

    // In a real app, you would send this to your analytics provider (Google Analytics, Mixpanel, etc.)
    console.log(`[Analytics] ${event}`, payload);
    
    // Example: window.gtag('event', event, metadata);
  }, []);

  // Automatically track page load on mount
  useEffect(() => {
    trackEvent('page_load', { path: window.location.pathname });
  }, [trackEvent]);

  return { trackEvent };
}
