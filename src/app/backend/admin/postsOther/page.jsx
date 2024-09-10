import Link from "next/link";
//import PostsListView from "./components/PostsListView";
import PostsListView from "@/app/backend/admin/postsOther/components/PostsListView";
//import CategoriesListView from '@/app/backend/admin/categories/components/CategoriesListView';

export default function Page(){
    return <main className="categories-page">
        <div className="d-flex w-100 justify-content-between add-categories align-items-center">
            <h3>Other Carousel Products</h3>
            <div>
                <Link href={'/backend/admin/postsOther/form'}>
                    <button className="btn position-relative">Add New Product</button>
                </Link>
            </div>
        </div>
        <section>
            <PostsListView></PostsListView>
        </section>
    </main>
}