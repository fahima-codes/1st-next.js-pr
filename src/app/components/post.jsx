import Link from 'next/link';

const Post = ({ post }) => {
  const { id, title, description, author, category, date, image } = post;

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={title} className="w-full h-52 object-cover" />
      </figure>

      <div className="card-body">
        <div className="badge badge-primary">{category}</div>

        <h2 className="card-title">{title}</h2>

        <p>{description}</p>

        <div className="text-sm">
          <p>Author: {author}</p>
          <p>Date: {date}</p>
        </div>

        <div className="card-actions justify-end mt-4">
          <Link href={`/blogs/${id}`} className="btn btn-primary">
            Show Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
