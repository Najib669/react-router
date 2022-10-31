

import movie1 from "../Images/movie1.jpg";
import movie2 from "../Images/movie2.jpg";
import movie3 from "../Images/movie3.jpg";
import movie4 from "../Images/movie4.jpg";
import movie5 from "../Images/movie5.jpg";
import movie6 from "../Images/movie6.jpg"

const MovieData = [
    {
      id: Math.random(),
      title: "LE RETOUR",
      img: movie1,
      rating: 5,
      desc: "It tells the story of two Russian boys whose father suddenly returns home after a 12-year absence. He takes the boys on a holiday to a remote island on a lake that turns into a test of manhood of almost mythic proportions",
      video: (
        <iframe
          width="1479"
          height="546"
          src="https://www.youtube.com/embed/_-p8Cvn-Iow"
          title="OFFICIAL TRAILER QODRAT | 27 OKTOBER DI BIOSKOP"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ),
      description: "surpriiiiiiiiiiiiiiiiiiiiiiiiiiise",
    },
    {
      id: Math.random(),
      title: "THE REVENANT",
      img: movie2,
      rating: 5,
      desc: "A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.",
      video: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/XKGfMQSmUhk?start=20"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ),
      description: "surpriiiiiiiiiiiiiiiiiiiiiiiiiiise",
    },
    {
      id: Math.random(),
      title: "DOGS OF BERLIN",
      img: movie3,
      rating: 3,
      desc: "A politically sensitive murder forces two disparate detectives into a battle with the Berlin underworld and a confrontation with their own corruption.",
      video: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/GkFU-Vijurg?start=2"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ),
      description: "surpriiiiiiiiiiiiiiiiiiiiiiiiiiise",
    },
    {
      id: Math.random(),
      title: "GREEN BOOK",
      img: movie4,
      rating: 2,
      desc: "A working-class Italian-American bouncer becomes the driver for an African-American classical pianist on a tour of venues through the 1960s American South.",
      video: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/27EF723ZDmI?start=6"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ),
      description: "surpriiiiiiiiiiiiiiiiiiiiiiiiiiise",
    },
    {
      id: Math.random(),
      title: "DUNE",
      img: movie5,
      rating: 5,
      desc: "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.",
      description: "surpriiiiiiiiiiiiiiiiiiiiiiiiiiise",
      video: <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/Xithigfg7dA?start=49"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
    },
    {
      id: Math.random(),
      title: "JOKER",
      img: movie6,
      rating: 4,
      desc: "A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain.",
      description: "surpriiiiiiiiiiiiiiiiiiiiiiiiiiise",
      video: 
        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/aY4Rs6qj82Q?start=10"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
     
    }

  ];
 export default MovieData ;
