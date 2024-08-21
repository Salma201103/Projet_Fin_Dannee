// import React from "react";
import { Link } from "react-router-dom";
import { HotelType } from "../../../backend/src/shared/types";
import "./LatestDestinationCard.css";

type Props = {
  hotel: HotelType;
};

const LatestDestinationCard = ({ hotel }: Props) => {
  // Fonction pour générer les cinq étoiles en jaune
  const generateStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className="text-yellow-500">
          ★
        </span>
      );
    }
    return stars;
  };

  // Fonction pour extraire la première ligne de la description
  const extractFirstLine = (description: string) => {
    // Diviser la chaîne de caractères par les sauts de ligne et récupérer la première partie
    return description.split("\n")[0];
  };

  return (
    <Link
      to={`/detail/${hotel._id}`}
      className="relative cursor-pointer overflow-hidden rounded-md rounded-[10px]"
    >
      <div className="bg-white rounded-md">
        <div className="h-[390px]">
          <img
            src={hotel.imageUrls[0]}
            className="w-full h-full object-cover object-center rounded-[10px]"
            alt={hotel.name}
          />
        </div>

        <div className="absolute bottom-0 p-4 bg-black bg-opacity-50 w-full rounded-b-md rounded-[10px]">
          <span className="text-white font-bold tracking-tight text-3xl">
            {hotel.name}
          </span>
          <p className="city">{hotel.city}</p>
          <hr className="my-2 border-gray-250" />
          <p className="text-white text-sm">
            {extractFirstLine(hotel.description)}...
          </p>
          {/* Affichage des cinq étoiles */}
          <div>{generateStars()}</div>
        </div>
      </div>
    </Link>
  );
};

export default LatestDestinationCard;
