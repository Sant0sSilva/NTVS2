export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex ">
      <div className="flex border border-red-600 w-1/6 justify-center">
        <p>Sidebar</p>
      </div>
      <div className="border border-green-500 w-5/6">{children}</div>
    </div>
  );
}
