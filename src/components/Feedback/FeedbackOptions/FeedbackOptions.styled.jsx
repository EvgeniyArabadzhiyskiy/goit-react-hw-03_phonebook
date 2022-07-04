import styled from '@emotion/styled';

export const ButtonBox = styled.div`
  margin: 20px 0;
`;

export const Button = styled.button`
  width: 75px;
  padding: 8px 12px;
  border: none;
  background-color: #230edb;
  color: white;
  margin-right: 12px;
  border-radius: 4px;
  transition: background-color 300ms linear;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    color: #121213;
    font-weight: 500;
    background-color: #5c93b3;
  }
`;
