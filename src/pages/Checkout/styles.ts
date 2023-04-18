import styled from 'styled-components'

interface UserInfoHeaderProps {
  variant: 'purple' | 'yellow'
}

export const CheckoutContainer = styled.form`
  display: flex;
  align-items: flex-start;
  gap: 2rem;

  padding: 2.5rem 10rem;

  h3 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;

    color: ${(props) => props.theme['gray-800']};
  }

  @media (min-width: 1300px) {
    padding: 2.5rem 7rem;
  }
`

export const UserInfoContainer = styled.div`
  flex: 57.14%;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    margin-top: 0.25rem;
    padding: 2.5rem;

    border-radius: 6px;

    background: ${(props) => props.theme['gray-200']};
  }
`

export const UserInfoHeader = styled.div<UserInfoHeaderProps>`
  display: flex;
  align-items: flex-start;
  justify-content: left;

  gap: 0.5rem;

  div {
    line-height: 1.3;
    title {
      display: block;
      font-size: 1rem;
      color: ${(props) => props.theme['gray-800']};
    }
    span {
      display: block;
      font-size: 0.875rem;
      color: ${(props) => props.theme['gray-700']};
    }
  }

  svg {
    color: ${(props) => {
      if (props.variant === 'purple') {
        return props.theme['purple-500']
      } else {
        return props.theme['yellow-500']
      }
    }};
  }
`

export const UserInfoFormContainer = styled.div`
  /* margin-top: 2rem; */

  /*JEITO LEGAL MAS NÃO TÃO RESPONSIVO */
  display: grid;
  grid-template-areas:
    'cep null null'
    'street street street'
    'number complement complement'
    'neighborhood city uf';
  grid-template-columns: 36% auto 11%;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-row-gap: 1rem;
  grid-column-gap: 0.75rem;

  .cepInput {
    grid-area: cep;
  }

  .streetInput {
    grid-area: street;
  }

  .numberInput {
    grid-area: number;
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  .complementInput {
    grid-area: complement;
  }

  .neighborhoodInput {
    grid-area: neighborhood;
  }

  .cityInput {
    grid-area: city;
  }

  .ufInput {
    grid-area: uf;
  }

  /* .cepInput {
    width: 36%;
  }

  .streetInput {
    width: 100%;
  }

  .numberInput {
    width: 36%;
  }

  .complementInput {
    width: 64%;
  }

  .neighborhoodInput {
    width: 36%;
  }

  .cityInput {
    width: 53%;
  }

  .ufInput {
    width: 11%;
  } */

  input {
    border: 1px solid ${(props) => props.theme['gray-400']};
    border-radius: 4px;
    width: 100%;

    /* margin-bottom: 1rem; */

    padding: 0.75rem;

    background: ${(props) => props.theme['gray-300']};

    :focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-800']};
    }
  }
`

export const PaymentOptions = styled.div`
  /* margin-top: 2rem; */
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  gap: 1rem;

  input[type='radio'] {
    display: none;
  }

  label {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    border-radius: 6px;
    padding: 1rem;

    font-size: 0.75rem;

    min-width: 11.25rem;

    background: ${(props) => props.theme['gray-400']};
    color: ${(props) => props.theme['gray-700']};

    border: 1px solid transparent;

    svg {
      color: ${(props) => props.theme['purple-500']};
    }
  }

  input[type='radio']:checked + label {
    background: ${(props) => props.theme['purple-100']};
    border: 1px solid ${(props) => props.theme['purple-500']};
  }
`

export const OrderItemsContainer = styled.div`
  flex: 40%;

  & > div {
    margin-top: 1rem;
    border-radius: 6px 36px;
    padding: 2.5rem;

    background: ${(props) => props.theme['gray-200']};

    > button {
      cursor: pointer;

      border: 0;
      border-radius: 6px;

      line-height: 1.6;

      width: 100%;
      margin-top: 2rem;
      padding: 0.75rem;
      font-size: 0.875rem;

      color: ${(props) => props.theme.white};
      background: ${(props) => props.theme['yellow-500']};

      :hover {
        background: ${(props) => props.theme['yellow-800']};
      }
    }

    > div:not(:first-child) {
      padding-top: 2rem;
    }
  }
`

export const NoItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  text-align: center;
  color: ${(props) => props.theme['gray-600']};
`

export const ErrorMessage = styled.span`
  font-size: 0.875rem;
  color: ${(props) => props.theme['red-500']};
`
