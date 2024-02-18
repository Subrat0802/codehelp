import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";


//create context
export const AppContext = createContext();

function AppContextProvider({children}){
    const [loading, setLoading ]=useState(false);
    const [posts, setposts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

    //data filling pending
    const fetchBlogPost = async (page=1, tag=null, category) => {
        setLoading(true);
        let url= `${baseUrl}?page=${page}`;
        if(tag){
            url += `&tag=${tag}`
        }
        if(category){
            url += `&category=${category}`
        }
        
        const data = await fetch(url);
        const json = await data.json();
        console.log(json);
        setPage(json.page)
        setposts(json.posts);
        setTotalPages(json.totalPages)
        setLoading(false);
    }


    const handlePageChange = (page) => {
        setPage(page);
        fetchBlogPost(page)
    }

    const value = {
        posts,
        setposts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        handlePageChange,
        fetchBlogPost,
    };

    //Apply provider
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export default AppContextProvider;