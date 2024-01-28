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

export type { Pal }
