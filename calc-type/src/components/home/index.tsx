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
  Dias,
} from "./style";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  };
}

const Home = () => {
  const [apiResponse, setApiResponse] = useState<IApiResponse[]>([]);
  const [diasResponse, setDiasResponse] = useState<IApiResponse[]>([]);
  const [showDiasResponse, setShowDiasResponse] = useState<boolean>(false);
  console.log(showDiasResponse);

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

  async function UsefetchAPI({ amount, installments, mdr, days }: IdataCalc) {
    let data = {
      amount,
      installments,
      mdr,
    };
    let data2 = undefined;
    if (days) {
      data2 = {
        days: [days],
        amount,
        installments,
        mdr,
      };
    }
    // console.log("data:", data, "data2:", data2, "days:", days);

    // const data2 = {
    //   amount,
    //   installments,
    //   mdr,
    //   days,
    // };
    const request = data2 !== undefined ? data2 : data;
    await api
      .post("", request)
      .then((response) => {
        setApiResponse(response.data);

        if (days) {
          setDiasResponse(response.data.days);
          setShowDiasResponse(true);
          console.log(response.data);
        }
      })
      .catch((err) => {
        if (err.response) {
          if (err.response.status === 408) {
            toast.error("Timeout", { type: "error" });
          } else if (err.response.status === 500) {
            toast.error("Internal Server Error", { type: "error" });
          }
          notiFy("Aguarde");
        }
      });

    // api
    //   .post("", data2)
    //   .then((resp) => {
    //     setApiResponse(resp.data);
    //     console.log(setApiResponse);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
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
                <input type="number" id="amount" {...register("amount")} />
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
              <Dias>
                <label htmlFor="days"> Em quantos dias*</label>
                <div>
                  <input type="number" id="days" {...register("days")} />
                
                </div>
              </Dias>

              <button type="submit"> Calcular</button>
            </DivForm>
          </form>
        </div>
      </ContainerForm>

      <DivInfo>
        <DivH2>
          <h2> Você receberá:</h2>
        </DivH2>

        <DivValor>
          {apiResponse &&
            Object.keys(apiResponse).map((key: any) =>
              apiResponse[key] ? (
                <p key={key}>
                  {key > 1 ? `Em ${key} dias:` : "Amanhã:"}
                  <span> {`R$ ${apiResponse[key]}`}</span>
                </p>
              ) : null
            )}
          {showDiasResponse &&
            diasResponse &&
            Object.keys(diasResponse).map((key: any) =>
              diasResponse[key] ? (
                <p key={key}>
                  {`Em ${key} dias:`}
                  <span>{`R$ ${diasResponse[key]}`}</span>
                </p>
              ) : null
            )}
        </DivValor>
      </DivInfo>
    </Container>
  );
};
export default Home;
