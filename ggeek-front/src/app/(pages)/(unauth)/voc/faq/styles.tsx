import styled from "styled-components";

const Container = styled.div`
  .pagination {
    margin-top: 40px;
  }

  @media (max-width: 1300px) {
    .pagination {
      margin-top: calc(100vw * (40 / 1300));
    }
  }
`;

export { Container };

export default {
  Container,
};
