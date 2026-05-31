import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KPI Tracker — Track Startup Growth KPIs Automatically",
  description: "Connect Stripe, Google Analytics, and databases to auto-track MRR, CAC, churn with real-time alerts and investor reports."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="7f9a69f2-999e-4805-b19a-77f74d3f139f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
