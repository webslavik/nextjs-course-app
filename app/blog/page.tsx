import { Metadata } from 'next';
import Link from 'next/link';

const getPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        next: {
            revalidate: 60,
        }
    });

    if (!response.ok) {
        throw new Error('Something went wrong');
    }

    return response.json();
};

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Blog page',
};

const Blog = async () => {
    const posts = await getPosts();

    return (
        <div>
            <h1>Blog</h1>

            <ul>
                {posts.map((post: any) => (
                    <li key={post.id}>
                        <Link href={`/blog/${post.id}`}>
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default Blog;
