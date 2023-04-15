import React, { useState } from "react";
import LocationInfo from "./LocationInfo";
import ResidentCard from "./ResidentCard";
import "./styles/mainContent.css";
import chunkArray from "../utils/chunkAray";

const MainContent = ({ location }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const residents = location?.residents;
  let arrays = residents;

  if (residents?.length > 20) {
    arrays = chunkArray(residents, 20)[currentPage - 1];
  }

  const totalPages = Math.ceil(residents?.length / 20);
  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);

  return (
    <div>
      <LocationInfo location={location} />
      <div className="page__btn">
        {currentPage > 1 && (
          <button className="prev__btn" onClick={prevPage}>
            {"<-  Previous Page"}
          </button>
        )}
        {currentPage < totalPages && (
          <button className="next__btn" onClick={nextPage}>
            {"Next Page  ->"}
          </button>
        )}
      </div>
      <div className="resident-container">
        {arrays?.map((url) => (
          <ResidentCard url={url} key={url} />
        ))}
      </div>
    </div>
  );
};

export default MainContent;
