import { ActionIcon, Container, Text } from "@mantine/core";
import { IconBrandGithub } from "@tabler/icons-react";
import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <Text size="sm" c="dimmed" className={classes.description}>
          &copy; {new Date().getFullYear()} Company.
        </Text>
        <div className={classes.content}>
          <Text size="sm" c="dimmed" className={classes.description}>
            v0.1.0 &beta; &nbsp;
          </Text>
          <ActionIcon
            variant="outline"
            color="grey"
            size="sm"
            radius="xl"
            component="a"
            href="https://github.com/drlorenesi"
            target="_blank"
          >
            <IconBrandGithub
              style={{ width: "70%", height: "70%" }}
              stroke={1.5}
            />
          </ActionIcon>
        </div>
      </Container>
    </footer>
  );
}
