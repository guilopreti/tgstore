import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.4; }
  100% { opacity: 1; }
`;

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;

  .skeleton-image {
    width: 100%;
    aspect-ratio: 1;
    background-color: ${({ theme }) => theme.colors.border};
    animation: ${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
`;

export const Body = styled.div`
  padding: ${({ theme }) => theme.spacing[4]};
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: ${({ theme }) => theme.spacing[2]};

  .skeleton-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
    padding-top: ${({ theme }) => theme.spacing[4]};
  }
`;

export const Line = styled.div`
  height: ${({ height }) => height || '1rem'};
  width: ${({ width }) => width || '100%'};
  background-color: ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
  animation: ${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
`;
