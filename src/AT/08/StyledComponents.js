import styled from 'styled-components';

export const Card = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ProfileSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const UserInfo = styled.div`
  width: 100%;
  margin-top: 10px;
`;

export const UserPhoto = styled.img`
  width: 100%;
  height: 200px;

  @media (min-width: 768px) {
    width: 400px;
    margin-right: 10px;
  }
`;

export const Name = styled.p`
  font-weight: bold;
`;

export const Details = styled.p`
  color: #666;
  font-size: 14px;
`;

export const InteractionIcons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 10px 0;

  @media (min-width: 768px) {
    width: fit-content;
    flex-direction: column;
  }
`;

export const Icon = styled.img`
  width: 35px;
  height: 35px;
`;

export const TaskHeader = styled.th`
  padding: 12px;
  text-align: left;
  background-color: #f4f4f4;
  color: #333;
`;

export const TaskTable = styled.table`
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
`;

export const TaskRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

export const TaskData = styled.td`
  padding: 8px;
  text-align: left;
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 10px;
`;
