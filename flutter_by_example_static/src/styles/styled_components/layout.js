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
    
    > header {
        @media ${device.laptop} {
            width: 90vw;    
        }
        
        @media ${device.laptopL} {
            width: 800px;
        }
    }
    
    > * {
        width: 90vw;
        margin: 0 40px;
        
    @media ${device.laptop} { 
        width: 65vw;
    }
        
    @media ${device.laptopL} { 
        width: 800px;
        align-items: flex-start;
        margin: 0;
    }
  }  
   
`

export const Wrapper = styled.div`
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-flow: column; 
    align-items: flex-start;
        @media ${device.laptopL} { 
        align-items: center;
    
    }
`