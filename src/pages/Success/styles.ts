import styled from 'styled-components'

interface InfoItemProps {
  variant: 'dark-yellow' | 'yellow' | 'purple'
}

export const SuccessContainer = styled.main`
  padding: 5rem 10rem;

  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  @media (min-width: 1300px) {
    padding: 5rem 7rem;
  }
`

export const SuccessText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  font-size: 1.25rem;
  color: ${(props) => props.theme['gray-800']};

  > h2 {
    font-size: 2rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;

    color: ${(props) => props.theme['yellow-800']};
  }
`

export const SuccessComponents = styled.div`
  display: flex;
  gap: 6.375rem;
  align-items: center;
`
export const CheckoutInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 2.5rem;

  line-height: 1.3;

  position: relative;

  border: 1px;
  border-radius: 6px 36px;
  background: ${(props) => props.theme['gray-100']};

  &:before {
    content: '';
    position: absolute;
    inset: 0px;
    border-radius: 10px;
    padding: 1px;
    margin: -1px;
    border-radius: inherit;
    z-index: -1;
    background: linear-gradient(
      102.89deg,
      ${(props) => props.theme['yellow-800']} 2.61%,
      ${(props) => props.theme['purple-500']} 98.76%
    );
  }

  /* border-radius: 10px; */

  /* border: 10px solid;
  border-image-slice: 1; */
  /* border-width: 1px;

  border: 1px solid;
  border-image-slice: 1;

  background: linear-gradient(
    102.89deg,
    ${(props) => props.theme['yellow-800']} 2.61%,
    ${(props) => props.theme['purple-500']} 98.76%
  ); */
`

export const InfoItem = styled.div<InfoItemProps>`
  display: flex;
  gap: 1.25rem;

  svg {
    padding: 0.5rem;

    min-width: 2rem;
    height: 2rem;

    font-size: 1rem;

    border-radius: 50%;

    color: ${(props) => props.theme.white};
    background-color: ${(props) => {
      switch (props.variant) {
        case 'dark-yellow':
          return props.theme['yellow-800']
        case 'yellow':
          return props.theme['yellow-500']
        case 'purple':
          return props.theme['purple-500']
      }
    }};
  }
`
