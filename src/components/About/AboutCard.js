import React from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineHeart } from "react-icons/ai";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Javerine </span>
            from <span className="purple"> Applied AI and Analytics in Nanyang Polytechnic. </span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <AiOutlineHeart /> Watching Korean Drama 
            </li>
            <li className="about-activity">
              <AiOutlineHeart /> Rapping to songs 
            </li>
            <li className="about-activity">
              <AiOutlineHeart /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Difficult roads lead to beautiful destinations"{" "}
          </p>
          <footer className="blockquote-footer">anonymous</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
