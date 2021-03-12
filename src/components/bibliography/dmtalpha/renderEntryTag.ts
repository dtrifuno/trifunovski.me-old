import { renderText } from '../utils'

export const renderDateOrUndefined = (
  month?: string,
  year?: string
): string | undefined => {
  if (month || year) {
    return [month, year].filter(Boolean).join(' ')
  }
  return undefined
}

export const renderEditionOrUndefined = (
  edition?: string
): string | undefined => {
  return edition ? `${renderText(edition)} ed.` : undefined
}

export const renderVolumeOrUndefined = (
  volume?: string
): string | undefined => {
  return volume ? `vol. ${renderText(volume)}` : undefined
}

export const renderNumberOrUndefined = (
  number?: string
): string | undefined => {
  return number ? `no. ${renderText(number)}` : undefined
}

export const renderChapterOrUndefined = (
  chapter?: string
): string | undefined => {
  return chapter ? `ch. ${renderText(chapter)}` : undefined
}

export const renderPagesOrUndefined = (pages?: string): string | undefined => {
  return pages ? `pp. ${renderText(pages)}` : undefined
}
