import React from "react";
import { Container } from "react-bootstrap";
function PortfolioTextSec({ caseStudy }) {
  return (
    <Container>
      <div className="text_contant">
        <div dangerouslySetInnerHTML={{ __html: caseStudy }}></div>
      </div>
    </Container>

  );
}
export default PortfolioTextSec;
