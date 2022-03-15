import styled from '@emotion/styled';

export const FormContainer = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 961px) {
    width: 80%;
    height: auto;
    margin: 0 auto;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`

export const FormButtonPrimary = styled.button`
  width: 80%;
  height: 50px;
  border-radius:20px;
  margin: 60px auto;
  border: none;
  box-shadow: 2px 5px 6px rgb(0 0 0 / 0.1);
  background: var(--light-blue-11);
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;

  &:focus {
    border: solid 1px var(--dark, #000);
    box-shadow: 2px 5px 6px rgb(0 0 0 / 0.3);
  }

`
export const FormButtonSecondary = styled.button`
  width: 80%;
  height: 50px;
  border-radius: 20px;
  margin: 60px auto;
  border: none;
  box-shadow: 2px 5px 6px rgb(0 0 0 / 0.1);
  background: var(--light-red-1);
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;

  &:focus {
    border: solid 1px var(--dark, #000);
    box-shadow: 2px 5px 6px rgb(0 0 0 / 0.3);
  }
`
