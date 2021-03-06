import DataDisplay from "./DataDisplay";


export default function Section(props) {

    return (
      <div className="Section">
          <img className="Section-img" alt="travel image" src={props.info.imageUrl}></img>
          <DataDisplay display={props.info}/>
      </div>
    );
  }
  
  