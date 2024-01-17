import { styled } from "styled-components";
import { makeUnstuck, updatesCount } from "./store";
import { useSignals } from "@preact/signals-react/runtime";

const Container = styled.nav`
  position: relative;
  background-color: #fff;
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: left;

  padding: 0 30px;
  box-sizing: border-box;
`;

const Stats = styled.div`
  position: absolute;
  right: 30px;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export function Nav() {
  useSignals();
  console.log('rerender');
  
  return (
    <Container>
      <h1>DevDive!</h1>

      <Stats>
        <button onClick={makeUnstuck}>Unstick</button>
        <span>Updates per minute:</span>
        <>{updatesCount.value.length}</>
      </Stats>
    </Container>
  );
}
