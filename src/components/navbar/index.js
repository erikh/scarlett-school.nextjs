"use client";
import { AppShell, AppShellHeader, AppShellMain, Button } from "@mantine/core";
import Link from "next/link";
import { useMantineTheme } from "@mantine/core";
import Footer from "../footer";

export default function NavBar({ children }) {
  const theme = useMantineTheme();
  return (
    <AppShell header={{ height: 75 }} padding="md">
      <AppShellHeader
        style={{ height: 75, backgroundColor: theme.colors.red[5] }}
      >
        <div
          style={{
            float: "left",
            width: "200px",
          }}
        >
          <Button
            style={{
              fontSize: 20,
              backgroundColor: theme.colors.red[5],
              height: 74,
              width: 200,
              borderRadius: 0,
            }}
            component={Link}
            href="/"
          >
            Scarlett School
          </Button>
        </div>
        <div style={{ float: "right", width: "600px" }}>
          <Button
            style={{
              fontSize: 20,
              backgroundColor: theme.colors.red[5],
              height: 74,
              width: 200,
              borderRadius: 0,
            }}
            component={Link}
            href="#"
          >
            Lessons
          </Button>
          <Button
            style={{
              fontSize: 20,
              backgroundColor: theme.colors.red[5],
              height: 74,
              width: 200,
              borderRadius: 0,
            }}
            component={Link}
            href="/about"
          >
            About
          </Button>
          <Button
            style={{
              fontSize: 20,
              backgroundColor: theme.colors.red[5],
              height: 74,
              width: 200,
              borderRadius: 0,
            }}
            component={Link}
            href="#"
          >
            Contact
          </Button>
        </div>
      </AppShellHeader>
      <AppShellMain>
        <div style={{ height: "100%" }}>{children}</div>
        <Footer />
      </AppShellMain>
    </AppShell>
  );
}
