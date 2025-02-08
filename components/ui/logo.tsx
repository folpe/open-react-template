import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/images/Volpio_logo-white.svg'

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="Volpio">
      <Image src={logo} alt="volpio Logo" width={128} height={128} />
    </Link>
  )
}
