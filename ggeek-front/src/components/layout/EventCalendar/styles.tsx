import styled from "styled-components";

const Container = styled.div`
  .calendarTop {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: 600;

    button {
      display: block;
      width: 30px;
    }
  }

  .calendarBody {
    border: 1px solid var(--neutral-100);

    .days {
      display: flex;
      border-bottom: 1px solid var(--neutral-100);

      div {
        flex: 1 0 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        font-size: 18px;
        font-weight: 600;

        &:not(:last-child) {
          border-right: 1px solid var(--neutral-100);
        }
      }
    }

    .week {
      display: flex;

      &:not(:last-child) {
        border-bottom: 1px solid var(--neutral-100);
      }

      .date {
        flex: 1 0 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        min-width: 0;
        height: 120px;
        padding: 10px 0;
        cursor: pointer;

        &:not(:last-child) {
          border-right: 1px solid var(--neutral-100);
        }

        &.empty {
          color: var(--neutral-100);
          pointer-events: none;
        }

        &.today {
          color: var(--red-800);
        }

        .dateText {
          font-size: 18px;
          font-weight: 600;
        }

        .scheduleWrap {
          width: 100%;
          margin-top: 3px;
          font-size: 14px;

          .schedule {
            padding: 3px 5px;
            font-weight: 500;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            background-color: #dfecff;

            &:not(:last-of-type) {
              margin-bottom: 5px;
            }

            &.start {
              margin-left: 5px;

              &:not(.end) {
                width: calc(100% + 1px);
                margin-right: -1px;
              }
            }

            &.end {
              margin-right: 5px;
            }

            &:not(.start):not(.end) {
              width: calc(100% + 2px);
              margin-left: -1px;
            }
          }

          .more {
            margin-top: 5px;
            color: var(--neutral-300);
            text-align: center;
          }
        }
      }
    }
  }

  @media (max-width: 1300px) {
    .calendarTop {
      gap: calc(100vw * (20 / 1300));
      margin-bottom: calc(100vw * (20 / 1300));
      font-size: calc(100vw * (24 / 1300));

      button {
        width: calc(100vw * (30 / 1300));
      }
    }

    .calendarBody {
      .days {
        div {
          height: calc(100vw * (50 / 1300));
          font-size: calc(100vw * (18 / 1300));
        }
      }

      .week {
        .date {
          height: calc(100vw * (120 / 1300));
          padding: calc(100vw * (10 / 1300)) 0;

          .dateText {
            font-size: calc(100vw * (18 / 1300));
          }

          .scheduleWrap {
            margin-top: calc(100vw * (3 / 1300));
            font-size: calc(100vw * (14 / 1300));

            .schedule {
              padding: calc(100vw * (3 / 1300)) calc(100vw * (5 / 1300));

              &:not(:last-of-type) {
                margin-bottom: calc(100vw * (5 / 1300));
              }

              &.start {
                margin-left: calc(100vw * (5 / 1300));
              }

              &.end {
                margin-right: calc(100vw * (5 / 1300));
              }
            }

            .more {
              margin-top: calc(100vw * (5 / 1300));
            }
          }
        }
      }
    }
  }

  @media (max-width: 767px) {
    .calendarTop {
      gap: calc(100vw * (20 / 375));
      margin-bottom: calc(100vw * (20 / 375));
      font-size: calc(100vw * (20 / 375));

      button {
        width: calc(100vw * (30 / 375));
      }
    }

    .calendarBody {
      .days {
        div {
          height: calc(100vw * (36 / 375));
          font-size: calc(100vw * (14 / 375));
        }
      }

      .week {
        .date {
          height: calc(100vw * (90 / 375));
          padding: calc(100vw * (5 / 375)) 0;

          .dateText {
            font-size: calc(100vw * (14 / 375));
          }

          .scheduleWrap {
            margin-top: calc(100vw * (4 / 375));
            font-size: calc(100vw * (12 / 375));

            .schedule {
              padding: calc(100vw * (3 / 375)) calc(100vw * (5 / 375));

              &:not(:last-of-type) {
                margin-bottom: calc(100vw * (3 / 375));
              }

              &.start {
                margin-left: calc(100vw * (3 / 375));
              }

              &.end {
                margin-right: calc(100vw * (3 / 375));
              }
            }

            .more {
              margin-top: calc(100vw * (3 / 375));
            }
          }
        }
      }
    }
  }
`;

export { Container };

export default {
  Container,
};
