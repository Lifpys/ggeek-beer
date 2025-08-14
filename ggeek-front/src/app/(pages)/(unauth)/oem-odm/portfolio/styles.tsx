import styled from "styled-components";

const Container = styled.div`
  .portfolioList {
    display: flex;
    flex-wrap: wrap;
    gap: 60px 66px;

    .portfolioItem {
      cursor: pointer;
    }
  }

  @media (max-width: 1300px) {
    .portfolioList {
      gap: calc(100vw * (60 / 1300)) calc(100vw * (66 / 1300));
    }
  }

  @media (max-width: 767px) {
    .portfolioList {
      gap: calc(100vw * (20 / 375)) calc(100vw * (15 / 375));

      .portfolioItem {
        width: calc(100vw * (164 / 375));
      }
    }
  }
`;

export { Container };

export default {
  Container,
};
