import Link from "next/link";
import OtherListView from '@/app/backend/admin/categoryOther/components/OtherListView';

export default function Page(){
    return <main className="categories-page">
         
        <div className="d-flex w-100 justify-content-between add-categories align-items-center">
            <h3>Other Carousel</h3>
            <Link href={'/backend/admin/categoryOther/form'}>
                <button className="btn position-relative">Add</button>
            </Link>
        </div>
        <section>
            <OtherListView></OtherListView>
        </section>
    </main>
}