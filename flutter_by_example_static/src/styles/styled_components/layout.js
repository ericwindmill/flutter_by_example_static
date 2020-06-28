import styled from "styled-components";
import {colors} from "../colors"

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
        width: 800px;
    }
    
    
        blockquote {
        border: 1px solid ${colors.primary};
        border-radius: 5px;
        margin: 50px 0;
        
        
        * {
            font-style: normal;
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