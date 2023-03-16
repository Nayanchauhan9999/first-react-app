import React from "react";
import familyman from "../Images/The_Family_Man.jpeg";
import shot from "../Images/shot.jpg";
import mirzapur from "../Images/mirzapur.jpg";
import patallok from "../Images/patallok.jpg";
import masterofsex from "../Images/mos.jfif";
import tandav from "../Images/tandav.webp";

function Card(props) {
  return (
    <div className="card1">
      <div className="card_image">
        <img src={props.imgsrc} alt="familyman" />
      </div>
      <h3 className="card_title">{props.title} </h3>
      <div className="card_discription">
        <p>{props.discription}</p>
      </div>
      <div className="buttons">
        <a href={props.link} target="_blank" rel="noreferrer">
          <button className="watch_now">Watch Now</button>
        </a>
      </div>
    </div>
  );
}

function Top5AmazonSeries() {
  return (
    <React.Fragment>
      <h2>Top Favourite Webseries : component 9</h2>
      <div className="maindiv">{Sdata.map(cool)}</div>
    </React.Fragment>
  );
}
function cool(value) {
  return (
    <Card
      key = {value.id}
      imgsrc={value.imgsrc}
      title={value.title}
      discription={value.discription}
      link={value.link}
    />
  );
}
export { Top5AmazonSeries };

const Sdata = [
  {
    id : "1",
    imgsrc: familyman,
    title: "The Family Man",
    discription:
      "Srikant Tiwari has quit TASC and works in the private sector to spend more time with the family. A powerful new enemy forces him to return. Srikant has to now uncover and thwart a dangerous coalition between an old foe and a dormant group of foreign insurgents. But the danger is much closer to home. This time around, nobody is safe!Watch NowRead More",
    link: "https://www.primevideo.com/detail/0H3DDB4KBJFNDCKKLHNRLRLVKQ/ref=atv_dp_share_cu_r",
  },
  {
    id : "2",
    imgsrc: tandav,
    title: "Tandav",
    discription:
      "Tandav is the coming together of different worlds under the gamut of politics. It is a dramatic take of the powerplay between people at the high level to secure their position. Youth plays a significant role in the story as we see where their future is headed in this dark abyss of politics.",
    link: "https://www.primevideo.com/detail/0TIXTH4G4FJBGABFDCLUEF1OU7/ref=atv_dp_share_cu_r",
  },
  {
    id : "3",
    imgsrc: mirzapur,
    title: "Mirzapur",
    discription:
      "In Mirzapur, revenge runs darker than blood. There is one title, the King of Mirzapur, but many takers. Munna feels invincible after escaping from the wedding massacre. Guddu and Golu are nowhere to be found. Akhandanands ambitions soar as he eyes political power. Going beyond Purvanchal to the power corridors of Lucknow and the streets of Bihar, theres one question  who will rule Mirzapur?",
    link: "https://www.primevideo.com/detail/0FBF7DWFYG99Y3TSNVJ4ELOLBO/ref=atv_dp_share_cu_r",
  },
  {
    id : "4",
    imgsrc: patallok,
    title: "Paatal Lok",
    discription:
      "A down and out cop lands the case of a lifetime when four suspects are nabbed in the assassination attempt of a prime time journalist. The case turns out to be a devious maze where nothing is what it looks like. The pursuit of it leads him to the dark netherworld - the 'Paatal Lok', and to shocking discoveries in the past of the four suspects.",
    link: "https://www.primevideo.com/detail/0G9IEOHCN8KMY6COD9ILGH7IY5/ref=atv_dp_share_cu_r",
  },
  {    
    id : "5",
    imgsrc: shot,
    title: "Four More Shots Please!",
    discription:
      "A sad goodbye, some giggles, some tears and a heavy heart. That's how we see the four girls this season. Each of them is saddled by baggage, most of which slump their shoulders and almost make them fall. All that the four of them are seeking this season is closure but sometimes the closing chapters are the most painful ones.",
    link: "https://www.amazon.com/gp/video/detail/B0875KQ9MV/ref=atv_dp_share_cu_r",
  },
  {
    id : "6",
    imgsrc: masterofsex,
    title: "Masters Of Sex",
    discription:
      "In Season Two we enter a very different world from Season One. Masters is flung out into the universe, untethered from the security of his hospital. That takes all our characters into very surprising directions and with that comes an entirely new set of characters. This has been one of the most satisfying things for us in Season Two  how many new faces have joined us.",
    link: "https://www.primevideo.com/detail/0G0YLCBEUF06G32RVUOI7UUN29/ref=atv_dp_share_cu_r",
  },
];
