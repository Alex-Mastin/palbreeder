'use server'

import { type SortDirection } from '~/types'
import { redirect } from 'next/navigation'

async function sort(formData: FormData) {
  const searchParams = JSON.parse(
    formData.get('searchParams') as string
  ) as Record<string, string | string[] | undefined>

  const sortDirection = searchParams.sort as SortDirection
  const params = new URLSearchParams()

  Object.keys(searchParams).map((key) => {
    if (key !== 'sort') {
      params.set(key, searchParams[key] as string)
    }
  })

  if (sortDirection) {
    params.set('sort', sortDirection === 'asc' ? 'desc' : 'asc')
  } else {
    params.set('sort', 'desc')
  }

  redirect(`/?${params.toString()}`)
}

export { sort }
