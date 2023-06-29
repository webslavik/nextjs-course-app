import BasicHeader from '@/components/BasicHeader'
import BasicFooter from '@/components/BasicFooter'
import './globals.css'

export const metadata = {
    title: 'Next App',
    description: 'Course project for Next.js',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <BasicHeader/>

                <main>
                    {children}
                </main>

                <BasicFooter/>
            </body>
        </html>
    )
};
