import "./Logo.css";

function Logo(props) {
  return (
    <div className={props.componentClass}>
      <a href={props.link}>
        <img src={props.imgSrc} alt={props.imgAlt} />
      </a>
    </div>
  );
}

export default Logo;
