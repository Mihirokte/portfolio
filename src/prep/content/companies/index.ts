import type { Company } from './types'
import { goodscore } from './goodscore'

// Company Research registry. To add a company: write `<company>.ts` exporting a
// `Company`, import it here, and add it to this array. No component changes.
export const COMPANIES: Company[] = [goodscore]

export function findCompany(key: string): Company | undefined {
  return COMPANIES.find((c) => c.key === key)
}
