import { Container, Body, Line } from './styles';

export default function SkeletonCard() {
  return (
    <Container>
      <div className="skeleton-image" />
      <Body>
        <Line width="40%" height="0.75rem" />
        <Line width="90%" height="1.25rem" />
        <Line width="70%" height="1.25rem" />
        <div className="skeleton-footer">
          <Line width="30%" height="1.5rem" />
          <Line width="40%" height="2rem" />
        </div>
      </Body>
    </Container>
  );
}
