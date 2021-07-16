import { IEpisode } from "../Types";


function ShowEpisode(props: IEpisode): JSX.Element {

  return (
      <section className = "eachEpisode">
        <h1 className = "title">
          {props.name} - S{props.season.toString().padStart(2, "0")}E{props.number.toString().padStart(2, "0")}
        </h1>
        <div className = "picture">
          <img src={props.image?.medium} alt=""/>
        </div>
        <div className = "summary">
          {props.summary?.replace(/<p>/g, "").replace(/<\/p>/g, "")}
        </div>
        
      </section>
  );
}

export default ShowEpisode;
