import React, { ReactNode } from 'react';
import './PageWrapper.css'

interface Props {
  headerContent?: ReactNode;
  mainContent?: ReactNode;
  footerContent?: ReactNode;
}

const PageWrapper: React.FC<Props> = props => {
  return (
    <div className="pageWrapper">
      {props.headerContent !== undefined && <header>{props.headerContent}</header>}
      {props.mainContent !== undefined && <main>{props.mainContent}</main>}
      {props.footerContent !== undefined && <footer>{props.footerContent}</footer>}
    </div>
  );
};

export default PageWrapper;
