import Section from "./Section";
import data from "./data";



export default function Container() {


  let sectionData=data.map(travelData=>{
    return <Section info={travelData} />
  })

  return (
    <div className="Container">
        {sectionData}
    </div>
  );
}

