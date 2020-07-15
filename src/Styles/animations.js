import { keyframes } from "styled-components";

export const fadeInFromUp = keyframes`
    from {
        opacity: 0;
        transform: translateY(-10px);

    }
    to {
        opacity: 1;
        transform: translateY(0px);
    }
`;

export const fadeOutToDown = keyframes`
    from {
        opacity: 1;
        transform: translateY(0px);

    }
    to {
        opacity: 0;
        transform: translateY(10px);
    }
`;

export const slideInFromRight = keyframes`
    from {
       
        transform: translateX(25%) rotateY(270deg) 

    }
    to {
        
        transform: translateX(0%) rotateY(360deg) 
    }
`;
export const slideOutToLeft = keyframes`
    from {
       
        transform: translateX(0%) rotateY(0deg) 

    }
    to {
        
        transform: translateX(-25%) rotateY(270deg) 
    }
`;
