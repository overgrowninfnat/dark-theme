import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function Home() {
 const { theme, setTheme } = useTheme()
 const [mounted, setMounted] = useState(false)

 useEffect(() => setMounted(true), [])

 if (!mounted) return null
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      The current theme is: {theme}
      <button onClick={() => setTheme('light')}>Light Mode</button>
      <button onClick={() => setTheme('dark')}>Dark Mode</button>
    </div>
  )
}
