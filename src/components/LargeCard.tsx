import { Link } from "react-router-dom";
import "../css/stylesheet.css"

type LargeCardProps = {
  title: string;
  description: string;
  iconUrl: string;
  imgUrl: string;
  imgAlt: string;
  linkUrl: string;
  state: { catKey: string; catValue: string } | { productId: number };
};

function LargeCard({
  title,
  description,
  iconUrl,
  imgUrl,
  imgAlt,
  linkUrl,
  state,
}: LargeCardProps): JSX.Element {
  return (
    <div className="card">
      <Link
        to={{
          pathname: linkUrl,
          state: state,
        }}
      >
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
