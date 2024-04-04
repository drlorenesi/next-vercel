"use client";

import React, { ReactNode } from "react";
import Link from "next/link";
import cx from "clsx";
import { usePathname } from "next/navigation";
import {
  ActionIcon,
  AppShell,
  Avatar,
  Burger,
  Group,
  NavLink,
  Menu,
  Text,
  ThemeIcon,
  UnstyledButton,
  useMantineColorScheme,
  useComputedColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconAmpersand,
  IconGauge,
  IconGraph,
  IconLayoutGrid,
  IconLogout,
  IconForms,
  IconMoon,
  IconSun,
  IconUserCog,
} from "@tabler/icons-react";
// Components
import Footer from "./Footer";
// Styles
import navClasses from "./NavbarLinksGroup.module.css";
import shellClasses from "./Shell.module.css";

interface ShellProps {
  children: ReactNode;
  // Add any other props here
}

const Shell: React.FC<ShellProps> = ({ children, ...props }) => {
  // Toggle menu hooks
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  // Color scheme hooks
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  // Routing
  const pathname = usePathname();

  const closeMobileNavbar = () => {
    toggleMobile();
  };

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 250,
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
      {...props}
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Group>
            <Burger
              opened={mobileOpened}
              onClick={toggleMobile}
              hiddenFrom="sm"
              size="sm"
            />
            <Burger
              opened={desktopOpened}
              onClick={toggleDesktop}
              visibleFrom="sm"
              size="sm"
            />
            <Text
              size="xl"
              fw={900}
              variant="gradient"
              gradient={{ from: "blue", to: "violet", deg: 90 }}
            >
              Logo
            </Text>
          </Group>
          <Group gap="xs">
            <ActionIcon
              onClick={() =>
                setColorScheme(
                  computedColorScheme === "light" ? "dark" : "light"
                )
              }
              variant="default"
              size="lg"
              aria-label="Toggle color scheme"
            >
              <IconSun
                className={cx(shellClasses.icon, shellClasses.light)}
                stroke={1.5}
              />
              <IconMoon
                className={cx(shellClasses.icon, shellClasses.dark)}
                stroke={1.5}
              />
            </ActionIcon>
            <Menu shadow="md" width={200} position="bottom-end">
              <Menu.Target>
                <UnstyledButton>
                  <Avatar color="cyan" radius="xl" />
                </UnstyledButton>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item
                  leftSection={
                    // <IconUserCog style={{ width: rem(14), height: rem(14) }} />
                    <IconUserCog style={{ width: "65%", height: "65%" }} />
                  }
                >
                  Mi Perfil
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item
                  leftSection={
                    // <IconLogout style={{ width: rem(14), height: rem(14) }} />
                    <IconLogout style={{ width: "65%", height: "65%" }} />
                  }
                >
                  Cerrar Sesión
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Group>
        </Group>
      </AppShell.Header>
      {/* NAVBAR */}
      {/* ------ */}
      <AppShell.Navbar p="md">
        <NavLink
          component={Link}
          href="/"
          label="Dashboard"
          leftSection={
            <ThemeIcon variant="light" color="" size={30}>
              <IconGauge style={{ width: "65%", height: "65%" }} />
            </ThemeIcon>
          }
          childrenOffset={28}
          onClick={closeMobileNavbar}
          active={pathname === "/"}
          className={navClasses.control}
        />
        <NavLink
          label="Forms"
          leftSection={
            <ThemeIcon variant="light" color="grape" size={30}>
              <IconForms style={{ width: "65%", height: "65%" }} />
            </ThemeIcon>
          }
          childrenOffset={28}
          className={navClasses.control}
        >
          <NavLink
            component={Link}
            href="/forms/dates"
            label="Dates"
            onClick={closeMobileNavbar}
            active={pathname === "/forms/dates"}
            className={navClasses.navLink}
          />
          <NavLink
            component={Link}
            href="/forms/numbers"
            label="Numbers"
            onClick={closeMobileNavbar}
            active={pathname === "/forms/numbers"}
            className={navClasses.navLink}
          />
          <NavLink
            component={Link}
            href="/forms/text"
            label="Text"
            onClick={closeMobileNavbar}
            active={pathname === "/forms/text"}
            className={navClasses.navLink}
          />
        </NavLink>
        <NavLink
          label="Charts"
          leftSection={
            <ThemeIcon variant="light" color="indigo" size={30}>
              <IconGraph style={{ width: "65%", height: "65%" }} />
            </ThemeIcon>
          }
          childrenOffset={28}
          className={navClasses.control}
        >
          <NavLink
            component={Link}
            href="/charts/chart1"
            label="Chart 1"
            onClick={closeMobileNavbar}
            active={pathname === "/charts/chart1"}
            className={navClasses.navLink}
          />
          <NavLink
            component={Link}
            href="/charts/chart2"
            label="Chart 2"
            onClick={closeMobileNavbar}
            active={pathname === "/charts/chart2"}
            className={navClasses.navLink}
          />
        </NavLink>
        <NavLink
          label="Layouts"
          leftSection={
            <ThemeIcon variant="light" color="cyan" size={30}>
              <IconLayoutGrid style={{ width: "65%", height: "65%" }} />
            </ThemeIcon>
          }
          childrenOffset={28}
          className={navClasses.control}
        >
          <NavLink
            component={Link}
            href="/layouts/layout1"
            label="Layout 1"
            onClick={closeMobileNavbar}
            active={pathname === "/layouts/layout1"}
            className={navClasses.navLink}
          />
          <NavLink
            component={Link}
            href="/layouts/layout2"
            label="Layout 2"
            onClick={closeMobileNavbar}
            active={pathname === "/layouts/layout2"}
            className={navClasses.navLink}
          />
        </NavLink>
        <NavLink
          component={Link}
          href="/about"
          label="About"
          leftSection={
            <ThemeIcon variant="light" color="gray" size={30}>
              <IconAmpersand style={{ width: "65%", height: "65%" }} />
            </ThemeIcon>
          }
          childrenOffset={28}
          onClick={closeMobileNavbar}
          active={pathname === "/about"}
          className={navClasses.control}
        />
        {/* END NAVLINKS */}
        {/* ------------ */}
      </AppShell.Navbar>
      <AppShell.Main
        style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <div style={{ flex: 1 }}>{children}</div>

        <Footer />
      </AppShell.Main>
    </AppShell>
  );
};

export default Shell;
