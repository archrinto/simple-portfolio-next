import Navbar from '@/components/Navbar';
import '../globals.css';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Portfolio',
    description: 'Create your application projects portfolio',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
            </head>
            <body>
                <Navbar />
                <main>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}
