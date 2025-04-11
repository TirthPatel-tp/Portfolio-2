import KJInfrastructure from "../components/images/kj-infrastructure.png";
import iNotebook from "../components/images/iNotebook.png";
// import MusicApp from "../../img/musicapp.png";
import NewsApp from "../components/images/news-app.png";
import TextUtils from "../components/images/TextUtils.png"
export const projects = [
    {
      id: 1,
      title: "KJ Infrastructure",
      description: "Civil engineering company website built with React featuring modern UI/UX design and responsive layouts",
      image: [KJInfrastructure],
    //   <img src={KJInfrastructure} alt="Civil Work Website" />
      tech: ["React", "CSS Modules", "Framer Motion"],
      github: "https://github.com/TirthPatel-tp/React-js/tree/master/KJ-Infrastructure",
    //   demo: "https://kj-infrastructure.demo.com"
    },
    {
      id: 2,
      title: "iNotebook",
      description: "Secure note-taking application with user authentication and real-time database",
      image: [iNotebook],
      tech: ["MERN Stack", "JWT", "Redux"],
      github: "https://github.com/TirthPatel-tp/React-js/tree/master/inotebook",
    //   demo: "https://inotebook.demo.com"
    },
    {
      id: 3,
      title: "News App",
      description: "Responsive news aggregator with category filtering and dark mode support",
      image: [NewsApp],
      tech: ["React", "News API", "Bootstrap"],
      github: "https://github.com/TirthPatel-tp/React-js/tree/master/newsapp",
    //   demo: "https://news-app.demo.com"
    },
    {
      id: 4,
      title: "TextUtils",
      description: "Text manipulation tool with features like case conversion and word counting",
      image: [TextUtils],
      tech: ["React", "Bootstrap", "Regex"],
      github: "https://github.com/TirthPatel-tp/React-js/tree/master/TextUtils",
    //   demo: "https://textutils.demo.com"
    }
  ];