import { Background } from "../../../components/Background";
import { getBackgroundImageByPageName } from "../../../js/background";

export const StartingPage = ({ pageName }) => {
  return (
    <>
      <Background
        backgroundImage={getBackgroundImageByPageName(pageName)}
      />
    </>
  );
};