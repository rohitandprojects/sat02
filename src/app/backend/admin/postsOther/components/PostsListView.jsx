"use client";

import { usePosts } from "@/app/lib/firebase/postOther/read";
import { hyphenToSpace } from "@/utils/transformName";
//import { useCategories } from "@/app/lib/firebase/category/read";
import Link from "next/link";

export default function PostsListView(){
    const { data, error, isLoading } = usePosts();
    
    if (isLoading){
        return <p className="loading">Loading...</p>
    }
    if (error){
        return <p className="loading error">Loading...</p>
    }
    if (!data){
        return <p className="loading error">Data not found!</p>
    }
    return <section>
        <table className="table">
            <thead>
            <tr>
                <th>Sr.</th>
                <th>Product</th>
                <th>Product Title</th>
                <th>Slug(URL)</th>
                <th>Category</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
        {
            data?.map((item, key) => {
                return  <><tr key={item.name}>
                    <td>{key + 1}</td>
                    <td><div className="product-imgs"><img src={item?.productURL} width="300" height="300" alt={item?.name}/></div></td>
                    <td>{item?.name}</td>
                    <td>{item?.slug}</td>
                    <td>{item?.categoryId}</td>
                    <td>
                        <Link href={`/backend/admin/postsOther/form?id=${item?.id}`} className="btn">EDIT</Link>
                        {/* {!item?.content4 && <Link href={`/backend/admin/postsOther/form?id=${item?.id}`} className="btn">EDIT</Link>}
                        {item?.content4 && <Link href={`/backend/admin/postsOther/form2?id=${item?.id}`} className="btn">EDIT</Link>} */}
                    </td>
            </tr>
            </> 
            })
        } 
        </tbody>
        </table>
    </section>
}