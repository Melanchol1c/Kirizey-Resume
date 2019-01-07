import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import KirizeyPlayImg from "../src/assets/kirizey-play-img.png";
import KirizeyBultoImg from "../src/assets/kirizey-bulto-img.png";
import KirizeyBlogImg from "../src/assets/kirizey-blog-img.png";
import OxbridgeImg from "../src/assets/oxbridge-img.png";

class App extends Component {
  state = {
    projects: [
      {
        id: 1,
        name: "Kirizey Play",
        description: "Game shop using SPA pattern on Angular 4.",
        tools: ["Angular", "Bootstrap", "Firebase"],
        gitRepo: "https://github.com/Melanchol1c/Kirizey-Play",
        prodUrl: "https://kirizey-shop.firebaseapp.com/",
        img: KirizeyPlayImg
      },
      {
        id: 4,
        name: "Oxbridge",
        description:
          'Web dashboard for teachers of the school of English "Oxbridge". Storing data about students, their parents, the schedule and module of the audition, on the basis of which the group is determined by the new student. Test data: admin:admin.',
        tools: [
          "Django",
          "Django-rest-framework",
          "React",
          "Bootstrap",
          "JQuery"
        ],
        gitRepo: "",
        prodUrl: "https://oxbridge-demp.herokuapp.com/",
        img: OxbridgeImg
      },
      {
        id: 2,
        name: "Kirizey Blog",
        description:
          "Simple news blog for course work. CRUD, like-dislike and commenting.",
        tools: [
          "React",
          "Django",
          "Django-rest-framework",
          "Ant Design",
          "Saas"
        ],
        gitRepo: "https://github.com/Melanchol1c/Kirizey-Blog",
        prodUrl: "https://kirizey-blog.herokuapp.com",
        img: KirizeyBlogImg
      },
      {
        id: 3,
        name: "Kirizey Bulto",
        description:
          "Simple To Do and budget manager. Project for training React framework.",
        tools: ["React", "Materialize", "Saas"],
        gitRepo: "https://github.com/Melanchol1c/kirizey-bulto",
        prodUrl: "https://kirizey-bulto.firebaseapp.com/",
        img: KirizeyBultoImg
      }
    ]
  };

  render() {
    return (
      <div>
        <Header />
        <About />
        <Portfolio data={this.state.projects} />
      </div>
    );
  }
}

export default App;
