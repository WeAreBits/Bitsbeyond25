import { NavItem } from "@/types";

type FlatListOptions = {
  idKey?: string;
  parentKey?: string;
  childrenKey?: string;
};

const flatListToHierarchical = (
  data: Partial<NavItem>[] = [],
  {
    idKey = "id",
    parentKey = "parentId",
    childrenKey = "children",
  }: FlatListOptions = {}
): NavItem[] => {
  const tree: NavItem[] = [];
  const childrenOf: Record<string, NavItem[]> = {};

  data.forEach((item) => {
    const id = String(item[idKey as keyof NavItem] || item.id || "");
    const parentId = (item[parentKey as keyof NavItem] ?? item.parentId) as string | null;

    if (!childrenOf[id]) {
      childrenOf[id] = [];
    }

    const newItem: NavItem = {
      id: String(item.id || id),
      parentId: item.parentId ?? parentId,
      label: item.label ?? null,
      uri: String(item.uri || ""),
      children: childrenOf[id],
    };

    if (parentId) {
      if (!childrenOf[parentId]) {
        childrenOf[parentId] = [];
      }
      childrenOf[parentId].push(newItem);
    } else {
      tree.push(newItem);
    }
  });

  return tree;
};

export default flatListToHierarchical;