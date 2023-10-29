import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { API_URL, ENDPOINT } from '../../data/config'
import { AXIOS } from '../../utils/axiosInstance'
import Swal from 'sweetalert2'
import axios from 'axios'
import useLoginChecker from '../../hooks/useLoginChecker'

const ListCourse = () => {
    const [data, setData] = useState([])
    const navigate = useNavigate()
    const { isLoggedIn } = useLoginChecker()

    useEffect(() => {
        if (!isLoggedIn) navigate('/login-admin')
    }, [isLoggedIn, navigate])

    const getListCourses = () => {
        AXIOS.get(ENDPOINT.COURSES).then((res) => {
            setData(res.data)
        })
    }

    useEffect(() => {
        getListCourses()
    }, [])

    const handleDeleteConfirmation = (course) => {
        Swal.fire({
            title: 'Hapus Data?',
            showCancelButton: true,
            confirmButtonText: 'Hapus',
        }).then((result) => {
            if (result.isConfirmed) {
                handleDelete(course)
            }
        })
    };

    const handleDelete = async (courseItem) => {
        if (courseItem) {
            try {
                await axios.delete(
                    `${API_URL}courses/${courseItem.id}`
                );
                setData((prevCourse) =>
                    prevCourse.filter((course) => course !== courseItem)
                );
                Swal.fire('Berhasil Dihapus!');
            } catch (error) {
                Swal.fire('Data gagal dihapus');
            }
        }

    };

    const handleLogOut = () => {
        Swal.fire({
            title: 'Log Out?',
            showCancelButton: true,
            confirmButtonText: 'Yes',
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem("isLoggedIn");
                localStorage.removeItem("user");
                navigate('/login-admin')
            }
        })
    }

    return (
        <div className="bg-emerald-100 flex min-h-screen">
            <div className="container-left">
                <div className="flex h-full" id="sidebar">
                    <div className="w-full bg-white text-gray-800 p-4">
                        <h2 className="text-2xl font-semibold mb-4">Go-King</h2>
                        <ul className="space-y-2">
                            <li>
                                <p className="block py-2 px-4 hover:bg-gray-300 font-semibold">
                                    Kursus
                                </p>
                            </li>
                            <li>
                                <button onClick={handleLogOut}>Log Out</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container-right ml-10 text-gray-800 flex flex-col">
                <div>
                    <div>
                        <h1 className="mb-8">Daftar Kursus</h1>
                    </div>
                    <div className="flex justify-end">
                        <button onClick={() => navigate('/create-course')}
                            className="bg-emerald-600 hover:bg-emerald-700">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div>
                    <table className="table-fixed">
                        <thead>
                            <tr>
                                <th>Nama</th>
                                <th>Tipe</th>
                                <th>Durasi</th>
                                <th>Fasilitas</th>
                                <th>Aksen</th>
                                <th>Deskripsi</th>
                                <th>WhatsApp</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((value) => {
                                return (
                                    <tr key={(value.id)}>
                                        <td>{value.title}</td>
                                        <td>{value.type}</td>
                                        <td>{value.duration}</td>
                                        <td>{value.facility}</td>
                                        <td>{value.accent}</td>
                                        <td>{value.description}</td>
                                        <td>{value.contact}</td>
                                        <td>
                                            <button
                                                className="bg-red-500 hover:bg-red-600 hover:cursor-pointer text-white"
                                                onClick={() => handleDeleteConfirmation(value)}>
                                                Hapus
                                            </button>
                                            <button
                                                className="bg-green-500 hover:bg-green-600 hover:cursor-pointer text-white"
                                                onClick={() => navigate(`/edit-course/${value?.id}`, {
                                                    state: { value },
                                                })}
                                            >
                                                Update
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ListCourse