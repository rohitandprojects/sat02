
import { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import { usePostsForm } from '../contexts/PostsFormContext';
const ReactQuill = dynamic(() => import ('react-quill'), { ssr: false });

const modules = {
    toolbar: {
        container: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ size: ['extra-small', 'small', 'medium', 'large'] }],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image', 'video'],
            [{ color: [] }, { background: [] }], 
            ['clean'],
        ],
    },
};
export function RTEField4() {
    //const [content, setContent] = useState();
    const { data, handleData } = usePostsForm();
    const handleChange = (value) => {
        handleData('content4', value);
        //setContent(value);
    };

    return (
        <div>
            <div className="rich-editor">{data?.content4}</div>
            <ReactQuill
                value={data?.content4}
                onChange={handleChange}
                modules={modules}
                placeholder="Enter your content here..."
            />
        </div>
    );
}