import ContentLoader from "react-content-loader";

import { Wrapper } from "./cardLoader.styles";

export const CardLoader = () => (
  <Wrapper>
    <ContentLoader
      aria-label="Loading..."
      backgroundColor="#ffffff"
      height="164"
    >
      <rect height="100%" width="100%" x="0" y="0" />
    </ContentLoader>
  </Wrapper>
);
