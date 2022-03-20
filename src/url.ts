export function isUrl(raw: string) {
  try {
    new URL(raw)
    return true
  } catch (e) {
    return false
  }
}
