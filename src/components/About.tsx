import { NavLink, Outlet } from 'react-router-dom'

const About = () => {
  return (
    <div className='absolute top-[50%] left-[50%] translate-x-[-50%] flex flex-col gap-7 justify-center items-center'>
      <div>This is About.tsx</div>
      <ul className='flex gap-4'>
        <li>
          <NavLink
            to="1"
            className={({ isActive }) => (`font-semibold transition duration-300 px-6 py-2 rounded-[8px] ${isActive ? 'bg-[#31005e] text-white' : 'text-black'}`)}
          >
            Link 1
          </NavLink>
        </li>
        <li>
          <NavLink
            to="2"
            className={({ isActive }) => (`font-semibold transition duration-300 px-6 py-2 rounded-[8px] ${isActive ? 'bg-[#31005e] text-white' : 'text-black'}`)}
          >
            Link 2
          </NavLink>
        </li>
        <li>
          <NavLink
            to="3"
            className={({ isActive }) => (`font-semibold transition duration-500 px-6 py-2 rounded-[8px] ${isActive ? 'bg-[#31005e] text-white' : 'text-black'}`)}
          >
            Link 3
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  )
}

export default About