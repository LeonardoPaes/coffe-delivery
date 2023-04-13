import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;

  padding: 2.5rem 10rem;

  h3 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;

    color: ${(props) => props.theme['gray-800']};
  }
`

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  & > div {
    display: flex;
    flex-direction: column;

    margin-top: 0.25rem;
    padding: 2.5rem;

    border-radius: 6px;

    background: ${(props) => props.theme['gray-200']};
  }
`

export const UserInfoHeader = styled.div`
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
`

export const UserInfoForm = styled.form`
  margin-top: 2rem;

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

  input {
    border: 1px solid ${(props) => props.theme['gray-400']};
    border-radius: 4px;

    padding: 0.75rem;

    background: ${(props) => props.theme['gray-300']};
  }

  .cepInput {
    grid-area: cep;
  }

  .streetInput {
    grid-area: street;
  }

  .numberInput {
    grid-area: number;
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
`

export const OrderInfoContainer = styled.div`
  div {
    margin-top: 1rem;
    border-radius: 6px 36px;
    padding: 2.5rem;

    background: ${(props) => props.theme['gray-200']};
  }
`

export const OrderItem = styled.div``

export const OrderResume = styled.div``
