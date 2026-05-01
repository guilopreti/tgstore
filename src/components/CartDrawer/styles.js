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
`;

export const Container = styled.aside`
  width: 100%;
  max-width: 400px;
  background-color: ${({ theme }) => theme.colors.surface};
  height: 100%;
  padding: ${({ theme }) => theme.spacing[6]};
  box-shadow: -4px 0 15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  z-index: 100;
  transform: translateX(0);
  transition: transform ${({ theme }) => theme.transitions.default};

  .drawer-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${({ theme }) => theme.spacing[6]};

    h2 {
      margin: 0;
      font-family: ${({ theme }) => theme.fonts.display};
      font-size: ${({ theme }) => theme.fontSizes.xl};
      color: ${({ theme }) => theme.colors.text};
    }

    button {
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

  .empty-message {
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: ${({ theme }) => theme.fontSizes.base};
    text-align: center;
    margin-top: ${({ theme }) => theme.spacing[8]};
  }
`;
