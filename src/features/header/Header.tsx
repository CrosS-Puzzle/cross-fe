import Link from 'next/link'
import Categories from '@/app/Category'

export default function Header() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 h-12 p-2 bg-neutral-800 flex justify-center items-center">
        <Link href="/">
          <h1 className="text-lg font-bold text-neutral-100">CS크로스 퍼즐</h1>
        </Link>
      </header>
    </>
  )
}
