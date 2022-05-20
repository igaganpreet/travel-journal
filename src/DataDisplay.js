import LocationPin from "./LocationPin.png"


export default function DataDisplay(props) {
    return (
      <div className="DataDisplay">
          <div>
            <img className="locationPin-img" alt="location Image" src={LocationPin}></img>
            <h5 className="locationName">{(props.display.location).toUpperCase()}</h5>
            <a className="locationMapsLink" href={props.display.googleMapsUrl}>View on Google Maps</a>
          </div>
         <h1 className="locationTitle">{props.display.title}</h1> 
         <h3 className="locationDate">{props.display.startDate} - {props.display.endDate}</h3>
         <p className="locationDesc">{props.display.description}</p>

      </div>
    );
  }
  
  