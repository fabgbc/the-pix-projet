import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

interface RouterContextValue {
  path: string;
  navigate: (to: string, options?: { replace?: boolean; scroll?: boolean }) => void;
  goBack: () => void;
}

const RouterContext = createContext<RouterContextValue | undefined>(undefined);

const sanitizePath = (path: string) => {
  if (!path) {
    return '/';
  }

  const normalized = path.startsWith('/') ? path : `/${path}`;

  if (normalized !== '/' && normalized.endsWith('/')) {
    return normalized.replace(/\/+/g, '/').replace(/\/$/, '');
  }

  return normalized.replace(/\/+/g, '/');
};

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [path, setPath] = useState(() => sanitizePath(window.location.pathname));

  useEffect(() => {
    const handlePopState = () => {
      setPath(sanitizePath(window.location.pathname));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = useCallback<RouterContextValue['navigate']>((to, options) => {
    const target = sanitizePath(to);

    if (options?.replace) {
      window.history.replaceState({}, '', target);
    } else {
      window.history.pushState({}, '', target);
    }

    setPath(target);

    if (options?.scroll !== false) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const goBack = useCallback(() => {
    window.history.back();
  }, []);

  const value = useMemo(() => ({ path, navigate, goBack }), [path, navigate, goBack]);

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
};

export const useRouter = () => {
  const context = useContext(RouterContext);

  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }

  return context;
};

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  replace?: boolean;
  scroll?: boolean;
}

export const Link: React.FC<LinkProps> = ({ to, replace, scroll, onClick, target, ...rest }) => {
  const { navigate } = useRouter();

  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = event => {
    onClick?.(event);

    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      target === '_blank' ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();
    navigate(to, { replace, scroll });
  };

  return <a href={to} target={target} onClick={handleClick} {...rest} />;
};

export const useIsActive = (candidate: string) => {
  const { path } = useRouter();
  return path === sanitizePath(candidate);
};

