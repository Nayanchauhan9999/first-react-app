import React from "react";

function OtherProjects() {
  return (
    <React.Fragment>
      <h2 className="display-6 bg-dark text-light rounded  text-center p-2 m-2">
        My Other Projects
      </h2>
      <ul className="other_projects">
        <li>
          <span>
            Ecommerce Project :
            <a
              href="https://demostore999.netlify.app/
"
              className="p-2"
              target="_blank"
              rel="noreferrer"
            >
              website
            </a>
            <a
              className="p-2"
              href="https://github.com/Nayanchauhan9999/domo-Store"
              target="_blank2"
            >
              source code
            </a>
          </span>
        </li>
        <li>
          <span>
            HTML5,CSS3,javascript(Vanilla) Project:
            <a
              href="https://nayanchauhan9999.github.io/Nayan_Mart_ecommerce_site/"
              className="p-2"
              target="_blank3"
              rel="noreferrer"
            >
              website
            </a>
            <a
              className="p-2"
              href="https://github.com/Nayanchauhan9999/Nayan_Mart_ecommerce_site"
              target="_blank4"
              rel="noreferrer"
            >
              source code
            </a>
          </span>
        </li>
        <li>
          <span>
            This Project:
            <a
              href="https://react-practice-nayan.netlify.app/"
              className="p-2"
              target="_blank5"
              rel="noreferrer"
            >
              website
            </a>
            <a
              className="p-2"
              href="https://github.com/Nayanchauhan9999/first-react-app"
              target="_blank6"
              rel="noreferrer"
            >
              Source code
            </a>
          </span>
        </li>
      </ul>
    </React.Fragment>
  );
}
export default OtherProjects;
