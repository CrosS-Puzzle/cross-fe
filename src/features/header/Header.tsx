import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-12 p-2 bg-neutral-800 flex justify-center items-center z-50">
      <Link href="/">
        <h1 className="text-lg font-bold text-neutral-100">CS크로스 퍼즐</h1>
      </Link>
    </header>
  )
}
