'use client'

import { Button } from '~/app/components'
import {
  CaretDownIcon,
  CaretSortIcon,
  CaretUpIcon
} from '@radix-ui/react-icons'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

function CompatibleParentSortButton() {
  const searchParams = useSearchParams()
  const sortDirection = searchParams.get('sort')

  const params = new URLSearchParams(searchParams.toString())

  if (params.has('sort')) {
    const sort = params.get('sort')

    if (sort !== 'asc' && sort !== 'desc') {
      params.delete('sort')
    } else {
      params.set('sort', sortDirection === 'desc' ? 'asc' : 'desc')
    }
  } else {
    params.append('sort', 'desc')
  }

  return (
    <Link href={`/?${params.toString()}`}>
      <Button
        variant="ghost"
        size="icon"
        title="Sort direction"
      >
        {sortDirection === null && <CaretSortIcon />}
        {sortDirection === 'desc' && <CaretDownIcon />}
        {sortDirection === 'asc' && <CaretUpIcon />}
      </Button>
    </Link>
  )
}

export { CompatibleParentSortButton }
