import styled from 'styled-components'

export const QuantityContainer = styled.div`
  display: flex;
  background: ${(props) => props.theme['gray-400']};
  border-radius: 6px;
  overflow: hidden;

  & > button {
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    background: ${(props) => props.theme['gray-400']};
    color: ${(props) => props.theme['purple-500']};

    border: 0;

    width: 1.5rem;

    padding: 0;

    :hover {
      color: ${(props) => props.theme['purple-800']};
    }
  }

  input {
    border: 0;
    background: ${(props) => props.theme['gray-400']};
    color: ${(props) => props.theme['gray-900']};

    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    width: 1.5rem;
    padding: 0.5rem;
  }
`
