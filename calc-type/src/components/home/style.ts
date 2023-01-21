import styled from "styled-components"

export const Container = styled.div`
  display: flex;

  justify-content: space-evenly;
  align-items: flex-end;

  /* flex-wrap: wrap; */

  border: solid 1px #d9d9d9;
  border-radius: 15px;

  width: 680px;
  height: 500px; //389
  font-family: 'Source Sans Pro';
  h1{
    color:#656565;
    font-size: 24px;
    line-height: 28.13px;
   
  }
  input{
    width: 251px;
    height: 37px;
    border-radius: 4px;
    outline: 0;
  }
  input:focus{
    border: 1px solid #66AFE9;
    

  }
  label{
color: #656565;
font-size: 14px;
  }
`;

export const ContainerForm = styled.div`
  /* padding: 32px; */
  form {
    display: flex;
    flex-direction: column;

     width: 300px;

    /* height: 300px;  */
    /* gap: 78px; */

    button {
      outline: none;
      background-color: #0000001c;
    width: 75px;
      height: 25px;
      border-radius: 4px;
      font-size: 17px;
      position: relative;
    top: -12px;
    }
  }
`;
export const DivH1 =styled.div`
    padding: 25px;
`
export const DivForm = styled.div`
display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    /* height: 500px; */
`;
export const Venda = styled.div`
  input {
    /* border: ridge; */
    border: 1px solid #dde6e9;
    
  }
`;
export const Parcelas = styled.div`
  input {
    /* border: ridge; */
    border: 1px solid #DDE6E9;
  
  }
  div{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 13px;
    color: #CECECE;
  }
  
`;
export const Mdr = styled.div`
  input {
    /* border: ridge; */
    border: 1px solid #dde6e9;
    
  }
`;
export const Dias=styled.div`
 input {
    /* border: ridge; */
    border: 1px solid #dde6e9;
    
  }
`
// export const BotãoTeste=styled.div`
// button{
//   position: relative;
//     left: 128px;

// }

// ` 

export const DivInfo = styled.div`
  border: solid 1px #d9d9d9;
  width: 231px;
  height: 500px;
  border-radius: 0 15px 15px 0;
  background-color: #80808024;
  position: relative;
    left: 50px;
    p{
      display: flex;
      gap: 3px;
    }
`;
export const DivH2 = styled.div`
  margin-top: 62px;
  position: relative;
    left: -33px;
  h2 {
    color: #3d75bb;
    font-size: 16px;
    /* border-bottom: 2px solid black; */
  }
  h2::after{
    content: "";
   display: block;
   width: 161px;
   height: 2px;
   margin-top: 5px;
   background-color:#5D9CEC;
   opacity: 0.3;
   position: absolute;
    left: 64px;
  
  }
`;
export const DivValor = styled.div`
  padding: 33px;
  align-items: flex-start;
    display: flex;
    flex-direction: column;
    
    gap: 27px;
    p{
      color: var(--blue);
  font-weight: 400;
    }
    span{
      color: var(--blue);
  font-weight: 700;
    }
`;
export const Ppai = styled.p`
  color: var(--blue);
  font-weight: 400;
  /* p{
    color: var(--blue);
  font-weight: 700;
  } */
`;

export const Pfilho = styled.p`
  color: var(--blue);
  font-weight: 700;
`;
