import styled from 'styled-components'

export const QuantityContainer = styled.div`
  display: flex;
  background: ${(props) => props.theme['gray-400']};
  border-radius: 6px;
  overflow: hidden;

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme['gray-400']};
    color: ${(props) => props.theme['purple-500']};

    width: 1.5rem;
  }

  input {
    border: 0;
    background: ${(props) => props.theme['gray-400']};
    color: ${(props) => props.theme['gray-900']};

    width: 1.5rem;
    padding: 0.5rem;
  }
`
