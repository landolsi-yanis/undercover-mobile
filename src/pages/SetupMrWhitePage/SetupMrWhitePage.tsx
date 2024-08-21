import React from "react";
import "./SetupMrWhitePage.css";
import Button from "../../components/Button/Button";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import { useNavigate } from "react-router-dom";

interface Props {
  mrWhiteState: boolean;
  setMrWhiteState: React.Dispatch<React.SetStateAction<boolean>>;
}

const SetupMrWhitePage: React.FC<Props> = (props) => {
  const navigate = useNavigate();

  return (
    <PageWrapper
      mainContent={
        <>
          <div className='questionWrap'>Do you want to play ?</div>
          <div className='buttonWrap'>
            <Button
              buttonType='button btPurple'
              buttonAction={() => {
                props.setMrWhiteState(true);
                navigate("/selectPlayerToDiscoverPage");
              }}
            >
              With Mr White
            </Button>
            <Button
              buttonType='button btPurple'
              buttonAction={() => {
                props.setMrWhiteState(false);
                navigate("/selectPlayerToDiscoverPage");
              }}
            >
              Without Mr White
            </Button>
          </div>
        </>
      }
    />
  );
};

export default SetupMrWhitePage;
