type Props = {
    params: {
        id: string
    }
};

const getPost = async (id: string) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

    return response.json();
};

export const generateMetadata = ({params: {id}}: Props) => {
    return {
        title: id,
    }
};

const Post = async ({params: {id}}: Props) => {
    const post = await getPost(id);

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
};

export default Post;
