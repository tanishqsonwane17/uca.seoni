import React from "react";
import founderImg from "../assets/clg1.jpg"; // Make sure to put the image in 'src/assets' folder and rename accordingly

const About = () => {
  return (
    <div className="bg-white text-gray-800 p-6 md:p-12 font-sans">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
        About Universal Computer Academy
      </h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">College Information</h2>
        <p className="text-lg">
          Universal Computer Academy is a well-established institution located in Barapather, Seoni, Madhya Pradesh. 
          The academy is recognized by **Makhanlal Chaturvedi National University of Journalism and Communication, Bhopal**.
          Since its establishment, the academy has been dedicated to providing quality education in the field of computer science.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">Courses Offered</h2>
        <ul className="list-disc pl-5 text-lg">
          <li>Tally</li>
          <li>DCA (Diploma in Computer Applications)</li>
          <li>BCA (Bachelor of Computer Applications)</li>
          <li>PGDCA (Post Graduate Diploma in Computer Applications)</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">Environment & Facilities</h2>
        <p className="text-lg">
          The college offers a peaceful learning environment equipped with experienced faculty, computer labs, study resources,
          and extracurricular activities including music and creative events to promote all-round development.
        </p>
      </section>

      <section className="mb-10 flex flex-col md:flex-row items-center gap-6">
        <img
          src={founderImg}
          alt="Founder Abhay Nigam Ji"
          className="w-full md:w-72 rounded-lg shadow-lg border-4 border-blue-400"
        />
        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Our Inspiration: Late Abhay Nigam Ji</h2>
          <p className="text-lg">
            (1969–2021)  
            <br />
            Universal Computer Academy was founded by **Late Abhay Nigam Ji**, whose vision and efforts helped countless students
            receive computer education in Barapather, Seoni. His dream was to make technical education accessible to rural and semi-urban students.
            Today, his legacy continues to inspire students and faculty alike.
          </p>
        </div>
      </section>

      <footer className="text-center mt-10 text-sm text-gray-500">
        © {new Date().getFullYear()} Universal Computer Academy, Barapather, Seoni (M.P.)
      </footer>
    </div>
  );
};

export default About;
