import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledBox = styled(Box)`
  &.typewriter-effect {
    display: flex;
    justify-content: center;
    font-family: Comic Sans MS;
    font-size: 18px;
  }

  &.typewriter-effect > .text {
    max-width: 0;
    animation: typing 20s steps(var(--characters)) forwards;
    white-space: nowrap;
    overflow: hidden;
  }

  &.typewriter-effect:after {
    content: " |";
    animation: blink 1s forwards;
    animation-timing-function: step-end;
  }

  @keyframes typing {
    75%,
    100% {
      max-width: calc(var(--characters) * 1ch);
    }
  }

  @keyframes blink {
    0%,
    75%,
    100% {
      opacity: 1;
    }
    25% {
      opacity: 0;
    }
  }
`;


function Typewriter() {
    const text = "Hi there, I am Alexander Han, a highschool senior, living in Acton, Massachusetts. I am working hard to prepare myself for college now.";


    const styles = {
        "--characters": text.length
    };

    return (
        <StyledBox className="typewriter-effect">
            <Box style={styles} className="text" id="typewriter-text">
                {text}
            </Box>
        </StyledBox>
    );
}

export default Typewriter;
