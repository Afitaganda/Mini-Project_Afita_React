import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';

const CourseDetail = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const courseData = location.state.value
  const whatsappLink = `https://wa.me/${courseData.contact}`

  const handleBack = () => {
    navigate('/course-search');
  };

  return (
    <div className="bg-emerald-100 text-stone-800 min-h-screen">
      <Navbar />
      <div className="max-w-screen-xl m-auto p-8">
        <div className="flex flex-col items-center justify-between gap-2 mb-8">
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
    </div>
  );
};

export default CourseDetail;