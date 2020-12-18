import tnReduxCounter from "../images/tn-redux-counter.jpg"
import tnExecSummary from "../images/tn-trilliant-exec-summary.jpg"
import tnWordCounter from "../images/tn-word-counter.jpg"
import tnFizzBuzz from "../images/tn-fizz-buzz.jpg"

const getMenuData = () => {
  return [
    {
      id: "IDROOT",
      link: "/",
      title: "Home",
      subMenuText: "Choose an item from the list below.",
      desc: null,
      img: null,
    },
    {
      id: "IDHOME",
      link: "/home",
      title: "Home",
      subMenuText: "Choose an item from the list below.",
      desc: null,
      img: null,
    },
    {
      id: "IDABOUT",
      link: "/about",
      title: "Biography",
      subMenuText: "Get to know me!",
      desc:
        "Who am I, what do I bring to the team, and how will I work with you to achieve our goals?",
    },
    {
      id: "IDWORDCOUNTER",
      link: "/wordcounter",
      title: "F'ing Word Counter",
      subMenuText: "You kiss your mother with that mouth? 😮",
      desc:
        "A standard word counter with curse word detection and reporting. That's what the world needs!",
      img: tnWordCounter,
    },
    {
      id: "IDGIFCALLER",
      link: "/gifcaller",
      title: "Gif Caller",
      subMenuText: "A Giphy API caller using Async React Hooks.",
      desc: "A Giphy API caller using Async React Hooks.",
      img: null,
      video:
        "https://media2.giphy.com/media/Er3QVX48nt5ok/giphy-preview.mp4?cid=a9a0ef714a908254202b578f70a1faf7c19c9a517f3aa062&amp;rid=giphy-preview.mp4",
    },
    {
      id: "IDFIZZBUZZ",
      link: "/fizzbuzz",
      title: "FizzBuzz",
      subMenuText: "A React implementation of a classic Javascript algorithm.",
      desc: "A React implementation of a classic Javascript algorithm.",
      img: tnFizzBuzz,
    },
    {
      id: "IDCOUNTER",
      link: "/counter",
      title: "Redux Counter",
      subMenuText: "An over-engineered counter for learning Redux & Firebase.",
      desc:
        "It took a while to wrap my head around how Redux works and why it's handy on larger projects. It was helpful to learn by implementing a simple component. I've also integrated Firebase serverless DB calls into the Redux actions.",
      img: tnReduxCounter,
    },

    {
      id: "IDEXECSUMMARY",
      link: "/executivesummary",
      title: "Data Table",
      subMenuText: "A live data table with all the bells and whistles.",
      desc:
        "I thought I'd challenge myself by refactoring some of the Trilliant components from Angular into React. It wasn't without issues but it was fast. I literally spent one work day getting the functionality and the look into place.",
      img: tnExecSummary,
    },
  ]
}

export default getMenuData
