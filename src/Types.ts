
export interface IEpisode {
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
    } | null;
    summary: string | null;
    _links: { self: { href: string } };
  }
  

export interface searchProps {
    // setSearchTerm: React.Dispatch<React.SetStateAction<string>>
    setSearchTerm(term: string): void
    searchTerm: string
 }

export interface nestedProp {
    searchTerm: string
    //setEpisode: []
    
}

export interface example {
    episodes: IEpisode[]
}