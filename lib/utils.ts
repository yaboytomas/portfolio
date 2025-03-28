import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { track } from '@vercel/analytics';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Language utilities
export const getLocale = (): string => {
  // This is a simple implementation. In a real app, you might want to store this in cookies/localStorage
  return localStorage.getItem('locale') || 'es';
};

export const setLocale = (locale: string): void => {
  localStorage.setItem('locale', locale);
  // Force reload to apply language changes
  window.location.reload();
};

// Analytics tracking helper
export const trackUserEvent = (eventName: string, properties?: Record<string, any>): void => {
  track(eventName, properties);
};
