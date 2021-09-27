import { getCompletePageText } from "../js/complete";

export const CompletePageText = ({ category }) => {

  return (
    <>
    <img className="start-page-text" src={getCompletePageText(category)} alt="" />
    </>
  );
};