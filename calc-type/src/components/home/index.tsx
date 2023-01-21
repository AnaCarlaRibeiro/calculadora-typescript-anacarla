import {
    Container,
    ContainerForm,
    DivInfo,
    DivH2,
    DivValor,
    DivForm,
    Venda,
    Parcelas,
    Mdr,
    DivH1,
  } from "./style";
  import {toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  
  
  import { useForm } from "react-hook-form";
  import { useEffect, useState } from "react";
  import { api } from "../service/api";

  
  interface IdataCalc {
    amount: number;
    installments: number;
    mdr: number;
    days: number;
    
  }

  interface IApiResponse {
    key: {
        [key: number]: number;
    }
}

  
  const Home = () => {
    const [apiResponse, setApiResponse] = useState<IApiResponse[]>([]);
    const [diasResponse, setDiasResponse] = useState<IApiResponse[]>([]);

    const notiFy = (message: string) =>
    toast(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  
    async function UsefetchAPI({
      amount,
      installments,
      mdr,
      days
    }: IdataCalc) 


    {

      const data = {
        amount,
        installments,
        mdr,
        days
       
      };
  
     await api
        .post("", data)
        .then((response) => {
          setApiResponse(response.data);
          })
        .catch((err) => {
          if (err.response) {
          if (err.response.status === 408) {
            toast.error("Timeout", {type: "error"});         

          } else if (err.response.status === 500) {
            toast.error("Internal Server Error", {type: "error"});
          }
          notiFy("Aguarde");
        }
      });
    }
    
   
   
  
    const { register, handleSubmit } = useForm<IdataCalc>();
  
    return (
      <Container>
        <ContainerForm>
          <DivH1>
            <h1>Simule sua Antecipação</h1>
          </DivH1>
          <div>
            <form onSubmit={handleSubmit(UsefetchAPI)}>
              <DivForm>
                <Venda>
                  <label htmlFor="amount"> Informe o valor da venda*</label>
                  <input
                    type="number"
                    id="amount"
                    {...register("amount")}
                  />
                </Venda>
                <Parcelas>
                  <label htmlFor="parcelas"> Em quantas parcelas*</label>
                  <div>
                    <input
                      type="number"
                      id="installments"
                      {...register("installments")}
                    />
                    <small>Máximo de 12 parcelas</small>
                  </div>
                </Parcelas>
                <Mdr>
                  <label htmlFor="mdr"> Informe o percentual de MDR</label>
                  <input type="number" id="mdr" {...register("mdr")} />
                </Mdr>
                <label htmlFor="days">Passe a quantidade de dias se desejar.</label>
                <input type="text" id="days"/>

                <button  type="submit"> Calcular</button>
              </DivForm>
            </form>
          </div>
        </ContainerForm>
  
        <DivInfo>
          <DivH2>
            <h2> Você receberá:</h2>
          </DivH2>
          
          <DivValor>
           

            {Object.keys(apiResponse).map((key:any) =>
    apiResponse[key] ? (
        key > 1 ? 
        <p>{`Em ${key} dias:` } 
            <span> {`R$ ${apiResponse[key]}`}</span>
           </p> : 
        <p>{`Amanhã:`} 
            <span>{`R$ ${apiResponse[key]}`}</span>
        </p>
        
    ) : null
)}


            
          </DivValor>

        </DivInfo>
      </Container>
    );
  };
  export default Home;
  