import ShowEpisode from "./ShowEpisode";
import mapArray from "../episodes.json";

interface nestedProp {
  searchTerm: string
}

function GetEpisode(props: nestedProp): JSX.Element {
  return (
    <section className = "columns">
      {mapArray.filter((ep) => {
                    if (props.searchTerm === "") {
                        return ep
                    } else if (ep.name.toLowerCase().includes(props.searchTerm.toLowerCase())) {
                        return ep
                    }
                    }).map((ep) => (
        <ShowEpisode
          key={ep.id}
          id={ep.id}
          url={ep.url}
          name={ep.name}
          season={ep.season}
          number={ep.number}
          type={ep.type}
          airdate={ep.airdate}
          airtime={ep.airtime}
          airstamp={ep.airstamp}
          runtime={ep.runtime}
          image={ep.image}
          summary={ep.summary}
          _links={ep._links}
        />
      ))}
    </section>
  );
}

export default GetEpisode;
