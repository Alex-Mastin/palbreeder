import { type Pal } from '~/types'
import { exceptions, paldeck } from '~/app/paldeck'
import { Alert, AlertDescription, AlertTitle, Combobox } from '~/app/components'
import { InfoCircledIcon } from '@radix-ui/react-icons'
import Image from 'next/image'

function isException(pal: Pal | null) {
  if (!pal) return false

  return exceptions.has(pal.name)
}

function getBreedingCombinations(pal: Pal | null) {
  if (!pal) return []

  if (isException(pal)) {
    return [
      exceptions
        .get(pal.name)
        ?.map((parent) => paldeck.find((pal) => pal.name === parent))
    ] as Pal[][]
  }

  const { breedingPower } = pal
  let closestMatches = [] as Pal[][]
  let closestDifference = Infinity

  paldeck.forEach((parentA) => {
    paldeck.forEach((parentB) => {
      const average = (parentA.breedingPower + parentB.breedingPower) / 2

      const difference = Math.abs(breedingPower - average)
      if (difference < closestDifference) {
        closestDifference = difference
        closestMatches = [[parentA, parentB]]
      } else if (difference === closestDifference) {
        closestMatches.push([parentA, parentB])
      }
    })
  })

  return closestMatches
}

export default function HomePage({
  searchParams
}: {
  searchParams?: Record<string, string | string[] | undefined>
}) {
  const targetPal =
    paldeck.find((pal) => pal.name === searchParams?.target) ?? null

  function Title() {
    if (!targetPal) return null

    return (
      <h2 className="font-bold tracking-tight md:text-xl">
        Compatible Parents
      </h2>
    )
  }

  function ExceptionAlert() {
    if (!targetPal || !isException(targetPal)) return null

    return (
      <Alert>
        <InfoCircledIcon className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          <span className="font-medium tracking-tight">{targetPal.name}</span>{' '}
          is a special Pal that can only be bred with specific parents. The
          parents listed below are the only possible combinations.
        </AlertDescription>
      </Alert>
    )
  }

  return (
    <main>
      <div className="mx-auto flex h-full w-full flex-col gap-3 px-6 pb-3 lg:w-[50%] lg:gap-6 lg:px-0 lg:pb-6">
        <div className="flex flex-col items-center pb-3 pt-6 lg:gap-1.5">
          <h1 className="leading-tighter text-2xl font-bold tracking-tighter [text-wrap:balance] sm:text-4xl md:text-5xl lg:text-6xl/none">
            Find your{' '}
            <span className="text-primary underline underline-offset-2 md:underline-offset-8">
              perfect
            </span>{' '}
            combination
          </h1>
          <p className="text-sm leading-normal text-muted-foreground md:text-lg">
            Select the Pal you want to breed to get started
          </p>
        </div>
        <Combobox
          id="child-selector"
          selected={targetPal}
        />
        <Title />
        <ExceptionAlert />
        {getBreedingCombinations(targetPal).map((combination, index) => (
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
      </div>
    </main>
  )
}
