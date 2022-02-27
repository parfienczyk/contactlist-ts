import {
  Email,
  JobTitle,
  Name,
  Wrapper,
} from "PersonalInfo/personalInfo.styles";

type Props = {
  emailAddress: string;
  jobTitle: string;
  name: string;
};

const PersonInfo = ({ emailAddress, jobTitle, name }: Props) => (
  <Wrapper>
    <Name>{name}</Name>
    <JobTitle>{jobTitle}</JobTitle>
    <Email>{emailAddress}</Email>
  </Wrapper>
);

export default PersonInfo;
