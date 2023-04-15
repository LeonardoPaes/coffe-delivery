import styled from 'styled-components'

export const CoffeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 16rem;
  padding: 1.25rem 1.5rem;
  border-radius: 6px 36px;

  background: ${(props) => props.theme['gray-200']};

  img {
    width: 7.5rem;
    margin-top: -40px;
  }

  strong {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    margin-top: 1rem;

    color: ${(props) => props.theme['gray-800']};
  }

  & > span {
    margin-top: 0.5rem;
    font-size: 0.875rem;
    color: ${(props) => props.theme['gray-600']};
    text-align: center;
  }
`

export const CoffeTags = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  margin-top: 0.75rem;

  span {
    padding: 0.25rem 0.5rem;
    border-radius: 100px;

    white-space: nowrap;

    text-transform: uppercase;

    font-size: 0.625rem;
    line-height: 1.3;

    background: ${(props) => props.theme['yellow-100']};
    color: ${(props) => props.theme['yellow-800']};
  }
`

export const CartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  margin-top: 2.125rem;

  button {
    background: ${(props) => props.theme['purple-800']};
    color: ${(props) => props.theme.white};

    width: 2.375rem;
    height: 2.375rem;

    border-radius: 6px;
    border: 0;
    padding: 0.5rem;
  }

  & > div {
    font-size: 0.875rem;
    data {
      font-family: 'Baloo 2', sans-serif;
      font-size: 1.5rem;
      font-weight: 800;

      padding-left: 0.25rem;
    }
  }

  div:last-child {
    display: flex;
    gap: 0.5rem;
  }
`
