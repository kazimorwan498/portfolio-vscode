import { Link } from "react-router-dom";

const Blog = () => {
	return (
		<section className="py-20 px-6 bg-gray-100">
			<div className="max-w-4xl mx-auto">
				<h2 className="text-3xl font-bold mb-6 text-gray-800">Blog</h2>
				<p className="text-lg text-gray-700">
					I occasionally write about web development tips, tutorials,
					and project walkthroughs. Stay tuned for updates!
				</p>
				<Link
					to="/blog"
					className="inline-block mt-4 text-blue-600 hover:underline"
				>
					View My Blog
				</Link>
			</div>
		</section>
	);
};

export default Blog;
