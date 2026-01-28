import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import flatListToHierarchical from "@/lib/flat";


export const metadata: Metadata = {
  title: "NairoBits Trust",
  description:
    "A Kenyan non profit organization that uses ICT to deliver social and economic chnage to young people and other disadvanted groups from under resourced background",
};

async function layout({ children }: Readonly<{ children: React.ReactNode }>) {
  const query = `
  {
    topMenu:menuItems(where: {location: PRIMARY}, first:30) {
    nodes {
      id
      parentId
      label
      uri
    }
  }
  
  }
  `;
  const res = await fetch(
    `${process.env.WORDPRESS_API_URL}?query=${encodeURIComponent(query)}`,
    {
      headers: { "Content-Type": "application/json" },
      next: { revalidate: 60 },
    },
  );

  const data = await res.json();
  const topNav = data?.data?.topMenu?.nodes;

  // console.log(topNav)

  const mainMenu = flatListToHierarchical(topNav);
  return (
    <>
      <Header navs={mainMenu} />
      <>{children}</>
      <Footer />
    </>
  );
}

export default layout;
