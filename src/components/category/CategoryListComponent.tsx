"use client"
import { use } from "react";
import CategoryComponent, { CategoryInter } from "./CategoryComponent";

export default function CategoryListComponent({
  category,
}: {
  category: Promise<CategoryInter[]>;
}) {
  const categories = use(category);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {categories.map(({ id, name, image }) => (
        <CategoryComponent key={id} id={id} image={image} name={name} />
      ))}
    </div>
  );
}
