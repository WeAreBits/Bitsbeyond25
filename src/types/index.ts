export type NavItem = {
  id: string;
  parentId: string | null;
  label: string | null;
  uri: string;
  children: NavItem[];
};

export type HeaderProps = {
  navs: NavItem[];
};
