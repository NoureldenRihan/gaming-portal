import "./HorizontalNavbar.css";

function HorizontalNavbar() {
  function search() {
    document.getElementById("searchBar").value = "";
  }

  function fillIcon(e) {
    [...document.getElementsByClassName("navIcons")].forEach((element) => {
      if (element.classList.contains("filled")) {
        element.className = element.className.slice(0, -12);
      }
    });

    if (!e.target.classList.contains("filled")) {
      let fillclass = e.target.className + "-fill filled";
      e.target.className = fillclass;
    }
  }

  return (
    <div className="horizontalnavbar">
      <div className="search">
        <i className="Icon bi bi-search" onClick={search}></i>
        <input
          id="searchBar"
          type="text"
          placeholder="Search for Your Favourite Game!"
        />
      </div>
      <div className="navigation">
        <i className="navIcons notify Icon bi bi-bell" onClick={fillIcon}></i>
        <i className="navIcons Icon bi bi-heart" onClick={fillIcon}></i>
        <i className="navIcons Icon bi bi-bag" onClick={fillIcon}></i>
        <div className="profileImgHolder">
          <div className="profileImg">
            <img src="/Images/Nourelden Rihan Profile Pic.jpg" alt="User" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HorizontalNavbar;
