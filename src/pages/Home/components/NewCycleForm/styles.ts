import styled from "styled-components";

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  font-size: 1.125rem;
  font-weight: bold;

  color: ${({ theme }) => theme.colors.gray_100};
`;

const BaseInput = styled.input`
  border: 0;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray_500};

  padding: 0 0.5rem;
  height: 2.5rem;

  font-weight: bold;
  font-size: 1.125rem;

  color: ${({ theme }) => theme.colors.gray_100};
  background: transparent;

  &:focus {
    box-shadow: none;
    border-color: ${({ theme }) => theme.colors.green_500};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray_500};
  }
`;

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`;

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`;
