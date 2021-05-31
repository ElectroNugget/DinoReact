import { Link } from "react-router-dom";

type LargeCardProps = {
  title: string;
  description: string;
  iconUrl: string;
  imgUrl: string;
  imgAlt: string;
  linkUrl: string;
};

function LargeCard({
  title,
  description,
  iconUrl,
  imgUrl,
  imgAlt,
  linkUrl,
}: LargeCardProps): JSX.Element {
  return (
    <div className="card">
      <Link to={linkUrl}>
        <img src={imgUrl} className="card-img-top" alt={imgAlt} />
      </Link>
      <div className="card-body">
        <h5 className="card-title">
          <i className={iconUrl}></i> {title}
        </h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}

export default LargeCard;
