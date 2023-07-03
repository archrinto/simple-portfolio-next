import Link from 'next/link';
import Image from 'next/image';
import { NavLinks } from '@/constants';
import AuthProvider from './AuthProvider';

const Navbar = () => {
    const session = null;

    return (
        <nav className="flex justify-between border-b px-4 py-3">
            <div className="flex gap-6">
                <Link href="/">
                    <Image
                        src="/next.svg"
                        alt="Portfolio"
                        width={110}
                        height={60}
                    />
                </Link>
                <ul className="xl:flex gap-6 hidden">
                    {NavLinks.map((link) => (
                        <Link
                            href={link.href}
                            key={link.key}
                        >
                            {link.text}
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="flex items-center gap-4">
                {session ? (
                    <>
                        UserPhoto
                        <Link href="/create-project">
                            Share Work
                        </Link>
                    </>
                ) : <AuthProvider /> }
            </div>
        </nav>
    )
}

export default Navbar;