import styled from "styled-components";

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`;

export const BaseCountdownButton = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;
  gap: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  color: ${({ theme }) => theme.colors.gray_100};
`;

export const StartCountdownButton = styled(BaseCountdownButton)`
  background: ${({ theme }) => theme.colors.green_500};

  &:not(:disabled):hover {
    background: ${({ theme }) => theme.colors.green_700};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const StopCountdownButton = styled(BaseCountdownButton)`
  background: ${({ theme }) => theme.colors.red_500};

  &:hover {
    background: ${({ theme }) => theme.colors.red_700};
  }
`;
