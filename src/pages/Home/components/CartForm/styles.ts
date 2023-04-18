import styled from 'styled-components'

export const CartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  flex: 0;

  margin-top: 2.125rem;

  & > div {
    font-size: 0.875rem;
    data {
      font-family: 'Baloo 2', sans-serif;
      font-size: 1.5rem;
      font-weight: 800;

      padding-left: 0.25rem;
    }
  }

  form {
    display: flex;
    gap: 0.5rem;

    > button {
      background: ${(props) => props.theme['purple-800']};
      color: ${(props) => props.theme.white};

      width: 2.375rem;
      height: 2.375rem;

      border-radius: 6px;
      border: 0;
      padding: 0.5rem;

      transition: background-color 0.1s;

      :hover {
        background: ${(props) => props.theme['purple-500']};
      }
    }
  }

  /* div:last-child {
    display: flex;
    gap: 0.5rem;
  } */
`
