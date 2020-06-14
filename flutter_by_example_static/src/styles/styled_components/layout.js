import styled from "styled-components";
import {spacing} from "../spacing";

export const FullWidthContentWrapper = styled.div`
    width: 100vw; 
    margin-left: auto;
    margin-right: auto;
    
    
`

export const MainContentWrapper = styled.div`
     min-width: 1200px;
   display: flex;
    flex-flow: column; 
    align-items: center;
    
    > * {
        padding: ${spacing.scale(2.5)};
        width: 800px;
    }
    
                
   
`

export const Wrapper = styled.div`
    min-height: 100vh;
    width: 100vw;
   display: flex;
    flex-flow: column; 
    align-items: center;
`