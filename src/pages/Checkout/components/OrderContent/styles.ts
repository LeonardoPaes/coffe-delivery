import styled from 'styled-components'

export const OrderItem = styled.div`
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme['gray-400']};
  padding-bottom: 2rem;

  img {
    width: 4rem;
  }

  & > span {
    margin-left: auto;
    white-space: nowrap;
    font-weight: bold;
  }
`

export const OrderInfo = styled.div`
  margin-left: 1.25rem;

  display: flex;
  flex-direction: column;

  gap: 0.5rem;

  & > div {
    display: flex;
    gap: 0.5rem;

    & > button {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      cursor: pointer;

      padding: 0.5rem;

      color: ${(props) => props.theme['gray-700']};
      background: ${(props) => props.theme['gray-400']};

      font-size: 0.75rem;

      border-radius: 6px;
      border: 0;

      svg {
        color: ${(props) => props.theme['purple-500']};
      }

      :hover {
        color: ${(props) => props.theme['gray-800']};
        background: ${(props) => props.theme['gray-500']};
      }
    }
  }

  & > h4 {
    display: block;

    font-weight: 400;
    font-size: 1rem;
  }
`

export const OrderResume = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: auto auto;
  grid-row-gap: 0.75rem;

  strong {
    font-size: 1.25rem;
    color: ${(props) => props.theme['gray-800']};
  }

  > span:nth-child(even) {
    text-align: right;
  }

  > strong:nth-child(even) {
    text-align: right;
  }
`
