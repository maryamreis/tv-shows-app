interface IEpisode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  _links: { self: { href: string } };
}

function ShowEpisode(props: IEpisode): JSX.Element {
  return (
    <section>
      <h1>
        {props.name} - S{props.season}E{props.number}
      </h1>
      <p>
        <img src={props.image.medium} />
      </p>
      <p>{props.summary}</p>
    </section>
  );
}

export default ShowEpisode;
