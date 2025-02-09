import { NextResponse } from "next/server"

export const blogs = [
{
  "id": "5",
  "title": "Artificial Intelligence: Shaping Tomorrow's World",
  "description": "Dive deep into the realm of artificial intelligence (AI) and its transformative influence on industries, society, and our daily lives. Explore machine learning, natural language processing, and the ethical considerations surrounding AI development.",
  "publish_date": "2025-03-05",
  "author_name": "Samin Israr Ravi",
  "blog_image": "https://cdn.bulbapp.io/frontend/images/c503fc5c-bebd-4985-8400-3b5b3259405e/1",
  "total_likes": "1350"
},
{
  "id": "6",
  "title": "Cybersecurity in the Digital Age",
  "description": "Navigate the evolving landscape of cybersecurity and the critical role it plays in safeguarding digital assets. From advanced threat detection to ethical hacking, this blog examines the strategies and technologies shaping the future of online security.",
  "publish_date": "2025-03-06",
  "author_name": "Mehedi Imun Anik",
  "blog_image": "https://startnearshoring.com/wp-content/uploads/2023/07/The_Growing_Importance_of_Cybersecurity.jpg",
  "total_likes": "950"
}
]
export const GET = async () => {
    return NextResponse.json(blogs);
}

export const POST = async (request: Request ) => {
    const blog = request.json();
    const newBlog = {
        ...blog,
        id: blogs.length + 1,
    };
    blogs.push(newBlog);
    return new NextResponse(JSON.stringify(newBlog), {
        status: 2001,
        headers: {
            'Content-type': 'application/json',
        }
    })
}