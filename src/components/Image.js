import React from "react";

const ImagePanel = props => (
  <div>
    <img src={props.src} className="clicky-image" dataid={props.id} onClick={(e) => props.click(e.target.getAttribute('dataid'))} alt={props.alt}/>
  </div>
);

export default ImagePanel;
