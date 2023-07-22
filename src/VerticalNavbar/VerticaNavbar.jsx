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

    if (!e.target.classList.contains("special")) {
      if (!e.target.classList.contains("tab")) {
        let fillclass = e.target.className.slice(0, -7) + " tab";
        e.target.className = fillclass;
      }
    } else {
      let fillclass = e.target.parentElement.className.slice(0, -7) + " tab";
      e.target.parentElement.className = fillclass;
    }
  }

  return (
    <div className="VerticalNavbar">
      <div className="profileIcon">
        <img src="/Images/Nourelden Rihan Profile Pic.jpg" alt="User" />
      </div>
      <div className="tabs">
        <div className="divTab navTab tabIcon tab" onClick={choose}>
          <img className="Icon special" src="/Images/SVGs/house.svg" />
        </div>
        <div className="divTab navTab tabIcon" onClick={choose}>
          <img className="Icon special" src="/Images/SVGs/flower.svg" />
        </div>
        <div className="divTab navTab tabIcon" onClick={choose}>
          <img className="Icon special" src="/Images/SVGs/shop-window.svg" />
        </div>
        <div className="divTab navTab tabIcon" onClick={choose}>
          <img className="Icon special" src="/Images/SVGs/controller.svg" />
        </div>
      </div>
      <div className="advanced">
        <img className="Icon special" src="/Images/SVGs/upload.svg" />
        <img className="Icon special" src="/Images/SVGs/gear.svg" />
      </div>
    </div>
  );
}

export default VerticalNavbar;
