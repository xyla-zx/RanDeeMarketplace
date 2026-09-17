export type Locale = 'th' | 'en'

export const defaultLocale: Locale = 'th'

export const locales: Locale[] = ['th', 'en']

export function getDirection(locale: Locale): 'ltr' | 'rtl' {
  return 'ltr'
}

export function formatCurrency(amountSatang: number, locale: Locale = 'th'): string {
  const baht = amountSatang / 100
  return new Intl.NumberFormat(locale === 'th' ? 'th-TH' : 'en-US', {
    style: 'currency',
    currency: 'THB',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(baht)
}

export function formatDate(date: Date | string, locale: Locale = 'th', options?: Intl.DateTimeFormatOptions): string {
  const d = typeof date === 'string' ? new Date(date) : date
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  const opts = options ?? (locale === 'th' ? { ...defaultOptions, calendar: 'buddhist' } : defaultOptions)
  return new Intl.DateTimeFormat(locale === 'th' ? 'th-TH' : 'en-US', opts).format(d)
}

export function formatRelativeTime(date: Date | string, locale: Locale = 'th'): string {
  const now = new Date()
  const d = typeof date === 'string' ? new Date(date) : date
  const diffMs = now.getTime() - d.getTime()
  const diffSecs = Math.floor(diffMs / 1000)
  const diffMins = Math.floor(diffSecs / 60)
  const diffHours = Math.floor(diffMins / 60)
  const diffDays = Math.floor(diffHours / 24)

  if (diffSecs < 60) return locale === 'th' ? 'เมื่อสักครู่' : 'Just now'
  if (diffMins < 60) return locale === 'th' ? `${diffMins} นาทีที่แล้ว` : `${diffMins}m ago`
  if (diffHours < 24) return locale === 'th' ? `${diffHours} ชั่วโมงที่แล้ว` : `${diffHours}h ago`
  if (diffDays < 7) return locale === 'th' ? `${diffDays} วันที่แล้ว` : `${diffDays}d ago`
  
  return formatDate(d, locale)
}
