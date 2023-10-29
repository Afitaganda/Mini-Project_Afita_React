import Navbar from '../../components/Navbar'
import CardCourses from '../../components/Card'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { AXIOS } from '../../utils/axiosInstance'
import { ENDPOINT } from '../../data/config'

const CourseSearch = () => {
  const navigate = useNavigate()

  const [isFilterAll, setIsFilterAll] = useState(true)
  const [selectedFilter, setSelectedFilter] = useState({
    type: '',
    duration: '',
    facility: '',
    accent: '',
  })
  const [FilteredData, setFilteredData] = useState([])
  const [data, setData] = useState([])

  const getListCourses = () => {
    AXIOS.get(ENDPOINT.COURSES).then((res) => {
      setData(res.data)
    })
  }

  function filterArrayOfObjects(arr, filters) {
    return arr.filter(item => {
      let isMatch = true;

      for (const key in filters) {
        if (filters[key] !== '') {
          const filterValue = filters[key]
          const itemValue = item[key]
          // If the property we are looking for doesn't exist or does not match our criteria, set `isMatch` to false and  
          // If the property we are looking exists and matches our filter value then continue to next object
          if (itemValue !== filterValue) {
            isMatch = false;
            break;
          }
        }
      }

      return isMatch
    })
  }

  const handleChange = (name, value) => {
    setIsFilterAll(false)
    setSelectedFilter({
      ...selectedFilter, [name]: value
    })
  }
  useEffect(() => {
    getListCourses()
  }, [])

  useEffect(() => {
    const isEmpty = Object.values(selectedFilter).every((val) => val === '')
    if (isEmpty) setIsFilterAll(true)
    else {
      const filteredList = filterArrayOfObjects(data, selectedFilter)
      setFilteredData(filteredList)
    }
  }, [data, selectedFilter])

  const list = !isFilterAll ? FilteredData : data

  return (
    <div className="bg-emerald-100 text-stone-800">
      <Navbar />
      <div className="max-w-screen-xl m-auto p-8">
        <div className="flex flex-row items-center justify-between gap-2 mb-8">
          <h1>Courses</h1>
          <div className='grid grid-cols-5 gap-2'>
            <div
              className={`cursor-pointer w-full p-2 border appearance-none border-none text-center rounded-full px-2
            ${isFilterAll ? 'bg-emerald-600 text-white' : 'bg-white text-emerald-600'
                }
            `}
              onClick={() => {
                setIsFilterAll(true)
                setSelectedFilter({})
              }}>
              All
            </div>
            <div className="w-full">
              <select
                className={`cursor-pointer w-full p-2 border appearance-none border-none text-center rounded-full
                ${selectedFilter.type !== '' ? 'bg-emerald-600 text-white' : 'bg-white text-emerald-600'}`}
                id="type"
                name="type"
                value={selectedFilter.type || ''}
                onChange={(e) => handleChange('type', e.target.value)}
              >
                <option value="">Tipe</option>
                <option value="TOEFL">TOEFL</option>
                <option value="IELTS">IELTS</option>
                <option value="BASIC">BASIC</option>
              </select>
            </div>
            <div>
              <select
                className={`cursor-pointer w-full p-2 border appearance-none border-none text-center rounded-full
                ${selectedFilter.duration !== '' ? 'bg-emerald-600 text-white' : 'bg-white text-emerald-600'}`}
                id="duration"
                name="duration"
                value={selectedFilter.duration || ''}
                onChange={(e) => handleChange('duration', e.target.value)}
              >
                <option value="">Durasi</option>
                <option value="2 minggu">2 Minggu</option>
                <option value="1 bulan">1 Bulan</option>
                <option value="3 bulan">3 Bulan</option>
                <option value="6 bulan">6 Bulan</option>
              </select>
            </div>
            <div>
              <select
                className={`cursor-pointer w-full p-2 border appearance-none border-none text-center rounded-full
                ${selectedFilter.facility !== '' ? 'bg-emerald-600 text-white' : 'bg-white text-emerald-600'}`}
                id="facility"
                name="facility"
                value={selectedFilter.facility || ''}
                onChange={(e) => handleChange('facility', e.target.value)}
              >
                <option value="">Fasilitas</option>
                <option value="Asrama">Asrama</option>
                <option value="non-asrama">Non-Asrama</option>
              </select>
            </div>
            <div>
              <select
                className={`cursor-pointer w-full p-2 border appearance-none border-none text-center rounded-full
                ${selectedFilter.accent !== '' ? 'bg-emerald-600 text-white' : 'bg-white text-emerald-600'}`}
                id="accent"
                name="accent"
                value={selectedFilter.accent || ''}
                onChange={(e) => handleChange('accent', e.target.value)}
              >
                <option value="">Aksen</option>
                <option value="Inggris">Inggris</option>
                <option value="Jepang">Jepang</option>
                <option value="Korea">Korea</option>
                <option value="Mandarin">Mandarin</option>
              </select>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {list.map((value) => (
            <div key={value.id}>
              <CardCourses
                id={value.id}
                title={value.title}
                onClick={() => navigate(`/course-detail/${value?.id}`, {
                  state: { value },
                })} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CourseSearch