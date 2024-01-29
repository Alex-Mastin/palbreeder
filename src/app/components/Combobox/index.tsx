'use client'

import * as React from 'react'

import { useMediaQuery } from '~/hooks'
import {
  Button,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  Drawer,
  DrawerContent,
  DrawerTrigger,
  Popover,
  PopoverContent,
  PopoverTrigger,
  SkeletonImage
} from '~/app/components'
import { type Pal } from '~/types'
import Image from 'next/image'
import { paldeck } from '~/app/paldeck'
import { CaretSortIcon } from '@radix-ui/react-icons'
import './styles.css'
import { cn } from '~/lib/utils'
import Link from 'next/link'

interface ComboboxProps {
  id?: string
  className?: string
  selected?: Pal | null
}

function Combobox(props: ComboboxProps) {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const [selected, setSelected] = React.useState<Pal | null>(
    props.selected ?? null
  )
  const label = 'Search...'

  function onSelect(value: string) {
    const pal =
      paldeck.find(
        (item) => item.name.toLowerCase() === value.split('||')[1]
      ) ?? null

    setSelected(pal)
    setOpen(false)

    // props.onSelect?.(pal)
  }

  if (isDesktop) {
    return (
      <Popover
        open={open}
        onOpenChange={setOpen}
      >
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn('w-full justify-between', props.className)}
          >
            {selected ? (
              <>
                <div className="grid grid-cols-[24px,auto,max-content,1fr] items-center gap-2">
                  <Image
                    className="rounded-full"
                    src={`/${selected.name}.webp`}
                    alt={selected.name}
                    width={24}
                    height={24}
                    title={selected.name}
                    priority={true}
                  />
                  {selected.name}
                  <div
                    className="flex gap-0.5"
                    title={selected.type.join('/')}
                  >
                    {selected.type.map((type, index) => (
                      <Image
                        key={index}
                        src={type ? `/${type}.webp` : ''}
                        alt={type}
                        width={16}
                        height={16}
                        priority={true}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex w-full justify-end">
                  <span
                    className="font-medium tabular-nums tracking-tighter text-muted-foreground"
                    title="Breeding power"
                  >
                    {selected.breedingPower}
                  </span>
                </div>
              </>
            ) : (
              label
            )}
            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          id={props.id}
          className="w-full p-0"
          align="start"
        >
          <PalList onSelect={onSelect} />
        </PopoverContent>
      </Popover>
    )
  }

  return (
    <Drawer
      open={open}
      onOpenChange={setOpen}
    >
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          className="w-full justify-between"
        >
          {selected ? (
            <>
              <div className="grid grid-cols-[24px,auto,max-content,1fr] items-center gap-2">
                <Image
                  className="rounded-full"
                  src={`/${selected.name}.webp`}
                  alt={selected.name}
                  width={24}
                  height={24}
                  title={selected.name}
                  priority={true}
                />
                {selected.name}
                <div
                  className="flex gap-0.5"
                  title={selected.type.join('/')}
                >
                  {selected.type.map((type, index) => (
                    <Image
                      key={index}
                      src={type ? `/${type}.webp` : ''}
                      alt={type}
                      width={16}
                      height={16}
                      priority={true}
                    />
                  ))}
                </div>
              </div>
              <div className="flex w-full justify-end">
                <span
                  className="font-medium tabular-nums tracking-tighter text-muted-foreground"
                  title="Breeding power"
                >
                  {selected.breedingPower}
                </span>
              </div>
            </>
          ) : (
            label
          )}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mt-4 border-t">
          <PalList onSelect={onSelect} />
        </div>
      </DrawerContent>
    </Drawer>
  )
}

function PalListItem(pal: Pal) {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  return (
    <>
      <span
        className="relative mr-4 tabular-nums text-muted-foreground"
        title="Paldeck number"
      >
        #{pal.paldeckNumber}
      </span>
      {isDesktop && (
        <SkeletonImage
          className="rounded-full"
          src={`/${pal.name}.webp`}
          alt={pal.name}
          width={24}
          height={24}
          title={pal.name}
          priority={pal.paldeckNumber <= 10}
          quality={25}
        />
      )}
      <span className="font-medium">{pal.name}</span>
      {isDesktop && (
        <div
          className="flex items-center gap-0.5"
          title={pal.type.join('/')}
        >
          {pal.type.map((type, index) => (
            <Image
              className="inline"
              key={index}
              src={type ? `/${type}.webp` : ''}
              alt={type}
              width={16}
              height={16}
              priority={true}
              quality={50}
            />
          ))}
        </div>
      )}
      <span
        className="flex w-full justify-end font-medium tabular-nums tracking-tighter text-muted-foreground"
        title="Breeding power"
      >
        {pal.breedingPower}
      </span>
    </>
  )
}

function PalList({ onSelect }: { onSelect: (value: string) => void }) {
  return (
    <Command>
      <CommandInput placeholder="Enter a name, type, or Paldeck number" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          {paldeck.map((pal) => (
            <Link
              href={`/?target=${pal.name}`}
              key={pal.name}
            >
              <CommandItem
                value={`${pal.paldeckNumber}||${pal.name}||${pal.type.join('')}`}
                onSelect={onSelect}
                className="grid grid-cols-[auto,auto,1fr] items-center gap-2 md:grid-cols-[32px,auto,auto,auto,1fr]"
              >
                <PalListItem {...pal} />
              </CommandItem>
            </Link>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  )
}

export { Combobox }
