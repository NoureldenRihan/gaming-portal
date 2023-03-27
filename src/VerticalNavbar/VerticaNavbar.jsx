import "./VerticalNavbar.css";

function VerticalNavbar() {
  function choose(e) {
    [...document.getElementsByClassName("navTab")].forEach((element) => {
      if (element.classList.contains("tab")) {
        element.className = element.className.slice(0, -4);
      }
      if (!element.classList.contains("tabIcon")) {
        element.className += " tabIcon";
      }
    });

    if (!e.target.classList.contains("tab")) {
      let fillclass = e.target.className.slice(0, -7) + " tab";
      e.target.className = fillclass;
    }
  }

  return (
    <div className="VerticalNavbar">
      <div className="profileIcon">
        <img src="/Images/Nourelden Rihan Profile Pic.jpg" alt="User" />
      </div>
      <div className="tabs">
        <i className="Icon bi bi-house navTab tabIcon tab" onClick={choose}></i>
        <i
          className="Icon bi bi-flower1 navTab tabIcon tab"
          onClick={choose}
        ></i>
        <i
          className="Icon bi bi-shop-window navTab tabIcon tab"
          onClick={choose}
        ></i>
        <i
          className="Icon bi bi-controller navTab tabIcon tab"
          onClick={choose}
        ></i>
      </div>
      <div className="advanced">
        <i className="Icon bi bi-upload"></i>
        <i className="Icon bi bi-gear"></i>
      </div>
    </div>
  );
}

export default VerticalNavbar;
