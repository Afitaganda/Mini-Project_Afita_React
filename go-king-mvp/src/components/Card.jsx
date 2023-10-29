// eslint-disable-next-line react/prop-types
const CardCourses = ({ id, title, onClick }) => {
  return (
    <div id={id}
      onClick={onClick}
      className="max-w-sm bg-white cursor-pointer border border-gray-200 rounded-lg shadow">
      <a href="#">
        <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
      </a>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700">
          Available
        </p>
      </div>
    </div>
  )
}

export default CardCourses