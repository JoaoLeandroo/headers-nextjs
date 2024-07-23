import { headers } from "next/headers";

export default function Home() {
  const headersList = headers()
  const referer = headersList.get('referer')

  const ip = headers().get("x-forwarded-for")

  const port = headers().get("x-forwarded-port")
  const host = headers().get("x-forwarded-host")
  const protocolo = headers().get("x-forwarded-proto")
  
  return (
    <main className="max-w-[1280px] mx-auto px-4 md:px-20 flex items-center justify-center">
      <div className="mt-8 flex flex-col">
        <span className="font-semibold mt-2 text-lg">IP: {ip}</span>
        <span className="font-semibold mt-2 text-lg">Referer: {referer}</span>
        <span className="font-semibold mt-2 text-lg">Porta: {port}</span>
        <span className="font-semibold mt-2 text-lg">Host: {host}</span>
        <span className="font-semibold mt-2 text-lg">Protocolo: {protocolo}</span>
      </div>
    </main>
  );
}

