import styled from 'styled-components'
import backgroundCoffe from '../../assets/coffe-background.svg'

interface AdvantageProps {
  variant: 'dark-yellow' | 'yellow' | 'gray' | 'purple'
}

export const HomeContainer = styled.main`
  display: flex;

  flex-direction: column;
`

export const BannerContainer = styled.div`
  display: flex;

  gap: 3.5rem;

  background-image: url(${backgroundCoffe});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 5.75rem 10rem;

  div {
    strong {
      display: block;

      line-height: 1.2;

      color: ${(props) => props.theme['gray-900']};

      font-family: 'Baloo 2', sans-serif;
      font-weight: 800;
      font-size: 3rem;
    }

    span {
      display: block;
      margin-top: 1rem;
      font-size: 1.25rem;

      color: ${(props) => props.theme['gray-800']};
    }
  }

  img {
    /* width: 29.75rem; */
    width: 44%;
  }
`

export const AdvantagesContainer = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  column-gap: 1rem;

  margin-top: 4.125rem;
`

export const Advantage = styled.small<AdvantageProps>`
  display: flex;
  align-items: center;

  gap: 0.75rem;

  font-size: 1rem;

  color: ${(props) => props.theme['gray-700']};

  /* white-space: nowrap; */

  svg {
    /* box-sizing: content-box; */
    padding: 0.5rem;

    width: 2rem;
    height: 2rem;

    border-radius: 50%;

    color: ${(props) => props.theme.white};
    background-color: ${(props) => {
      switch (props.variant) {
        case 'dark-yellow':
          return props.theme['yellow-800']
        case 'yellow':
          return props.theme['yellow-500']
        case 'gray':
          return props.theme['gray-700']
        case 'purple':
          return props.theme['purple-500']
      }
    }};
  }
`

export const ProductsContainer = styled.div`
  padding: 0rem 10rem;
  /* padding: 0rem 10%; */

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;

    color: ${(props) => props.theme['gray-800']};
  }

  & > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    grid-column-gap: 2rem;
    grid-row-gap: 2.5rem;

    padding: 3.375rem 0;
  }
`

export const CoffeCard = styled.div`
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
