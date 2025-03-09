import { useMantineTheme } from "@mantine/core";

export default function Footer() {
  const theme = useMantineTheme();
  return (
    <div
      style={{
        height: 25,
        width: "100%",
        position: "fixed",
        bottom: 0,
        backgroundColor: theme.colors.gray[7],
        color: theme.colors.gray[5],
      }}
    >
      <center>&copy; 2023-2025 Erik Hollensbe. All Rights Reserved</center>
    </div>
  );
}
