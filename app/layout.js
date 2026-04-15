import "./globals.css";

export const metadata = {
    title: "Sneha Valavade | Frontend Developer",
    description: "Portfolio of Sneha Valavade — React & Next.js Developer",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
