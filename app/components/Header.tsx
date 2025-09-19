import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@heroui/react";
import ModeSelector from "./ModeSelector";

export default function Header() {
  return (
    <Navbar
      style={{
        alignItems: "center",
        background: "var(--header-background)",
        display: "flex",
        fontSize: "18pt",
        fontWeight: "600",
        height: "80px",
        justifyContent: "space-between",
        padding: "12px",
        width: "100% !important",
        zIndex: "100",
      }}
      maxWidth="full"
    >
      <NavbarBrand>
        <p className="font-bold text-gray-50 text-2xl">Next.js / Hero UI App</p>
      </NavbarBrand>
      <NavbarContent
        className="flex gap-8"
        justify="center"
      >
        <NavbarItem>
          <Link
            color="foreground"
            href="#"
            style={{ fontSize: "15pt" }}
          >
            Features
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#"
            style={{ fontSize: "15pt" }}
          >
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#"
            style={{ fontSize: "15pt" }}
          >
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ModeSelector />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link
            href="#"
            color="foreground"
          >
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            color="default"
            href="#"
            variant="flat"
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
