import React from "react";
import "../styles/secondaryContent.css";
import ItemComponent from "../mainComponents/supportComponents/ItemComponent";

const SecondaryContent = () => {
  const supportArticles = [
    { id: 1, img: "", title: "tytul artykulu 1" },
    { id: 2, img: "", title: "tytul artykulu 2" },
    { id: 3, img: "", title: "tytul artykulu 3" },
    { id: 4, img: "", title: "tytul artykulu 4" },
    { id: 5, img: "", title: "tytul artykulu 5" },
    { id: 6, img: "", title: "tytul artykulu 6" },
    { id: 7, img: "", title: "tytul artykulu 7" },
    { id: 8, img: "", title: "tytul artykulu 8" },
  ];

  const supArt = supportArticles.map((item) => (
    <ItemComponent img={item.img} title={item.title} />
  ));

  return (
    <div className="secondary-content app__secondary-content">{supArt}</div>
  );
};

export default SecondaryContent;
