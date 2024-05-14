import { LayoutProps } from "@/layouts/default"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const defaultMetadata: LayoutProps['meta'] = {
  title: 'Standaard Events',
  favicon: '/img/favicon.png',
  description: 'This platform was built by the Cloud Ones Agency'
}
