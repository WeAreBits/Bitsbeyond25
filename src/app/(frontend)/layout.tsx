import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "NairoBits Trust",
  description:
    "A Kenyan non profit organization that uses ICT to deliver social and economic chnage to young people and other disadvanted groups from under resourced background",
};

function layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      <>{children}</>
      <Footer />
    </>
  );
}

export default layout;
