import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className="bg-emerald-100 text-stone-800">
      <Navbar />
      <section className="flex flex-row items-center mx-20">
        <div className="container flex flex-col text-left">
          <h1 className="my-2 font-bold">Going to Kampung Inggris</h1>
          <p className="my-2">
            Membantu kamu untuk menemukan kursus di Kampung Inggris Pare yang
            sesuai dengan preferensimu
          </p>
        </div>
        <div className="w-full">
          <img src="/English.png" alt="Hero-section-logo"
            className="w-full" />
        </div>
      </section>

      <section className="features flex flex-col mx-20">
        <h1 className="flex justify-center text-center font-bold mb-8">Features</h1>
        <div className="flex flex-row my-4 justify-evenly">
          <div onClick={()=> navigate('/course-search')}
          className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
            <div className="flex flex-row items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
              <h5 className="mb-2 mx-4 text-2xl font-bold tracking-tight text-gray-900">
                Courses
              </h5>
            </div>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Banyak pilihan kursus yang terpilih untuk menambah pengalaman anda
              di Kampung Inggris
            </p>
          </div>
          <div onClick={()=> navigate('/ai-chat')}
          className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow ">
            <div className="flex flex-row items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
              </svg>
              <h5 className="mb-2 mx-4 text-2xl font-bold tracking-tight text-gray-900">
                ChatBot AI
              </h5>
            </div>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              ChatBot AI 24/7 siap membantu anda untuk menemukan kursus yang
              sesuai dengan preferensi anda
            </p>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="partner-container flex flex-col">
          <div className="flex justify-center text-center mx-auto my-2">
            <h1 className="flex justify-center text-center font-bold mb-8">Our Partner</h1>
          </div>
          <div className="flex flex-row h-[11rem] justify-around my-2">
            <img src="/Access.png" alt="Access" className="w-[325px]" />
            <img src="/brilliant.png" alt="Brilliant" className="w-[180px]" />
            <img src="/globalenglish.png" alt="GE" className="w-[400px]" />
          </div>
        </div>
      </section>
    </div >
  )
}

export default Home