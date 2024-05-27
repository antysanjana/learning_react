import React, { useRef } from "react";
import { useEffect, useState } from "react";

const BASE_URL = "https://jsonplaceholder.typicode.com";

interface Post {
  id: number;
  title: string;
}

export default function Demo(){
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(0);

  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    abortControllerRef.current?.abort();
    abortControllerRef.current = new AbortController();

    setIsLoading(true);
    const fetchPosts = async () => {
      try{
        const response = await fetch(`${BASE_URL}/posts?page=${page}`,{
          signal: abortControllerRef.current?.signal,
        })
        const posts = (await response.json()) as Post[];
        setPosts(posts);
      }catch(e: any){
        if(e.name === 'AbortError'){
          console.log("Aborted");
          return;
        }

        setError(e);
      }finally{
        setIsLoading(false);
      }
    }

    fetchPosts();
  },[page])

  if(isLoading){
    return <div>Loading....</div>
  }

  if(error){
    return <div>Something went wrong. Please try again.</div>
  }

  return (
    <div>
      <h1>Data Fetching in React</h1>
      <button onClick={()=>setPage(page + 1)}>Increase Page ({page})</button>
      <ul>
        {posts.map((post) => {
          return <li key={post.id}>{post.title}</li>
        })} 
      </ul>      
    </div>
  )
}