// Breadcrumb.js
import React from "react";
import { Link, useLocation } from "react-router-dom"; // useLocation hook gives us the current path
import "../styles/Breadcrumb.css"; //css file

const Breadcrumb = () => {
  const location = useLocation(); // This will give us the current path of the page
  const pathnames = location.pathname.split("/").filter((x) => x); // Split the URL into segments

  const breadcrumbPaths = pathnames.map((path, index) => {
    const href = `/${pathnames.slice(0, index + 1).join("/")}`;
    return { name: path.charAt(0).toUpperCase() + path.slice(1), href }; // Capitalizing the first letter
  });

  return (
    <nav className="breadcrumb">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {breadcrumbPaths.map((breadcrumb, index) => (
          <>
            <li>{"/"}</li>
            <li key={index}>
              {index < breadcrumbPaths.length - 1 ? (
                <Link to={breadcrumb.href}>{breadcrumb.name}</Link>
              ) : (
                <span>{breadcrumb.name}</span>
              )}
            </li>
          </>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
