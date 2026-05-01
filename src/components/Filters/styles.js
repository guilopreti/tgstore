import styled from 'styled-components';

export const Container = styled.section`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.spacing[4]};
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: row;
    align-items: center;
  }

  .search-wrapper {
    flex: 1;
    position: relative;
    
    input {
      width: 100%;
      padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
      border: 1px solid ${({ theme }) => theme.colors.border};
      border-radius: ${({ theme }) => theme.radii.md};
      font-size: ${({ theme }) => theme.fontSizes.sm};
      outline: none;
      transition: border-color ${({ theme }) => theme.transitions.default};

      &:focus {
        border-color: ${({ theme }) => theme.colors.primary};
      }
    }
  }

  .controls-group {
    display: flex;
    gap: ${({ theme }) => theme.spacing[4]};
    flex-wrap: wrap;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      flex-direction: column;
    }
  }

  select {
    padding: ${({ theme }) => theme.spacing[3]};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radii.md};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    background: ${({ theme }) => theme.colors.surface};
    outline: none;
    cursor: pointer;
    min-width: 160px;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      width: 100%;
    }

    &:focus {
      border-color: ${({ theme }) => theme.colors.primary};
    }
  }

  .clear-btn {
    background: transparent;
    color: ${({ theme }) => theme.colors.error};
    border: 1px solid ${({ theme }) => theme.colors.error};
    border-radius: ${({ theme }) => theme.radii.md};
    padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    cursor: pointer;
    font-weight: 600;
    transition: background ${({ theme }) => theme.transitions.default};

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      width: 100%;
    }

    &:hover {
      background: rgba(239, 68, 68, 0.1);
    }
  }
`;
