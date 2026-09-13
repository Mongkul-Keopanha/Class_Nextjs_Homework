import { Suspense } from "react";
import CategoryListComponent from "@/src/components/category/CategoryListComponent";

// async function getCategories(){
//     try {
//         const res = await fetch('https://api.escuelajs.co/api/v1/categories', {
//             cache: "no-store"  // fetch យកទិន្នន័យថ្មី
//         });

//         if(!res.ok) throw new Error("Failed to fetch categories");

//         return await res.json();
//     } catch(err) {
//         console.error("Fetch Error:", err);
//         return[];  // បើ fetch បរាជ័យ បោះ Array ទទេការពារកុំឱ្យបែកផ្ទាំងក្រហម
//     }
// }

export default async function CategoryPage() {    
    const category = fetch(`${process.env.NEXT_PUBLIC_FAKESTORE_PLAZI_API}/categories`)
        .then((data)=> data.json())
        .then((category)=> {
            console.log(category);
            return category;
        })
        
    return (
        <div>
            <Suspense fallback={ <p className="p-6">Loading categories...</p> }>
                <CategoryListComponent category={category} />
            </Suspense>
        </div>
    );
}
