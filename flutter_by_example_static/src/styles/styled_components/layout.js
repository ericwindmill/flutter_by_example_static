import styled from "styled-components";
import {device} from "../media";

export const FullWidthContentWrapper = styled.div`
    width: 100vw; 
    margin-left: auto;
    margin-right: auto;
    
    
`

export const MainContentWrapper = styled.div`

    display: flex;
    flex-flow: column; 
    align-items: center;
    
    > * {
        width: 600px;
        
    @media ${device.laptop} { 
        width: 800px;
    }
  }  
   
`

export const Wrapper = styled.div`
    min-height: 100vh;
    width: 100vw;
   display: flex;
    flex-flow: column; 
    align-items: center;
`