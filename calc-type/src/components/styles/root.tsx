import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
--blue: #5D9CEC;

--grey-20:#E0E0E0;
--gray-100:#333333;
--body: 'Karla';
}
*{
        margin: 0;
        padding: 0;
        border: none;
        appearance: none;
        list-style: none;
        text-decoration: none;
    }
    body{
        font-family: var(--body);
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        color: var(--gray-03);
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--blue-00);
    }


`