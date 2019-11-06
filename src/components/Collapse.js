import React, { useState, useRef } from 'react'
import styled from 'styled-components'

const StyledCollapse = styled.div`
  margin:1rem 0;
  .collapse_button {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
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
    }
    .arrow {
      font-size:1.8rem;
      line-height:1rem;
    }
  }
  .collapse_content {
    border-bottom: 1px solid #fff;
    border-left: 1px solid #fff;
    border-right: 1px solid #fff;
    max-height: 0;
    visibility: hidden;
    overflow: hidden;
    transition: max-height 0.3s ease-out;
    --webkit-transition: max-height 0.3s ease-out;
    > div {
      padding: 1rem;
    }
    p {
      margin: 0;
      padding: 10px 0;
    }
  }
  &.active {
    .collapse_button {
      p {
        .arrow {
        }
      }
    }
    .collapse_content {
      max-height: 500px;
      visibility: visible;
    }
  }
`

const Collapse = props => {
  const [setActive, setActiveState] = useState('')
  const [setHeight, setHeightState] = useState('0px')
  const [setArrow, setArrowState] = useState('fa-angle-down')

  const content = useRef(null)

  function toggleCollapse() {
    setActiveState(setActive === '' ? 'active' : '')
    setArrowState(setActive === 'active' ? 'fa-angle-down' : 'fa-angle-up')
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
        </p>
        {props.children ? (
          <span className={`icon ${setArrow} arrow`}></span>
        ) : (
          ''
        )}
      </button>
      {props.children &&
        <div
          ref={content}
          style={{ maxHeight: `${setHeight}` }}
          className="collapse_content"
        >
          {props.children}
        </div>
      }
    </StyledCollapse>
  )
}

export default Collapse
