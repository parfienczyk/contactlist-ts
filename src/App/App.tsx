import { Button } from "common/components/Button/Button";

import { Contacts } from "Contacts/Contacts";
import { ContactsLoader } from "Contacts/ContactsLoader/ContactsLoader";

import { useApp } from "App/app.hooks";
import {
  ButtonWrapper,
  ContactsWrapper,
  Error,
  Summary,
  Wrapper,
} from "App/app.styles";

function App() {
  const {
    contacts,
    error,
    handleFetch,
    handleSelect,
    isLoading,
    isSelected,
    totalSelected,
  } = useApp();

  return (
    <>
      <Summary>Selected contacts: {totalSelected}</Summary>

      <Wrapper>
        <ContactsWrapper>
          <Contacts
            contacts={contacts}
            onClick={handleSelect}
            isSelected={isSelected}
          />

          {isLoading && <ContactsLoader itemsCount={5} />}
        </ContactsWrapper>

        <ButtonWrapper>
          <Button onClick={handleFetch} disabled={isLoading}>
            {isLoading ? "Loading..." : "Load more"}
          </Button>
        </ButtonWrapper>

        {error && <Error>{error}</Error>}
      </Wrapper>
    </>
  );
}

export default App;
