import { nestedProp } from "../Types";
import GetEpisode from "./GetEpisode";

function MainContent({ searchTerm }: nestedProp): JSX.Element {
  return (
    <main>
      <GetEpisode searchTerm={searchTerm} />
    </main>
  );
}

export default MainContent;
