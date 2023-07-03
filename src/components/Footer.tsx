import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-gray-100 p-4">
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                    <Image 
                        src="/next.svg"
                        alt="Portfolio"
                        width={110}
                        height={60}
                    />
                    <p className="max-w-sm">Share and let's everyone know your portfolio</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;