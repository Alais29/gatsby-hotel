import React from 'react'
import Image from 'gatsby-image';
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Link } from "gatsby"

const Boton = styled(Link)`
  margin-top: 2rem;
  padding: 1rem;
  background-color: rgba(44,62,80,.85);
  color: #FFF;
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
`;

const HabitacionPreview = ({ habitacion }) => {
  const { contenido, imagen, titulo, slug } = habitacion;

  return (
    <li
      css={css`
        border: solid 1px #e1e1e1;
        margin-bottom: 2rem;
        display: flex;
        flex-direction: column;
      `}
    >
      <Image
        fluid={imagen.fluid}
      />
      <div
        css={css`
          padding: 3rem;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        `}
      >
        <div>
          <h3
            css={css`
              font-size: 3rem;
            `}
          >{titulo}</h3>
          <p>{contenido}</p>
        </div>
        <Boton to={slug}>Ver Habitación</Boton>
      </div>
    </li>
  )
}

export default HabitacionPreview
