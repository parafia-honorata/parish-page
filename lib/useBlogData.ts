import { useQuery } from "@tanstack/react-query";
import Config from "@/config";
import parse from "html-react-parser"
import { JSX } from "react";

interface BlogPost {
  kind: string;
  id: string;
  blog: {
    id: string
  };
  published: Date;
  updated: Date;
  url: string;
  selfLink: string;
  title: string;
  content: string
  author: {
    id: string;
    displayName: string;
    url: string;
    image: {
        url: string
    }
  };
  replies: {
    totalItems: string;
    selfLink: string
  };
  etag: string;
}


const useBlogData = (postId: string) => {
  const { data, isLoading, error } = useQuery<JSX.Element | string | JSX.Element[], Error>({
    queryKey: [`blog-${postId}`],
    queryFn: () => queryFunction(postId),
    refetchOnWindowFocus: false,
  });

  const queryFunction = async (postId: string) =>  {
    try {
        const response = await fetch(`https://www.googleapis.com/blogger/v3/blogs/${Config.blogger.blogKey}/posts/${postId}?fetchBody=true&fetchImages=false&key=${Config.blogger.apiKey}`, {
          method: 'get',
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json'
          })
        });
        if (!response.ok) {
        return Promise.reject(response.statusText);
        }
        const jsonResponse = await response.json() as BlogPost;
        return parse(jsonResponse?.content || "")
      
      } catch (error) {
        return Promise.reject(error);
      }
  }
  
  return {
    blogData: data,
    blogLoading: isLoading,
    BlogError: error,
  };
};

export default useBlogData;
