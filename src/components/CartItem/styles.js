import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[4]} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: ${({ theme }) => theme.radii.md};
    border: 1px solid ${({ theme }) => theme.colors.border};
  }

  .item-details {
    flex: 1;
    display: flex;
    flex-direction: column;

    .header-row {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: ${({ theme }) => theme.spacing[2]};

      h4 {
        font-family: ${({ theme }) => theme.fonts.display};
        font-size: ${({ theme }) => theme.fontSizes.sm};
        color: ${({ theme }) => theme.colors.text};
        margin: 0;
        line-height: 1.4;
      }

      button.remove {
        background: transparent;
        border: none;
        color: ${({ theme }) => theme.colors.textMuted};
        cursor: pointer;
        padding: ${({ theme }) => theme.spacing[1]};
        display: flex;
        align-items: center;
        justify-content: center;
        transition: color ${({ theme }) => theme.transitions.default};

        &:hover {
          color: ${({ theme }) => theme.colors.error};
        }
      }
    }

    .price-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: auto;

      .price {
        font-weight: 700;
        color: ${({ theme }) => theme.colors.primary};
        font-size: ${({ theme }) => theme.fontSizes.sm};
      }

      .controls {
        display: flex;
        align-items: center;
        border: 1px solid ${({ theme }) => theme.colors.border};
        border-radius: ${({ theme }) => theme.radii.sm};
        overflow: hidden;

        button {
          background: ${({ theme }) => theme.colors.surface};
          border: none;
          padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[2]};
          color: ${({ theme }) => theme.colors.text};
          cursor: pointer;
          transition: background ${({ theme }) => theme.transitions.default};

          &:hover:not(:disabled) {
            background: ${({ theme }) => theme.colors.surfaceAlt};
          }

          &:disabled {
            color: ${({ theme }) => theme.colors.textFaint};
            cursor: not-allowed;
          }
        }

        span {
          min-width: 2rem;
          text-align: center;
          font-size: ${({ theme }) => theme.fontSizes.sm};
          font-weight: 600;
        }
      }
    }
  }
`;
