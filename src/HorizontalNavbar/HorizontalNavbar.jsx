import "./HorizontalNavbar.css";

function HorizontalNavbar() {
  function search() {
    document.getElementById("searchBar").value = "";
  }

  return (
    <div className="horizontalnavbar">
      <div className="search">
        <img
          className="Icon special"
          src="/Images/SVGs/search.svg"
          onClick={search}
        />
        <input
          id="searchBar"
          type="text"
          placeholder="Search for Your Favourite Game!"
        />
      </div>
      <div className="navigation">
        <img
          className="navIcons notify Icon special"
          src="/Images/SVGs/bell-fill.svg"
        />
        <img
          className="navIcons notify Icon special"
          src="/Images/SVGs/heart.svg"
        />
        <img
          className="navIcons notify Icon special"
          src="/Images/SVGs/bag.svg"
        />
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
