import { Card } from "common/components/Card/Card";
import { Contact } from "common/types/contact";

import PersonInfo from "PersonalInfo/PersonInfo";

type Props = {
  contacts: Contact[];
  isSelected: (contactId: string) => boolean;
  onClick: (contactId: string) => void;
};

export const Contacts = ({ contacts, isSelected, onClick }: Props) => (
  <>
    {contacts.map(({ id, firstNameLastName, jobTitle, emailAddress }) => (
      <Card key={id} isSelected={isSelected(id)} onClick={() => onClick(id)}>
        <PersonInfo
          emailAddress={emailAddress}
          name={firstNameLastName}
          jobTitle={jobTitle}
        />
      </Card>
    ))}
  </>
);
