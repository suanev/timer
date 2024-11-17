import styled from "styled-components";

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 3.5rem;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.gray_100};
  }
`;

export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;

  table {
    width: 100%;
    min-width: 600px;
    border-collapse: collapse;

    th {
      padding: 1rem;

      line-height: 1.6;
      text-align: left;
      font-size: 0.875rem;

      color: ${({ theme }) => theme.colors.gray_100};
      background-color: ${({ theme }) => theme.colors.gray_600};

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      padding: 1rem;

      line-height: 1.6;
      font-size: 0.875rem;

      border-top: 4px solid ${({ theme }) => theme.colors.gray_800};
      background-color: ${({ theme }) => theme.colors.gray_700};

      &:first-child {
        width: 50%;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-bottom-right-radius: 8px;
      }
    }
  }
`;

const statusColors = {
  green: "green_500",
  red: "red_500",
  yellow: "yellow_500",
} as const;

type Status = keyof typeof statusColors;

interface StatusProps {
  statusColor: Status;
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 9999px;
    background-color: ${({ theme, statusColor }) =>
      theme.colors[statusColors[statusColor]]};
  }
`;
