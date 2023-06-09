export const metadata = {
  title: "Create Next App",
  description: "Generated by Next.js",
};

export default function RootLayout({
  slot,
  secondSlot,
}: {
  slot: React.ReactNode;
  secondSlot: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ display: "flex", gap: 12 }}>
        <div>This is from layout</div>
        {slot}
        {secondSlot}
      </body>
    </html>
  );
}
