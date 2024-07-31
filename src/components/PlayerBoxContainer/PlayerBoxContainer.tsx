import "./PlayerBoxContainer.css";

interface Props {
  children: React.ReactNode;
}

const PlayerBoxContainer: React.FC<Props> = ({ children }) => {
  return <div className="PlayerBoxContainer">{children}</div>;
};

export default PlayerBoxContainer;
