import { IEpisode } from "../Types";

export default function filterEpisodes(
  mapArray: IEpisode[],
  searchTerm: string
):IEpisode[] {
  return mapArray.filter(
    (ep) =>
      ep.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ep.summary?.toLowerCase().includes(searchTerm.toLowerCase())
  );
}
