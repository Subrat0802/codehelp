import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate,  } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { baseUrl } from '../baseUrl';
import Header from '../components/Header';
import Card from '../components/Card';

const BlogPage = () => {
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/"
    const [blog, setBlog] = useState(null);
    const [relatedBlog, setRelatedBlog] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const {setLoading, loading} = useContext(AppContext);

    const blogId = location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs(){
        setLoading(true);
        let url = `${newBaseUrl}get-blog?blogId=${blogId}`
        try{
            const res = await fetch(url);
            const data = await res.jaon();
            setBlog(data.blog);
            setRelatedBlog(data.relatedBlogs);
        }
        catch(error){
            console.log("Error while calling Blog page");
            setBlog(null);
            setRelatedBlog([]);
        }
    }

    useEffect(() => {
        if(blogId) {
            fetchRelatedBlogs();
        }
    }, [location.pathname])
  return (
    <div>
        <Header />
        <div>
            <button onClick={() => navigation(-1)}>Back</button>
        </div>
        {
            loading ? 
            (<div>
                <p>Loading</p>
            </div>) : 
            blog ? 
            (<div>
                <Card post = {blog}/>
                <h2>Related Blogs</h2>
                {
                    relatedBlog.map((post) => {
                        <div key={post.id}>
                            <Card post={post}/>
                        </div>
                    })
                }
            </div>) :
            (<div>
                <p>No Blog Found</p>
            </div>)

        }
    </div>
  )
}

export default BlogPage