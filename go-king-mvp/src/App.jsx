import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './views/App.css'

import Home from './views/Home'
import CourseSearch from './views/courses/CourseSearch'
import CourseDetail from './views/courses/CourseDetail'
import LoginAdmin from './views/admin/LoginAdmin'
import CreateCourse from './views/admin/CreateCourse'
import ListCourse from './views/admin/ListCourse'
import EditCourse from './views/admin/EditCourse'
import AIChat from './views/AIchat'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course-search" element={<CourseSearch />} />
        <Route path="/course-detail/:id" element={<CourseDetail />} />
        <Route path="/ai-chat" element={<AIChat />} />

        <Route path="/login-admin" element={<LoginAdmin />} />
        <Route path="/list-course" element={<ListCourse />} />
        <Route path="/create-course" element={<CreateCourse />} />
        <Route path="/edit-course/:id" element={<EditCourse />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
