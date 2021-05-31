import React from "react";

type LargeCardProps = {
  title: string;
  description: string;
  iconUrl: string;
  imgUrl: string;
};

function LargeCard({
  title,
  description,
  iconUrl,
  imgUrl,
}: LargeCardProps): JSX.Element {
  return (
    <div className="card">
      {/* TODO: Fix these links */}
      <a href="prodDisplay.html?productKey=size&productValue=Small">
        <img src={imgUrl} className="card-img-top" alt="Small dinosaurs" />
      </a>
      <div className="card-body">
        <h5 className="card-title">
          <i className={iconUrl}></i> {title}
        </h5>
        <p className="card-text">
          {description}
        </p>
      </div>
    </div>
  );
}


export default LargeCard;
