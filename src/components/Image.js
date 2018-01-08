import React from "react";

const ImagePanel = props => (
  <div>
    <img src={props.src} className="clicky-image" dataId={props.id} onClick={props.click(props.id)} alt={props.alt}/>
  </div>
);

export default ImagePanel;
