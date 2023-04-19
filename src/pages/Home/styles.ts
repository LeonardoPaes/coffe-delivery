import styled from 'styled-components'
import backgroundCoffe from '../../assets/coffe-background.svg'

interface AdvantageProps {
  variant: 'dark-yellow' | 'yellow' | 'gray' | 'purple'
}

export const HomeContainer = styled.main`
  display: flex;

  flex-direction: column;
  align-items: center;

  width: 100%;
`

export const BannerContainer = styled.div`
  background-image: url(${backgroundCoffe});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
`

export const BannerContent = styled.div`
  display: flex;

  gap: 3.5rem;
  /* padding: 5.75rem 10rem; */
  max-width: 1120px;
  margin: auto;
  padding: 5.75rem 1.5rem;
  width: 100%;

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

  /* @media (min-width: 1300px) {
    padding: 5.75rem 7rem;
  } */
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

    min-width: 2rem;
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
  /* padding: 0rem 10rem; */
  /* padding: 0rem 10%; */
  width: 100%;
  max-width: 1120px;
  padding: 0 1.5rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;

    color: ${(props) => props.theme['gray-800']};
  }

  & > div {
    display: grid;
    /* grid-template-columns: 1fr 1fr 1fr 1fr; */
    grid-template-columns: repeat(auto-fill, minmax(235px, 1fr));

    grid-column-gap: 2rem;
    grid-row-gap: 2.5rem;

    padding: 3.375rem 0;
  }

  /* @media (max-width: 1350px) {
    padding: 0rem 7rem;
  } */
`
