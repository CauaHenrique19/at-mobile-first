import {
  Card,
  ProfileSection,
  UserInfo,
  UserPhoto,
  Name,
  Details,
  InteractionIcons,
  Icon,
  TaskTable,
  TaskRow,
  TaskData,
  Checkbox,
  TaskHeader,
} from "./StyledComponents";
import Image from "./pessoa.png";
import IconContact from "./icon-contact.png";
import LocaleIcon from "./locale-icon.png";
import MailIcon from "./mail-icon.png";

const EmployeeCard = () => {
  const user = {
    name: "Cauã Henrique",
    birthDate: "19/05/2004",
    department: "Engenharia",
    jobRole: "Analista de Sistemas Pleno",
  };

  const tasks = [
    { name: "CRUD Usuários" },
    { name: "Autenticação JWT" },
    { name: "Deploy em Produção" },
  ];

  return (
    <Card>
      <ProfileSection>
        <UserPhoto src={Image} alt="User Photo" />
        <UserInfo>
          <Name>{user.name}</Name>
          <Details>{user.birthDate}</Details>
          <Details>{user.department}</Details>
          <Details>{user.jobRole}</Details>
        </UserInfo>
        <InteractionIcons>
          <Icon src={IconContact} />
          <Icon src={MailIcon} />
          <Icon src={LocaleIcon} />
        </InteractionIcons>
      </ProfileSection>
      <TaskTable>
        <thead>
          <tr>
            <TaskHeader>Status</TaskHeader>
            <TaskHeader>Tarefas</TaskHeader>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <TaskRow key={index}>
              <TaskData>
                <Checkbox value={task.completed} />
              </TaskData>
              <TaskData>{task.name}</TaskData>
            </TaskRow>
          ))}
        </tbody>
      </TaskTable>
    </Card>
  );
};

export default EmployeeCard;
