import ako from "../assets/ako.jpg";

const posts = [
  { title: "Profile Picture", img: ako, desc: "No matter what you do, I will always love you." },

];

export default function BodyContent() {
  return (
    <section className="max-w-6xl mx-auto py-10 px-4">
      <h2 className="centered-text">Latest Stories</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((post, idx) => (
          <div key={idx} className="bg-white rounded shadow hover:shadow-lg transition">
           <img src={post.img} alt={post.title} className="custom-img mx-auto rounded-t" />

            <div className="p-4">
              <h3 className="font-semibold text-lg">{post.title}</h3>
              <p className="text-gray-500 text-sm">{post.date}</p>
              <p className="text-gray-700 mt-2">{post.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
