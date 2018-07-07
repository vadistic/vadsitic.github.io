import { css } from 'react-emotion';
import { styled } from '../../styles';

export const Image = styled.img(
  ({ theme: t }) => css`
    object-fit: cover;
    width: 100%;
    max-height: 32rem;
    border-radius: ${t.borderRadius.sm};
  `
)