import { useEffect } from 'react';

export interface PageMetadata {
  title: string;
  description: string;
  url: string;
  image?: string;
}

const updateMetaTag = (selector: string, attribute: 'content' | 'href', value: string) => {
  if (!value) {
    return;
  }

  let element = document.head.querySelector(selector) as HTMLMetaElement | HTMLLinkElement | null;

  if (!element) {
    if (selector.startsWith('meta[')) {
      element = document.createElement('meta');
      const match = selector.match(/\[(.+?)="(.+?)"\]/);

      if (match) {
        element.setAttribute(match[1], match[2]);
      }

      document.head.appendChild(element);
    } else if (selector.startsWith('link[')) {
      element = document.createElement('link');
      const match = selector.match(/\[(.+?)="(.+?)"\]/);

      if (match) {
        element.setAttribute(match[1], match[2]);
      }

      document.head.appendChild(element);
    }
  }

  element?.setAttribute(attribute, value);
};

export const usePageMetadata = ({ title, description, url, image }: PageMetadata) => {
  useEffect(() => {
    document.title = title;

    updateMetaTag('meta[name="description"]', 'content', description);
    updateMetaTag('meta[property="og:title"]', 'content', title);
    updateMetaTag('meta[property="og:description"]', 'content', description);
    updateMetaTag('meta[property="og:url"]', 'content', url);
    updateMetaTag('link[rel="canonical"]', 'href', url);

    updateMetaTag('meta[name="twitter:title"]', 'content', title);
    updateMetaTag('meta[name="twitter:description"]', 'content', description);
    updateMetaTag('meta[property="twitter:url"]', 'content', url);

    if (image) {
      updateMetaTag('meta[property="og:image"]', 'content', image);
      updateMetaTag('meta[property="twitter:image"]', 'content', image);
    }
  }, [title, description, url, image]);
};

