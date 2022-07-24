import locationIcon from "../assets/location-icon.svg";

function TravelLog(props) {
  const {title,imageUrl, location, googleMapsUrl, startDate, endDate, description} = props
  return (
    <div className="card dflex">
      <div className="card--content">

        <div className="card--content__location dflex">
          <img src={locationIcon} alt="" className="location-icon"/>
          <p className="text-upper">{location}</p>
          <p><a className="text-gray map-link" href={googleMapsUrl}>View on Google Maps</a></p>
        </div>

        <h2>{title}</h2>
        <p className="text-bold">{startDate} - {endDate}</p>
        <p className="card--content__description">{description}</p>

      </div>
      
        <img src={imageUrl} alt={imageUrl} className="card--image"/>
    </div>
  );
}

export default TravelLog