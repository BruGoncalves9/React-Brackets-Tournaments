import styled from 'styled-components';
import { IMobileProps } from '../types/Seed';

export const Bracket = styled.div<IMobileProps>` 
  display: flex;
  flex-direction: row;
  @media (max-width: ${props => props.mobileBreakpoint}px) {
    flex-direction: column;
  }
  `
;

export const Round = styled.div<IMobileProps>`
  flex: 0;
  display:flex;
  flex-direction:column;
  @media (max-width: ${props => props.mobileBreakpoint}px) {
    min-width:0;
  }
  `
;

export const RoundTitle = styled.div`
  color: #8f8f8f;
  font-weight: 400;
  text-align: center;
`;

export const SeedsList = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  flex-flow: row wrap;
  justify-content: center;
  height: 100%;
  list-style: none;
`;
