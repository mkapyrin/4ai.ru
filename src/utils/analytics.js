// Analytics utilities for Google Analytics and Yandex.Metrika

// Google Analytics configuration
export const initGA = () => {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-VLPK3J2RE3';

  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });
  }
};

// Yandex.Metrika configuration
export const initYM = () => {
  const YM_ID = process.env.NEXT_PUBLIC_YM_ID || '100916718';

  if (typeof window !== 'undefined' && window.ym) {
    window.ym(YM_ID, 'hit', window.location.href, {
      title: document.title,
      referer: document.referrer
    });
  }
};

// Track page views
export const trackPageView = (path) => {
  // Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID || 'G-VLPK3J2RE3', {
      page_path: path,
    });
  }

  // Yandex.Metrika
  if (typeof window !== 'undefined' && window.ym) {
    window.ym(process.env.NEXT_PUBLIC_YM_ID || '100916718', 'hit', path);
  }
};

// Track custom events
export const trackEvent = (eventName, parameters = {}) => {
  // Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }

  // Yandex.Metrika
  if (typeof window !== 'undefined' && window.ym) {
    window.ym(process.env.NEXT_PUBLIC_YM_ID || '100916718', 'reachGoal', eventName);
  }
};

// Track outbound link clicks
export const trackOutboundLink = (url) => {
  trackEvent('click', {
    event_category: 'outbound',
    event_label: url,
  });
};

// Track phone calls
export const trackPhoneClick = (phone) => {
  trackEvent('phone_click', {
    event_category: 'contact',
    event_label: phone,
  });
};

// Track telegram clicks
export const trackTelegramClick = (telegramLink) => {
  trackEvent('telegram_click', {
    event_category: 'contact',
    event_label: telegramLink,
  });
};

// Track booking attempts
export const trackBookingClick = (service) => {
  trackEvent('booking_click', {
    event_category: 'conversion',
    event_label: service,
  });
};

// VK Retargeting configuration
export const initVK = () => {
  const VK_ID = import.meta.env.VITE_VK_ID || '3400366';
  
  if (typeof window !== 'undefined' && window.VK && window.VK.Retargeting) {
    window.VK.Retargeting.Hit();
  }
};

// Track VK pixel events
export const trackVKEvent = (eventName, params = {}) => {
  if (typeof window !== 'undefined' && window.VK && window.VK.Retargeting) {
    window.VK.Retargeting.Event(eventName);
  }
};

// ============================================
// EMOTIONAL SEO - Enhanced GA4 Event Tracking
// ============================================

/**
 * Track emotional CTA clicks (e.g., "Хочу почувствовать тепло")
 * @param {string} ctaVariant - CTA button variant/text
 * @param {string} pageLocation - Current page path
 */
export const trackEmotionalCTA = (ctaVariant, pageLocation = window.location.pathname) => {
  trackEvent('emotional_cta_click', {
    event_category: 'emotional_engagement',
    cta_variant: ctaVariant,
    page_location: pageLocation,
    value: 1
  });
};

/**
 * Track FAQ expansion (fears and doubts)
 * @param {string} faqId - FAQ item ID
 * @param {string} questionText - Question text
 */
export const trackFaqExpand = (faqId, questionText) => {
  trackEvent('fears_faq_expand', {
    event_category: 'emotional_engagement',
    faq_id: faqId,
    question_text: questionText
  });
};

/**
 * Track testimonial cards view (when visible for >2 seconds)
 * @param {number} cardsCount - Number of cards viewed
 * @param {number} viewDuration - How long cards were visible (seconds)
 */
export const trackTestimonialView = (cardsCount, viewDuration) => {
  trackEvent('testimonial_cards_view', {
    event_category: 'emotional_engagement',
    cards_count: cardsCount,
    view_duration: viewDuration,
    value: viewDuration
  });
};

/**
 * Track breathing animation view (10+ seconds)
 * @param {number} durationSeconds - Viewing duration
 */
export const trackBreathingView = (durationSeconds = 10) => {
  trackEvent('breathing_animation_view', {
    event_category: 'emotional_engagement',
    duration_seconds: durationSeconds,
    value: 1
  });
};

/**
 * Track H1 variant shown (A/B test)
 * @param {number} variantIndex - Variant index (0, 1, 2)
 * @param {string} variantText - H1 text shown
 */
export const trackH1Variant = (variantIndex, variantText) => {
  trackEvent('h1_variant_shown', {
    event_category: 'ab_test',
    variant_index: variantIndex,
    variant_text: variantText,
    page: 'homepage'
  });
};

/**
 * Track scroll depth milestones
 * @param {number} percentage - Scroll depth percentage (25, 50, 75, 100)
 */
export const trackScrollDepth = (percentage) => {
  trackEvent('scroll_depth', {
    event_category: 'engagement',
    scroll_percentage: percentage,
    page_location: window.location.pathname
  });
};

/**
 * Track time on page milestones
 * @param {number} seconds - Time spent on page
 */
export const trackTimeOnPage = (seconds) => {
  const milestone = seconds >= 120 ? '120+' : 
                    seconds >= 60 ? '60s' : 
                    seconds >= 30 ? '30s' : '10s';
  
  trackEvent('time_on_page', {
    event_category: 'engagement',
    time_milestone: milestone,
    time_seconds: seconds,
    page_location: window.location.pathname
  });
};

/**
 * Track emotional section view (when scrolled into view)
 * @param {string} sectionName - Name of the emotional section
 */
export const trackEmotionalSection = (sectionName) => {
  trackEvent('emotional_section_view', {
    event_category: 'emotional_engagement',
    section_name: sectionName,
    page_location: window.location.pathname
  });
};

/**
 * Track personality test click
 * @param {string} page - Page where click happened
 */
export const trackTestClick = (page = window.location.pathname) => {
  trackEvent('test_personality_click', {
    event_category: 'conversion',
    page: page,
    value: 1
  });
};