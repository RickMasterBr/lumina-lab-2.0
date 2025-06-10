import { Montserrat } from "next/font/google";
import "./globals.css";

import { LINKS_NAVEGACAO } from "@/constants";
import FundoAurora from "@/components/efeitos/FundoAurora";
import Cabecalho from "@/components/layout/Cabecalho";
import Rodape from "@/components/layout/Rodape";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Lúmina Lab",
  description: "Lúmina Lab: Inovação em Marketing Digital",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.className}>
        <FundoAurora />
        <div className="min-h-screen flex flex-col">
          <Cabecalho textoLogo="Lúmina Lab" linksNavegacao={LINKS_NAVEGACAO} />
          <main className="flex-grow relative z-10">{children}</main>
          <Rodape nomeEmpresa="Lúmina Lab" />
        </div>
      </body>
    </html>
  );
}
