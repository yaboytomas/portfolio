import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

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
