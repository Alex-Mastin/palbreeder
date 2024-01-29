'use client'

import {
  GitHubLogoIcon,
  MoonIcon,
  SunIcon,
  TokensIcon
} from '@radix-ui/react-icons'
import { Button } from '~/app/components'
import { useTheme } from 'next-themes'

function AppHeader() {
  const { theme, setTheme } = useTheme()

  function toggleTheme() {
    const updatedTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(updatedTheme)
  }

  return (
    <header className="flex items-center justify-between p-6 pb-3">
      <div className="flex items-center gap-1.5 text-lg font-bold tracking-tighter">
        <TokensIcon className="h-6 w-6 text-primary" />
        Palbreeder
      </div>
      <div className="flex gap-3">
        <a
          href="https://github.com/Alex-Mastin/palbreeder/tree/main"
          target="_blank"
        >
          <Button
            variant="outline"
            size="icon"
            title="View source on GitHub"
          >
            <GitHubLogoIcon />
          </Button>
        </a>
        <Button
          variant="outline"
          size="icon"
          title="Toggle theme"
          onClick={toggleTheme}
        >
          <SunIcon className="hidden dark:block" />
          <MoonIcon className="dark:hidden" />
        </Button>
      </div>
    </header>
  )
}

export { AppHeader }
