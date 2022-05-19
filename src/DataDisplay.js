import LocationPin from "./LocationPin.png"


export default function DataDisplay(props) {
    return (
      <div className="DataDisplay">
          <div>
              <img className="locationPin-img" src={LocationPin}></img>
            <h5>{props.display.location}</h5>
            <h6>View on Google Maps</h6>
          </div>
         <h1>{props.display.title}</h1> 
         <h3>{props.display.startDate} - {props.display.endDate}</h3>
         <p>{props.display.description}</p>

      </div>
    );
  }
  
  