import { HerosList } from "../components";

export const MarvelPage = () => {
  return (<>
    <h1>DC Comics</h1>
    <hr />

    <HerosList publisher={'Marvel Comics'} />
  </>);
};
