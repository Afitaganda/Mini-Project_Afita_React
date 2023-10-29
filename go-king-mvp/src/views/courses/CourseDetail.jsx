import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';

const CourseDetail = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const courseData = location.state.value
  const whatsappLink = `https://wa.me/${courseData.contact.trim()}`

  const handleBack = () => {
    navigate('/course-search');
  };

  return (
    <div className="container mx-auto my-8 bg-emerald-100 h-screen text-stone-800">
      <Navbar />
      <div className="max-w-screen-xl m-auto p-8 flex flex-col items-center ">
        <h2 className="text-3xl font-bold mb-4">{courseData.title}</h2>
        <p>Type: {courseData.type}</p>
        <p>Duration: {courseData.duration}</p>
        <p>Accent: {courseData.accent}</p>
        <p>Facility: {courseData.facility}</p>
        <p>Description: {courseData.description}</p>
        <button >
          <a href={whatsappLink}
            className="text-slate-50">WhatsApp</a>
        </button>

        <button
          onClick={handleBack}
          className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 mt-4 w-2/5 rounded focus:outline-none focus:shadow-outline"
        >
          Back to Courses
        </button>
      </div>
    </div>
  );
};

export default CourseDetail;