import axios from "axios";

export const api = axios.create({
  baseURL: `https://frontend-challenge-7bu3nxh76a-uc.a.run.app`,
  timeout: 5000,  
 });


//  export const api = axios.create({
//   baseURL: `https://frontend-challenge-7bu3nxh76a-uc.a.run.app?timeout`,
//   timeout: 5000,  
//  });


// export const api = axios.create({
//   baseURL: `https://frontend-challenge-7bu3nxh76a-uc.a.run.app?internalError`,
//   timeout: 5000,  
//  });


// export const api = axios.create({
//   baseURL: `https://frontend-challenge-7bu3nxh76a-uc.a.run.app?delay=2000`,
//   timeout: 5000,  
//  });