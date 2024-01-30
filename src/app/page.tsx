import { paldeck } from '~/app/paldeck'
import {
  Alert,
  AlertDescription,
  AlertTitle,
  BreedingCombinations,
  Combobox,
  CompatibleParentSortButton
} from '~/app/components'
import { InfoCircledIcon } from '@radix-ui/react-icons'
import { isBreedingException } from '~/util'

export default function HomePage({
  searchParams
}: {
  searchParams?: Record<string, string | string[] | undefined>
}) {
  const targetPal =
    paldeck.find((pal) => pal.name === searchParams?.target) ?? null
  const sortDirection = searchParams?.sort as 'asc' | 'desc' | null

  function Title() {
    if (!targetPal) return null

    return (
      <div className="flex items-center gap-1">
        <h2 className="font-bold tracking-tight md:text-xl">
          Compatible Parents
        </h2>
        <CompatibleParentSortButton />
      </div>
    )
  }

  function ExceptionAlert() {
    if (!targetPal || !isBreedingException(targetPal)) return null

    return (
      <Alert>
        <InfoCircledIcon className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          <span className="font-medium tracking-tight">{targetPal.name}</span>{' '}
          is a special Pal that can only be bred with specific parents. The
          parents listed below are the only possible combination(s).
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
        <form>
          <Combobox
            id="child-selector"
            selected={targetPal}
          />
        </form>
        <Title />
        <ExceptionAlert />
        <BreedingCombinations
          targetPal={targetPal}
          sortDirection={sortDirection}
        />
      </div>
    </main>
  )
}
