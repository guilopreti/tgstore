import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 90;
  display: flex;
  justify-content: flex-end;
  
  /* Animação de entrada e saída baseada na prop $isOpen */
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transition: opacity ${({ theme }) => theme.transitions.default},
              visibility ${({ theme }) => theme.transitions.default};
`;

export const Container = styled.aside`
  width: 100%;
  max-width: 420px;
  background-color: ${({ theme }) => theme.colors.surface};
  height: 100%;
  display: flex;
  flex-direction: column;
  z-index: 100;
  box-shadow: -4px 0 24px rgba(0, 0, 0, 0.15);
  
  /* Desliza da direita */
  transform: translateX(${({ $isOpen }) => ($isOpen ? '0' : '100%')});
  transition: transform ${({ theme }) => theme.transitions.default};

  .drawer-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${({ theme }) => theme.spacing[6]};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};

    h2 {
      margin: 0;
      font-family: ${({ theme }) => theme.fonts.display};
      font-size: ${({ theme }) => theme.fontSizes.xl};
      color: ${({ theme }) => theme.colors.text};
    }

    button.close-btn {
      background: transparent;
      border: none;
      font-size: ${({ theme }) => theme.fontSizes['2xl']};
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

  .drawer-body {
    flex: 1;
    overflow-y: auto;
    padding: 0 ${({ theme }) => theme.spacing[6]};
  }

  .drawer-footer {
    padding: ${({ theme }) => theme.spacing[6]};
    border-top: 1px solid ${({ theme }) => theme.colors.border};
    background: ${({ theme }) => theme.colors.surfaceAlt};

    .total-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: ${({ theme }) => theme.spacing[4]};

      span {
        font-size: ${({ theme }) => theme.fontSizes.base};
        color: ${({ theme }) => theme.colors.text};
      }

      strong {
        font-size: ${({ theme }) => theme.fontSizes.xl};
        color: ${({ theme }) => theme.colors.primary};
      }
    }

    .footer-actions {
      display: flex;
      flex-direction: column;
      gap: ${({ theme }) => theme.spacing[3]};

      button.checkout {
        width: 100%;
        background: ${({ theme }) => theme.colors.success};
        color: ${({ theme }) => theme.colors.white};
        border: none;
        border-radius: ${({ theme }) => theme.radii.md};
        padding: ${({ theme }) => theme.spacing[4]};
        font-size: ${({ theme }) => theme.fontSizes.base};
        font-weight: 700;
        cursor: pointer;
        transition: opacity ${({ theme }) => theme.transitions.default};

        &:hover {
          opacity: 0.9;
        }
      }

      button.clear {
        width: 100%;
        background: transparent;
        color: ${({ theme }) => theme.colors.error};
        border: 1px solid ${({ theme }) => theme.colors.error};
        border-radius: ${({ theme }) => theme.radii.md};
        padding: ${({ theme }) => theme.spacing[3]};
        font-size: ${({ theme }) => theme.fontSizes.sm};
        font-weight: 600;
        cursor: pointer;
        transition: background ${({ theme }) => theme.transitions.default};

        &:hover {
          background: rgba(239, 68, 68, 0.1);
        }
      }
    }
  }
`;
