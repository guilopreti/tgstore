import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.4; }
  100% { opacity: 1; }
`;

export const Container = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing[8]} ${({ theme }) => theme.spacing[6]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing[6]} ${({ theme }) => theme.spacing[4]};
  }

  .back-button {
    display: inline-flex;
    align-items: center;
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    cursor: pointer;
    margin-bottom: ${({ theme }) => theme.spacing[6]};
    transition: color ${({ theme }) => theme.transitions.default};

    &:hover {
      color: ${({ theme }) => theme.colors.text};
    }
    
    svg {
      margin-right: ${({ theme }) => theme.spacing[2]};
    }
  }

  .product-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${({ theme }) => theme.spacing[12]};
    align-items: flex-start;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      grid-template-columns: 1fr;
      gap: ${({ theme }) => theme.spacing[8]};
    }

    .image-container {
      background: ${({ theme }) => theme.colors.surface};
      border: 1px solid ${({ theme }) => theme.colors.border};
      border-radius: ${({ theme }) => theme.radii.lg};
      overflow: hidden;

      img {
        width: 100%;
        aspect-ratio: 1;
        object-fit: cover;
        display: block;
      }
    }

    .info-container {
      .category {
        font-size: ${({ theme }) => theme.fontSizes.sm};
        color: ${({ theme }) => theme.colors.textMuted};
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: ${({ theme }) => theme.spacing[2]};
        display: block;
      }

      h1 {
        font-family: ${({ theme }) => theme.fonts.display};
        font-size: ${({ theme }) => theme.fontSizes['2xl']};
        color: ${({ theme }) => theme.colors.text};
        margin: 0 0 ${({ theme }) => theme.spacing[4]};
      }

      .price {
        font-size: ${({ theme }) => theme.fontSizes['2xl']};
        font-weight: 700;
        color: ${({ theme }) => theme.colors.primary};
        display: block;
        margin-bottom: ${({ theme }) => theme.spacing[6]};
      }

      .description {
        font-size: ${({ theme }) => theme.fontSizes.base};
        color: ${({ theme }) => theme.colors.textMuted};
        line-height: 1.6;
        margin-bottom: ${({ theme }) => theme.spacing[8]};
      }

      .action-area {
        display: flex;
        gap: ${({ theme }) => theme.spacing[4]};
        align-items: center;

        @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
          flex-direction: column;
          align-items: stretch;
        }

        .quantity-selector {
          display: flex;
          align-items: center;
          border: 1px solid ${({ theme }) => theme.colors.border};
          border-radius: ${({ theme }) => theme.radii.md};
          overflow: hidden;

          button {
            background: ${({ theme }) => theme.colors.surface};
            border: none;
            padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
            font-size: ${({ theme }) => theme.fontSizes.lg};
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
            min-width: 3rem;
            text-align: center;
            font-weight: 600;
          }
        }

        .add-button {
          flex: 1;
          background: ${({ theme }) => theme.colors.primary};
          color: ${({ theme }) => theme.colors.white};
          border: none;
          border-radius: ${({ theme }) => theme.radii.md};
          padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[6]};
          font-size: ${({ theme }) => theme.fontSizes.base};
          font-weight: 600;
          cursor: pointer;
          transition: background ${({ theme }) => theme.transitions.default};

          &:hover {
            background: ${({ theme }) => theme.colors.primaryHover};
          }
        }
      }
    }
  }

  .skeleton-image {
    width: 100%;
    aspect-ratio: 1;
    background-color: ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radii.lg};
    animation: ${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  .skeleton-line {
    height: 1.5rem;
    background-color: ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radii.sm};
    animation: ${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    margin-bottom: ${({ theme }) => theme.spacing[4]};

    &.title { height: 3rem; width: 80%; }
    &.price { height: 2.5rem; width: 40%; margin-bottom: ${({ theme }) => theme.spacing[6]}; }
    &.text { height: 1rem; width: 100%; margin-bottom: ${({ theme }) => theme.spacing[2]}; }
    &.text-short { height: 1rem; width: 60%; margin-bottom: ${({ theme }) => theme.spacing[8]}; }
    &.button { height: 3.5rem; width: 100%; }
  }
`;
