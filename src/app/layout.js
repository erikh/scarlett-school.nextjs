import "@mantine/core/styles.css";
import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";
import { Lusitana } from "next/font/google";
import "./globals.css";
import NavBar from "../components/navbar";

const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
      </head>
      <body className={`${lusitana.className} antialiased`}>
        <MantineProvider defaultColorScheme="auto">
          <NavBar>{children}</NavBar>
        </MantineProvider>
      </body>
    </html>
  );
}
