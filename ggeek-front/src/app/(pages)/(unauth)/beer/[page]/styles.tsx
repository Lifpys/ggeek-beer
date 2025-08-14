import styled from "styled-components";

const Container = styled.div`
  .searchWrap {
    margin-bottom: 30px;
  }

  .list {
    display: flex;
    flex-wrap: wrap;

    &.seasonalCollabList {
      gap: 60px 50px;

      .item {
        width: 200px;
      }
    }

    &.awardMediaList {
      gap: 60px 66px;

      .item {
        width: 356px;
      }
    }
  }

  @media (max-width: 1300px) {
    .searchWrap {
      margin-bottom: calc(100vw * (30 / 1300));
    }

    .list {
      &.seasonalCollabList {
        gap: calc(100vw * (60 / 1300)) calc(100vw * (50 / 1300));

        .item {
          width: calc(100vw * (200 / 1300));
        }
      }

      &.awardMediaList {
        gap: calc(100vw * (60 / 1300)) calc(100vw * (66 / 1300));

        .item {
          width: calc(100vw * (356 / 1300));
        }
      }
    }
  }

  @media (max-width: 767px) {
    .searchWrap {
      margin-bottom: calc(100vw * (30 / 375));
    }

    .list {
      &.seasonalCollabList,
      &.awardMediaList {
        gap: calc(100vw * (20 / 375)) calc(100vw * (15 / 375));

        .item {
          width: calc(100vw * (164 / 375));
        }
      }
    }
  }
`;

export { Container };

export default {
  Container,
};
