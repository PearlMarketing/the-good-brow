import React, { useState, useRef } from 'react'
import styled from 'styled-components'

const StyledCollapse = styled.div`
  .collapse_button {
    width: 100%;
    height: auto;
    padding: 0.75rem 1rem 0.75rem 1rem;
    border-radius: 0;
    p {
      text-align: left;
      position: relative;
      font-size: 1.2rem;
      line-height: normal;
      margin-bottom: 0;
      width: 100%;
      white-space: normal;
      .price {
        font-size: 0.8rem;
        padding-top: 5px;
        display: block;
      }
      .arrow {
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        font-size: 1.8rem;
        transform-origin: 50% 45%;
        transition: transform 0.3s;
        --webkit-transition: transform 0.3s;
      }
    }
  }
  .collapse_content {
    border-bottom: 1px solid #fff;
    border-left: 1px solid #fff;
    border-right: 1px solid #fff;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-out;
    --webkit-transition: max-height 0.3s ease-out;
    p {
      padding: 1rem;
      margin: 0;
    }
  }
  &.active {
    .collapse_button {
      p {
        .arrow {
          transform: rotate(-180deg);
          transform-origin: 50% 45%;
        }
      }
    }
    .collapse_content {
      max-height: 500px;
    }
  }
`

const Collapse = props => {
  const [setActive, setActiveState] = useState('')
  const [setHeight, setHeightState] = useState('0px')

  const content = useRef(null)

  function toggleCollapse() {
    setActiveState(setActive === '' ? 'active' : '')
    if (props.children) {
      setHeightState(
        setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`
      )
    }
  }

  return (
    <StyledCollapse className={setActive} onClick={toggleCollapse}>
      <button className="collapse_button">
        <p>
          {props.title}
          {props.price ? <span className="price">{props.price}</span> : ''}
          {props.children ? (
            <span className="icon fa-angle-down arrow"></span>
          ) : (
            ''
          )}
        </p>
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="collapse_content"
      >
        <p>{props.children}</p>
      </div>
    </StyledCollapse>
  )
}

export default Collapse
