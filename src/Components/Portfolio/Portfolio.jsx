import React, { Component } from "react";
import "./Portfolio.scss";
import KirizeyPlayImg from "../../assets/kirizey-play-img.png";
import KirizeyBultoImg from "../../assets/kirizey-bulto-img.png";
import KirizeyBlogImg from "../../assets/kirizey-blog-img.png";
import OxbridgeImg from "../../assets/oxbridge-img.png";
import LazyLoad from "react-lazyload";

export default class Portfolio extends Component {
  state = {
    activeParam: "All",
    params: ["All", "React", "Angular", "Django"],
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
          'Web dashboard for teachers of the school of English "Oxbridge". Storing data about students, their parents, the schedule and module of the audition, on the basis of which the group is determined by the new student.',
        tools: [
          "Django",
          "Django-rest-framework",
          "React",
          "Bootstrap",
          "JQuery"
        ],
        gitRepo: "https://github.com/Melanchol1c/kirizey-bulto",
        prodUrl: "https://kirizey-bulto.firebaseapp.com/",
        img: OxbridgeImg
      },
      {
        id: 2,
        name: "Kirizey Blog",
        description:
          "Simple news blog for course work. CRUD, like-dislike and commenting.",
        tools: ["React", "Django", "Django-rest-framework", "Ant Design"],
        gitRepo: "https://github.com/Melanchol1c/Kirizey-Blog",
        prodUrl: "https://kirizey-blog.herokuapp.com",
        img: KirizeyBlogImg
      },
      {
        id: 3,
        name: "Kirizey Bulto",
        description:
          "Simple To Do and budget manager. Project for training React framework.",
        tools: ["React", "Materialize"],
        gitRepo: "https://github.com/Melanchol1c/kirizey-bulto",
        prodUrl: "https://kirizey-bulto.firebaseapp.com/",
        img: KirizeyBultoImg
      }
    ]
  };

  render() {
    let { projects, params, activeParam } = this.state;

    projects =
      activeParam === "All"
        ? projects
        : projects.filter(p => p.tools.indexOf(activeParam) !== -1);

    const PortfolioFilter = () => (
      <div className="portfolio__projects-controls">
        {params.map(p => (
          <button
            className={this.handleActiveClass(p)}
            key={p}
            onClick={() => this.handleChangeParam(p)}
          >
            {p}
          </button>
        ))}
      </div>
    );

    const PortfolioItems = () => (
      <React.Fragment>
        <div className="portfolio__projects-items">
          {projects.map(p => (
            <React.Fragment key={p.id}>
              <div
                className="card portfolio__item"
                data-toggle="modal"
                data-target={`#modal${p.id.toString()}`}
              >
                <img src={p.img} className="card-img-top" alt="..." />
                <div className="card-back">
                  <h5>{p.name}</h5>
                </div>
              </div>

              <ItemModal project={p} />
            </React.Fragment>
          ))}
        </div>
      </React.Fragment>
    );

    const ItemModal = ({ project }) => (
      <div
        className="modal fade"
        id={`modal${project.id.toString()}`}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered " role="document">
          <div className="modal-content">
            <div className="card">
              <img src={project.img} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  {project.name}
                  <div className="mr-2">
                    {project.tools.map(t => (
                      <span
                        className="badge badge-pill badge-info ml-1"
                        key={t}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </h5>
                <p className="card-text">{project.description}</p>
                <a
                  href={project.prodUrl}
                  className="btn btn-outline-primary mr-1"
                >
                  Live demo
                </a>
                <a href={project.gitRepo} className="btn btn-outline-dark">
                  Git repo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

    return (
      <LazyLoad height={200}>
        <section className="portfolio">
          <div className="container">
            <h2 className="title">Portfolio</h2>
            <PortfolioFilter />
            <PortfolioItems />
          </div>
        </section>
      </LazyLoad>
    );
  }

  handleChangeParam = param => this.setState({ activeParam: param });

  handleActiveClass = param => {
    let className = "custom-btn ";
    return (className =
      this.state.activeParam === param
        ? (className += "btn-active")
        : className);
  };
}
