export function toTelHref(phoneTel) {
  const digits = phoneTel.replace(/[^\d+]/g, '')
  return `tel:${digits}`
}
