import { Container } from './styles';

export default function EmptyState({ title, description }) {
  return (
    <Container>
      <h2>{title}</h2>
      <p>{description}</p>
    </Container>
  );
}
