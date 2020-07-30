import tnReduxCounter from "../images/tn-redux-counter.jpg"
import tnExecSummary from "../images/tn-trilliant-exec-summary.jpg"
import tnWordCounter from "../images/tn-word-counter.jpg"
import tnFizzBuzz from "../images/tn-fizz-buzz.jpg"

const getMenuData = () => [
  {
    id: "IDROOT",
    link: "/",
    title: null,
    subMenuText: null,
    desc: null,
    img: null,
  },
  {
    id: "IDMENU",
    link: "/menu",
    title: "Home",
    subMenuText: "Choose an item from the list below.",
    desc: null,
    img: null,
  },
  {
    id: "IDCOUNTER",
    link: "/counter",
    title: "Redux Counter",
    subMenuText: "An over-engineered counter as a sandbox for learning Redux.",
    desc:
      "It took a while to wrap my head around how Redux works and why it's handy on larger projects. It was helpful to learn by implemting on a simple component. I've also integrated Firebase serverless DB calls into the Redux actions.",
    img: tnReduxCounter,
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
    id: "IDEXECSUMMARY",
    link: "/executivesummary",
    title: "Trilliant Data Table",
    subMenuText: "A live data table with all the bells and whistles.",
    desc:
      "I thought I'd challenge myself by refactoring some of the Trilliant components from Angular into React. It wasn't without issues but it was fast. I literally spent one work day getting the functionality and the look into place.",
    img: tnExecSummary,
  },
  {
    id: "IDWORDCOUNTER",
    link: "/wordcounter",
    title: "Word Counter",
    subMenuText:
      "Type is some words and watch the count change! Exciting, right?",
    desc:
      "I was given a white board test and I didn't have the algorithm for this function committed to memory. It was the only question I was given. I have it memorized now!",
    img: tnWordCounter,
  },
]

export default getMenuData
