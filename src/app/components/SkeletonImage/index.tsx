'use client'

import { cn } from '~/lib/utils'
import Image from 'next/image'
import { type ComponentProps, useState } from 'react'

function SkeletonImage({ className, ...props }: ComponentProps<typeof Image>) {
  const [loading, setLoading] = useState(true)

  return (
    <Image
      className={cn(loading ? 'animate-pulse bg-border' : '', className)}
      onLoad={() => setLoading(false)}
      {...props}
    />
  )
}

export { SkeletonImage }
