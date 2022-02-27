import { CardLoader } from "common/components/Card/CardLoader/CardLoader";

type Props = {
  itemsCount?: number;
};

export const ContactsLoader = ({ itemsCount = 2 }: Props) => (
  <>
    {Array.from({ length: itemsCount }, (_, index) => (
      <CardLoader key={index} data-testid="contacts-card-loader" />
    ))}
  </>
);
