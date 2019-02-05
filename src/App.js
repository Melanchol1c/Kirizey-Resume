import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import KirizeyPlayImg from "../src/assets/kirizey-play-img.png";
import KirizeyBultoImg from "../src/assets/kirizey-bulto-img.png";
import KirizeyBlogImg from "../src/assets/kirizey-blog-img.png";
import OxbridgeImg from "../src/assets/oxbridge-img.png";
import KirizeyMathImg from "../src/assets/kirizey-math-img.png";
import ResumeImg from "../src/assets/resume-img.png";

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
        img: KirizeyPlayImg,
        subnote: "",
        sliderImages: []
      },
      {
        id: 4,
        name: "Oxbridge",
        description:
          'Web dashboard for teachers of the school of English "Oxbridge". Storing data about students, their parents, the schedule and module of the audition, on the basis of which the group is determined by the new student. Test data: admin : admin.',
        tools: [
          "Django",
          "Django-rest-framework",
          "React",
          "Bootstrap",
          "JQuery"
        ],
        gitRepo: "",
        prodUrl: "https://oxbridge-demp.herokuapp.com/",
        img: OxbridgeImg,
        subnote:
          "In this heroku deployed demo not allows some kind of requests :c . To try it you need go to /admin, sign in, create a teacher and connect him to admin user.",
        sliderImages: []
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
          "Sass"
        ],
        gitRepo: "https://github.com/Melanchol1c/Kirizey-Blog",
        prodUrl: "https://kirizey-blog.herokuapp.com",
        img: KirizeyBlogImg,
        subnote:
          "In this heroku deployed demo not allows some kind of requests :c",
        sliderImages: []
      },
      {
        id: 3,
        name: "Kirizey Bulto",
        description:
          "Simple To Do and budget manager. Project for training React framework.",
        tools: ["React", "Materialize", "Sass"],
        gitRepo: "https://github.com/Melanchol1c/kirizey-bulto",
        prodUrl: "https://kirizey-bulto.firebaseapp.com/",
        img: KirizeyBultoImg,
        subnote: "",
        sliderImages: []
      },
      {
        id: 5,
        name: "Kirizey Math",
        description:
          "Statistic processing based on random generated numbers: median, sample mean, variance, standard deviation and confirmation of the hypothesis of homogeneity of two samples using the Mann – Whitney U test.",
        tools: ["React", "Sass"],
        gitRepo:
          "https://github.com/Melanchol1c/react-statistic-math-processing",
        prodUrl: "https://kirizey-math.firebaseapp.com/",
        img: KirizeyMathImg,
        subnote: "",
        sliderImages: []
      },
      {
        id: 6,
        name: "Kirizey Resume",
        description: "Сurrent page, a small summary of my development path.",
        tools: ["React", "Sass"],
        gitRepo: "https://github.com/Melanchol1c/Kirizey-Resume",
        prodUrl: "https://kirizey-resume.firebaseapp.com/",
        img: ResumeImg,
        subnote: "",
        sliderImages: []
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
