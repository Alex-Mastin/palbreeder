import { type Pal, type SortDirection } from '~/types'
import { exceptions, paldeck } from '~/app/paldeck'
import { isBreedingException } from '~/util'
import Image from 'next/image'

type BreedingCombinationsProps = {
  targetPal: Pal | null
  sortDirection: SortDirection
}

function getBreedingCombinations(pal: Pal | null) {
  if (!pal) return []

  if (isBreedingException(pal)) {
    return [
      exceptions
        .get(pal.name)
        ?.map((parent) => paldeck.find((pal) => pal.name === parent))
    ] as Pal[][]
  }

  const { breedingPower } = pal
  let closestMatches = [] as Pal[][]
  let closestDifference = Infinity

  paldeck.forEach((parentA, indexA) => {
    paldeck.forEach((parentB, indexB) => {
      if (indexA <= indexB) {
        const average = (parentA.breedingPower + parentB.breedingPower) / 2

        const difference = Math.abs(breedingPower - average)
        if (difference < closestDifference) {
          closestDifference = difference
          closestMatches = [[parentA, parentB]]
        } else if (difference === closestDifference) {
          closestMatches.push([parentA, parentB])
        }
      }
    })
  })

  return closestMatches
}

function BreedingCombinations(props: BreedingCombinationsProps) {
  const combinations = getBreedingCombinations(props.targetPal)

  if (props.sortDirection) {
    combinations.sort((a, b) => {
      const minPowerA = Math.min(a[0]!.breedingPower, a[1]!.breedingPower)
      const minPowerB = Math.min(b[0]!.breedingPower, b[1]!.breedingPower)
      return props.sortDirection === 'asc'
        ? minPowerA - minPowerB
        : minPowerB - minPowerA
    })
  }

  return (
    <>
      {combinations.map((combination, index) => (
        <div
          key={index}
          className="grid grid-cols-[1fr,1fr] rounded-md border px-6 py-3 shadow-sm"
        >
          {combination.map((pal, index) => (
            <div
              key={index}
              className="flex flex-col items-center"
            >
              <Image
                className="h-8 w-8 rounded-full border lg:h-12 lg:w-12"
                src={`/${pal.name}.webp`}
                alt={pal.name}
                width={50}
                height={50}
                title={pal.name}
              />
              <div className="flex gap-1 text-sm">
                <span className="font-medium tracking-tight">{pal.name}</span>
                <span className="font-regular tabular-nums text-muted-foreground">
                  #{pal.paldeckNumber}
                </span>
              </div>
              <div className="mt-3 flex flex-col items-center text-sm">
                <span className="text-xl font-medium tabular-nums leading-tight tracking-tighter">
                  {pal.breedingPower}
                </span>
                <span className="text-xs font-medium text-muted-foreground">
                  Breeding power
                </span>
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  )
}

export { BreedingCombinations }
