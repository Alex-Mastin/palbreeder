type PalType =
  | 'Neutral'
  | 'Water'
  | 'Fire'
  | 'Grass'
  | 'Ice'
  | 'Dark'
  | 'Ground'
  | 'Dragon'
  | 'Electric'

type Pal = {
  name: string
  paldeckNumber: number
  breedingPower: number
  type: PalType[]
}

type SortDirection = 'asc' | 'desc' | null

export type { Pal, SortDirection }
