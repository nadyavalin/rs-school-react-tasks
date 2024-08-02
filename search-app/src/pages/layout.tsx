import LayoutComponent from "@/components/layoutComponent/layoutComponent";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <LayoutComponent>{children}</LayoutComponent>;
}
