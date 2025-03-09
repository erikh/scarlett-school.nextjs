"use client";
import { AppShell, AppShellHeader, AppShellMain, Button } from "@mantine/core";
import Link from "next/link";
import { useMantineTheme } from "@mantine/core";
import Footer from "../footer";

export default function NavBar({ children }) {
  const theme = useMantineTheme();
  return (
    <div>
      <AppShell header={{ height: 75 }} padding="md">
        <AppShellHeader
          style={{ height: 75, backgroundColor: theme.colors.red[5] }}
          className="header"
        >
          <div style={{ marginLeft: "auto", marginRight: "auto" }}>
            <span style={{ float: "left" }}>
              <Button
                style={{
                  fontSize: "1.5em",
                  backgroundColor: theme.colors.red[5],
                  height: 74,
                  borderRadius: 0,
                }}
                component={Link}
                href="/"
              >
                Scarlett School
              </Button>
            </span>
            <span style={{ float: "right" }}>
              <Button
                style={{
                  fontSize: "1.5em",
                  backgroundColor: theme.colors.red[5],
                  height: 74,
                  width: 200,
                  borderRadius: 0,
                }}
                component={Link}
                href="/lessons"
              >
                Lessons
              </Button>
              <Button
                style={{
                  fontSize: "1.5em",
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
                  fontSize: "1.5em",
                  backgroundColor: theme.colors.red[5],
                  height: 74,
                  width: 200,
                  borderRadius: 0,
                }}
                component={Link}
                href="/contact"
              >
                Contact
              </Button>
            </span>
          </div>
        </AppShellHeader>
        <AppShellMain>
          <div style={{ height: "100%" }}>{children}</div>
        </AppShellMain>
      </AppShell>
      <Footer />
    </div>
  );
}
