import React from 'react';
import { Link, Route, Routes, useRoutes, NavLink } from 'react-router-dom';
import SinglePage from './SinglePage';
const About = () => {
  const links = [
    {
      id: 1,
      path: 'about-app',
      text: 'About App',
    },
    {
      id: 2,
      path: 'about-author',
      text: 'About Author',
    },
  ];
  return (
    <>
      <div className="about__content">
        <ul className="about__list">
          {links.map((link) => {
            return (
              <li key={link.id}>
                <NavLink
                  to={link.path}
                  end
                  exact="true"
                  className={({ isActive }) => (isActive ? 'active-link' : '')}
                >
                  {link.text}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <Routes>
        <Route path=":slug" element={<SinglePage />} />
      </Routes>
      <div>Hello from About page</div>
    </>
    // <div>
    //   <ul>
    //     <li>
    //       <Link to="about-app">About App</Link>
    //     </li>
    //     <li>
    //       <Link to="about-author">About Author</Link>
    //     </li>
    //   </ul>
    //   <Routes>
    //     <Route path=":slug" element={<SinglePage />} />
    //   </Routes>
    //   <div>Hello from About page</div>
    // </div>
  );
};
export default About;
