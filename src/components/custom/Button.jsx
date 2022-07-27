// export const button = ({children}) => {
//     return <button>{children}</button>
// }

import styled from "styled-components";

export const Button = styled.button`
border: transparent;
padding: 10px;
color: ${(props) => (props.theme === "light" ? "#161e54" : "#ff9b6a")};
border-radius: 5px;
background-color: ${(props) => (props.theme === "light" ? "#ff9b6a" : "#161e54")};

&:hover{
    box-shadow: 2px 1px 5px black;
}

`;