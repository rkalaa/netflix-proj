import Link from 'next/link'
import Image from 'next/image'

export function NetflixHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-4 py-2 bg-gradient-to-b from-black to-transparent text-sm md:text-base lg:text-lg">
      <Link href="/">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix"
          width={92}
          height={25}
          className="w-16 sm:w-20 md:w-28 lg:w-36 xl:w-40"
        />
      </Link>
    </header>
  )
}
