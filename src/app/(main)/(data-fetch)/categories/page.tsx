import { Suspense } from "react";
import CategoryListComponent from "@/src/components/category/CategoryListComponent";

export default async function CategoryPage() {

    const categoryPromise = fetch(`${process.env.NEXT_PUBLIC_FAKESTORE_API}/products`, {cache:"no-store"})
        .then((data)=> data.json())
        .then((category)=> {
            console.log(category);
            return category;
        })

    return (
        <div>
        <Suspense fallback={<p className="p-6 font-bold text-2xl">Loading products...</p>}>
            <CategoryListComponent category={categoryPromise} />
        </Suspense>
        </div>
  );
}