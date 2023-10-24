import React from 'react'

const ListCourse = () => {
  return (
    <div className="bg-emerald-200">
        <div className="flex" id="sidebar">
            <div className="w-1/5 bg-white h-screen text-gray-800 p-4">
                <h2 className="text-2xl font-semibold mb-4">Admin Dashboard</h2>
                <ul className="space-y-2">
                <li>
                    <a href="#" className="block py-2 px-4 hover:bg-gray-300">
                    Dashboard
                    </a>
                </li>
                <li>
                    <a href="#" className="block py-2 px-4 hover:bg-gray-300">
                    Kursus
                    </a>
                </li>
                </ul>
            </div>
        </div>

        <div className="">
            <div>
                <h1 className="text-gray-800">Daftar Kursus</h1>
                <div>
                    <table className="table-auto">
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
                            <tr></tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    </div>
  )
}

export default ListCourse