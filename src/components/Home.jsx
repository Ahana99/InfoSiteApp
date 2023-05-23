import React from "react";
import useAppContext from "../custom_hooks/useAppContext";

export default function Home() {

  const context = useAppContext();

  return (
    <div>
      <h1 className="header">Welcome, {context.loggedUser}!</h1>
      <div className="home">
        <div className="home1">
          React lets you build user interfaces out of individual pieces called
          components. Create your own React components like Thumbnail,
          LikeButton, and Video. Then combine them into entire screens, pages,
          and apps.
        </div>
        <div className="home2">
          <h3>What You Should Already Know</h3>
          Before starting with ReactJS, you should have intermediate experience
          in:
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </div>
        <div className="home3">
          In this project, we will make use of the React-Router-DOM. React
          Router DOM is an npm package that enables you to implement dynamic
          routing in a web app. It allows you to display pages and allow users
          to navigate them.
        </div>
      </div>
    </div>
  );
}
