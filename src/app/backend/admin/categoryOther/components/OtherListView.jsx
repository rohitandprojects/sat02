"use client";

import { useCategoriesOther } from "@/app/lib/firebase/categoryOther/read";
import Link from "next/link";

export default function OtherListView(){
    const { data, error, isLoading } = useCategoriesOther();

    if (isLoading){
        return <p className="loading">Loading...</p>
    }
    if (error){
        return <p className="loading error">error...</p>
    }
    if (!data){
        return <p className="loading error">Data not found!</p>
    }
    return <section>
        <table className="table">
            <thead>
            <tr>
                <th>Sr. Test</th>
                <th>Icon</th>
                <th>Name</th>
                <th>Slug</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
        {
            data?.map((item, key) => {
                return <tr key={item.name}>
                    <th>{key + 1}</th>
                    <th><div className="product-imgs"><img src={item?.iconURL} width="300" height="300" alt={item?.name}/></div></th>
                    <th>{item?.name}</th>
                    <th>{item?.slug}</th>
                    <th><Link href={`/backend/admin/categoryOther/form?id=${item?.id}`} className="btn">Edit</Link></th>
                </tr>
            })
        }
        </tbody>
        </table>
    </section>
}