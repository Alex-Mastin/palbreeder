import { type Pal } from '~/types'
import { exceptions } from '~/app/paldeck'

function isBreedingException(pal: Pal | null) {
  if (!pal) return false

  return exceptions.has(pal.name)
}

function getTargetPal(pal: Pal | null) {
  if (!pal) return null

  return exceptions.get(pal.name)
}

export { isBreedingException }
