import { useState, useEffect } from "react";
import { end_points } from "../services/api";

function Offers() {
  const [offers, setOffers] = useState([]);

  function getOffers() {
    fetch(end_points.offers)
      .then((response) => response.json())
      .then((data) => setOffers(data))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getOffers();
  }, []);

  console.log(offers)

  return (
    <div>
      <h2>Offers</h2>
    </div>
  );
}

export default Offers;
