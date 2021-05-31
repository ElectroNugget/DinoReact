type LargeCardProps = {
  title: string;
  description: string;
  iconUrl: string;
  imgUrl: string;
  imgAlt: string,
};

function LargeCard({
  title,
  description,
  iconUrl,
  imgUrl,
  imgAlt,
}: LargeCardProps): JSX.Element {
  return (
    <div className="card">
      {/* TODO: Fix these links */}
      <a>
        <img src={imgUrl} className="card-img-top" alt={imgAlt} />
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
