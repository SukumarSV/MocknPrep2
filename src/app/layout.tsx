import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mock Test Platform',
  description: 'A platform for taking mock tests',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
            
            .roboto-regular {
              font-family: "Roboto", sans-serif;
              font-optical-sizing: auto;
              font-weight: 400;
              font-style: normal;
              font-variation-settings: "wdth" 100;
            }
            
            .roboto-medium {
              font-family: "Roboto", sans-serif;
              font-optical-sizing: auto;
              font-weight: 500;
              font-style: normal;
              font-variation-settings: "wdth" 100;
            }
            
            .roboto-bold {
              font-family: "Roboto", sans-serif;
              font-optical-sizing: auto;
              font-weight: 700;
              font-style: normal;
              font-variation-settings: "wdth" 100;
            }
          `}
        </style>
      </head>
      <body className="roboto-regular antialiased">{children}</body>
    </html>
  );
}
