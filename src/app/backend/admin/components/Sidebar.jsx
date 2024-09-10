import Link from "next/link"

export default function Sidebar(){
    const link = [
        {
            name : 'Dashboard',
            link : '/backend/admin'
        },
        {
            name : 'Domestic Categories',
            link : '/backend/admin/categories'
        },
        {
            name : 'Domestic Products',
            link : '/backend/admin/posts'
        },
        {
            name : 'International Categories',
            link : '/backend/admin/categoriesInter'
        },
        {
            name : 'International Products',
            link : '/backend/admin/postsInter'
        },
        // {
        //     name : 'Other Category',
        //     link : '/backend/admin/categoryOther'
        // },
        // {
        //     name : 'Authors',
        //     link : '/backend/admin/authors'
        // },
        
    ]
    return <div className="sidebar-admin">
        <ul>
            {
                link.map((item) => {
                    return <li key={item.name}>
                        <Link href={item.link}>{item.name}</Link>
                    </li>
                })
            }
        </ul>
    </div>
}