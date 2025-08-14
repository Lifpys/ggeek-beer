import styled from "styled-components";

const Container = styled.div`
  position: relative;
  font-size: 14px;
  font-weight: 500;

  &.error {
    input {
      background-color: var(--red-100);
    }
  }

  label {
    display: block;
    margin-bottom: 6px;
    color: var(--neutral-600);
  }

  input {
    width: 100%;
    height: 50px;
    padding: 0 10px;
    color: var(--black);
    background-color: var(--neutral-50);

    &::placeholder {
      color: var(--neutral-300);
    }
  }

  .errorText {
    position: absolute;
    top: calc(100% + 6px);
    color: var(--red-800);
  }

  @media (max-width: 1300px) {
    font-size: calc(100vw * (14 / 1300));

    label {
      margin-bottom: calc(100vw * (6 / 1300));
    }

    input {
      height: calc(100vw * (50 / 1300));
      padding: 0 calc(100vw * (10 / 1300));
    }

    .errorText {
      top: calc(100% + calc(100vw * (6 / 1300)));
    }
  }

  @media (max-width: 767px) {
    font-size: calc(100vw * (14 / 375));

    label {
      margin-bottom: calc(100vw * (6 / 375));
    }

    input {
      height: calc(100vw * (50 / 375));
      padding: 0 calc(100vw * (10 / 375));
    }

    .errorText {
      top: calc(100% + calc(100vw * (6 / 375)));
    }
  }
`;

export { Container };

export default {
  Container,
};
