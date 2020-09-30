import React from "react";
import "../styles/secondaryContent.scss";
import ItemComponent from "../mainComponents/supportComponents/ItemComponent";

const SecondaryContent = () => {
  const supportArticles = [
    { id: 1, img: "https://placeimg.com/640/480/1", title: "tytul artykulu 1" },
    { id: 2, img: "https://placeimg.com/640/480/2", title: "tytul artykulu 2" },
    { id: 3, img: "https://placeimg.com/640/480/3", title: "tytul artykulu 3" },
    { id: 4, img: "https://placeimg.com/640/480/4", title: "tytul artykulu 4" },
    { id: 5, img: "https://placeimg.com/640/480/5", title: "tytul artykulu 5" },
    { id: 6, img: "https://placeimg.com/640/480/6", title: "tytul artykulu 6" },
    { id: 7, img: "https://placeimg.com/640/480/7", title: "tytul artykulu 7" },
    { id: 8, img: "https://placeimg.com/640/480/8", title: "tytul artykulu 8" },
  ];

  const supArt = supportArticles.map((item) => (
    <ItemComponent img={item.img} title={item.title} key={item.id} />
  ));

  return <div className="secondary-content">{supArt}</div>;
};

export default SecondaryContent;
