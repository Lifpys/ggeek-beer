import styled from "styled-components";

const Container = styled.div`
  .inputList {
    display: flex;
    flex-wrap: wrap;
    gap: 34px 40px;

    .inputItem {
      width: 100%;

      &:nth-child(-n + 4) {
        width: calc((100% - 40px) / 2);
      }
    }
  }

  .submitBtn {
    width: 148px;
    margin: 40px auto 0;
  }

  .linkList {
    display: flex;
    margin-top: 60px;
  }

  @media (max-width: 1300px) {
    .inputList {
      gap: calc(100vw * (34 / 1300)) calc(100vw * (40 / 1300));

      .inputItem {
        &:nth-child(-n + 4) {
          width: calc((100% - (100vw * (40 / 1300))) / 2);
        }
      }
    }

    .submitBtn {
      width: calc(100vw * (148 / 1300));
      margin: calc(100vw * (40 / 1300)) auto 0;
    }

    .linkList {
      margin-top: calc(100vw * (60 / 1300));
    }
  }

  @media (max-width: 767px) {
    .inputList {
      gap: calc(100vw * (40 / 375));

      .inputItem {
        &:nth-child(-n + 4) {
          width: 100%;
        }
      }
    }

    .submitBtn {
      width: calc(100vw * (148 / 375));
      margin: calc(100vw * (30 / 375)) auto 0;
    }

    .linkList {
      flex-direction: column;
      margin-top: calc(100vw * (50 / 375));
    }
  }
`;

export { Container };

export default {
  Container,
};
