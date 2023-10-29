import axios from 'axios'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { API_URL } from '../../data/config'
import Swal from 'sweetalert2'
import useLoginChecker from '../../hooks/useLoginChecker'

const EditCourse = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { isLoggedIn } = useLoginChecker()

  const data = location.state.value

  const [course, setCourse] = useState({
    title: data.title,
    type: data.type,
    duration: data.duration,
    accent: data.accent,
    facility: data.facility,
    description: data.description,
    contact: data.contact,
  })

  useEffect(() => {
    if (!isLoggedIn) navigate('/login-admin')
  }, [isLoggedIn, navigate])

  const handleSubmit = () => {
    axios.put(`${API_URL}courses/${data.id}`, course).then(() => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'data berhasil disimpan',
        showConfirmButton: false,
        timer: 1500
      })
      navigate('/list-course')
    }).catch((err) => {
      console.error(err);
    })
  }

  const handleInputChange = (name, value, isNumber = false) => {
    let formValue = ''
    if (isNumber) {
      formValue = value.replace(/\D/g, "") //Accept only number, other than number would not be shown
    } else {
      formValue = value
    }

    setCourse({ ...course, [name]: formValue });
  };

  return (
    <div className="w-full min-h-screen bg-emerald-100 text-stone-800">
      <div className="container h-full m-auto p-4 flex flex-col justify-center">
        <form onSubmit={(e) => {
          e.preventDefault()
          handleSubmit()
        }}
          className="flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold mb-4">Edit Data Kursus</h1>
          <div className="w-2/4 mb-4">
            <label htmlFor="title" className="block font-semibold">Nama Kursus</label>
            <input
              type="text"
              className="w-full p-2 border bg-slate-50 border-gray-300 rounded"
              id="title"
              name="title"
              placeholder="Masukkan Nama Kursus"
              value={course.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
            />
          </div>
          <div className="w-2/4 mb-4">
            <label htmlFor="type" className="block font-semibold">Tipe Kursus</label>
            <select
              className="w-full p-2 border bg-slate-50 border-gray-300 rounded"
              id="type"
              name="type"
              value={course.type}
              onChange={(e) => handleInputChange('type', e.target.value)}
            >
              <option value="">pilih tipe</option>
              <option value="TOEFL">TOEFL</option>
              <option value="IELTS">IELTS</option>
              <option value="BASIC">BASIC</option>
            </select>
          </div>
          <div className=" w-2/4 mb-4">
            <label htmlFor="duration" className="block font-semibold">Durasi Kursus</label>
            <select
              className="w-full p-2 border bg-slate-50 border-gray-300 rounded"
              id="duration"
              name="duration"
              value={course.duration}
              onChange={(e) => handleInputChange('duration', e.target.value)}
            >
              <option value="">Pilih Durasi</option>
              <option value="2 minggu">2 Minggu</option>
              <option value="1 bulan">1 Bulan</option>
              <option value="3 bulan">3 Bulan</option>
              <option value="6 bulan">6 Bulan</option>
            </select>
          </div>
          <div className="w-2/4 mb-4">
            <label htmlFor="facility" className="block font-semibold">Fasilitas Kursus</label>
            <div>
              <select
                className="w-full p-2 border bg-slate-50 border-gray-300 rounded"
                id="facility"
                name="facility"
                value={course.facility}
                onChange={(e) => handleInputChange('facility', e.target.value)}
              >
                <option value="">Pilih Fasilitas</option>
                <option value="Asrama">Asrama</option>
                <option value="non-asrama">Non-Asrama</option>
              </select>
            </div>
          </div>
          <div className="w-2/4 mb-4">
            <label htmlFor="accent" className="block font-semibold">Aksen Kursus</label>
            <select
              className="w-full p-2 border bg-slate-50 border-gray-300 rounded"
              id="accent"
              name="accent"
              value={course.accent}
              onChange={(e) => handleInputChange('accent', e.target.value)}
            >
              <option value="">Pilih Aksen</option>
              <option value="Inggris">Inggris</option>
              <option value="Jepang">Jepang</option>
              <option value="Korea">Korea</option>
              <option value="Mandarin">Mandarin</option>
            </select>
          </div>
          <div className="w-2/4 mb-4 flex flex-col">
            <label htmlFor="description" className="block font-semibold">Deskripsi</label>
            <textarea
              name="description"
              id="description"
              value={course.description}
              cols="80"
              rows="5"
              className="bg-slate-50"
              placeholder="Masukkan deskripsi"
              onChange={(e) => handleInputChange('description', e.target.value)}
            ></textarea>
          </div>
          <div className="w-2/4 mb-4">
            <label htmlFor="contact" className="block font-semibold">Nomor WhatsApp Kursus</label>
            <input
              type="text"
              className="w-full p-2 border bg-slate-50 border-gray-300 rounded"
              id="contact"
              name="contact"
              placeholder="Gunakan format nomor internasional (62)"
              value={course.contact}
              onChange={(e) => handleInputChange('contact', e.target.value, true)}
            />
          </div>
          <button className="mt-4 w-2/4 bg-emerald-600 text-white p-2 rounded hover:bg-emerald-700">Simpan</button>
        </form>
      </div>
    </div>
  );
}
export default EditCourse