import { Link } from "react-router-dom";
export default function Courses() {

    const courses = [
      {
        title: "BCA",
        tags: ["ON CAMPUS", "HINDI + ENGLISH"],
        price: 36000,
        oldPrice: 49000,
        discount: "29% OFF",
        badge: "3 YEARS",
        image: "https://banner2.cleanpng.com/20180630/kra/aayn1w6n6.webp",
        id : 'Bca-details'
      },
      {
        title: "DCA",
        tags: ["ON CAMPUS","HINDI + ENGLISH"],
        price: 36000,
        oldPrice: 4000,
        discount: "29% OFF",
        badge: "2 YEARS",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaQLoqDFvedjvbWseBwF9u4zRJ4PGvnUwUug&s",
        id:'Dca-details'
      },
      {
        title: "PGDCA",
        tags: ["ON CAMPUS","HINDI + ENGLISH"],
        price: 36000,
        oldPrice: 49000,
        discount: "50% OFF",
        badge: "2 YEARS",
        image: "https://imgs.search.brave.com/u-PzClkofDHSaphmUaGgy0JdY7fQYYyAnvpkOWHahVY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pY2Rk/ZS5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjEvMDMvUEct/RGlwbG9tYS1pbi1D/b21wdXRlci1BcHBs/aWNhdGlvbi1EaXN0/YW5jZS1MZWFybmlu/Zy5qcGc",
        id:'Pgdca-details'
      },
      {
        title: "PGDCA",
        tags: ["ON CAMPUS","HINDI + ENGLISH"],
        price: 36000,
        oldPrice: 49000,
        discount: "50% OFF",
        badge: "2 YEARS",
        image: "https://imgs.search.brave.com/u-PzClkofDHSaphmUaGgy0JdY7fQYYyAnvpkOWHahVY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pY2Rk/ZS5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjEvMDMvUEct/RGlwbG9tYS1pbi1D/b21wdXRlci1BcHBs/aWNhdGlvbi1EaXN0/YW5jZS1MZWFybmlu/Zy5qcGc",
        id:'Pgdca-details'
      },
    ];
  
    return (
      <>
      <div className="bg-[#9cf6fb] min-h-screen  py-10 px-4">
        <img src='' alt="Universal" />
        <h2 className="text-2xl font-semibold mb-6 mt-[2vw]">Courses which do work ↓</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16  w-[90vw] mx-[5vw]">
          {courses.map((course, index) => (
            <div key={index} className="bg-[#ffffffc2] rounded-xl overflow-hidden shadow-lg">
              <div className="relative">
                <img src={course.image}  alt={course.title} className="w-full h-48 object-cover " />
                <span className="absolute top-2 right-2 bg-white text-black text-xs font-bold px-2 py-1 rounded">
                  {course.badge}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-3xl tracking-wider text-gray-700 mb-2 mt-4 uppercase">{course.title}</h3>
                <div className="flex gap-2 mb-4">
                  {course.tags.map((tag, i) => (
                    <span key={i} className="bg-gray-700 text-white text-sm px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between mb-2 mt-16">
                  <div>
                    <p className="text-green-600 text-sm">Limited Time Discount</p>
                    <p className="text-xl font-semibold">₹{course.price} <span className="line-through text-gray-500 text-sm">₹{course.oldPrice}</span></p>
                  </div>
                  <span className="bg-white text-black text-sm px-2 py-1 rounded">{course.discount}</span>
                </div>
                
              </div>
              <Link to="/enrollment">              <button  className="w-full bg-teal-400 text-black font-semibold py-2 rounded mt-8  hover:bg-teal-300">
                  View Details
                </button>
                </Link>

            </div>
          ))}
        </div>
      </div>
      </>
    );
  }
  