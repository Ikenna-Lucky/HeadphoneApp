import blog1 from "../../assets/blogs/blog1.jpg";
import blog2 from "../../assets/blogs/blog2.jpg";
import blog3 from "../../assets/blogs/blog3.jpg";
import blog4 from "../../assets/blogs/blog4.jpg";
import { motion } from "framer-motion";
import { UpdateFollower } from "react-mouse-follower";

const blogData = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, in!",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio exercitationem voluptatibus accusantium pariatur minima deserunt sapiente quibusdam dolorum temporibus? In doloribus cupiditate praesentium vel nesciunt!",
    link: "#",
    img: blog1,
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, in!",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio exercitationem voluptatibus accusantium pariatur minima deserunt sapiente quibusdam dolorum temporibus? In doloribus cupiditate praesentium vel nesciunt!",
    link: "#",
    img: blog2,
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, in!",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio exercitationem voluptatibus accusantium pariatur minima deserunt sapiente quibusdam dolorum temporibus? In doloribus cupiditate praesentium vel nesciunt!",
    link: "#",
    img: blog3,
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, in!",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio exercitationem voluptatibus accusantium pariatur minima deserunt sapiente quibusdam dolorum temporibus? In doloribus cupiditate praesentium vel nesciunt!",
    link: "#",
    img: blog4,
  },
];

const Blogs = () => {
  return (
    <section className="bg-gray-50">
      <div className="container py-14">
        <h1 className="text-3xl text-center font-bold font-poppins pb-8">
          Blogs
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {blogData.map((data) => {
            return (
              <UpdateFollower
                mouseOptions={{
                  backgroundColor: "black",
                  zIndex: 9999,
                  followSpeed: 1.5,
                  text: "read",
                  textFontSize: "3px",
                  scale: 5,
                }}
              >
                <div className="flex flex-col items-center justify-center gap-6 p-5 max-w-[300px] mx-auto shadow-lg rounded-md bg-white hover:translate-y-2 duration-300">
                  <img src={data.img} />
                  <div className="space-y-2">
                    <h1 className="text-xl font-bold line-clamp-2">
                      {data.title}
                    </h1>
                    <p className="line-clamp-2">{data.desc}</p>
                  </div>
                </div>
              </UpdateFollower>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
