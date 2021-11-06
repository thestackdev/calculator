import Head from 'next/head'
import React, { useContext } from 'react'
import * as Context from 'context/calculator'

const Home = () => {
  const [state, dispatch] = useContext(Context.Context)

  const handleClear = () => {
    dispatch({ type: Context.Actions.CLEAR })
  }

  const handleExp = (e) => {
    dispatch({ type: Context.Actions.EXPRESSION, payload: e.target.innerHTML })
  }

  const handleDelete = () => {
    dispatch({ type: Context.Actions.DELETE })
  }

  const handleEquals = () => {
    dispatch({ type: Context.Actions.EQUALS })
  }

  return (
    <React.Fragment>
      <Head>
        <title>calculator</title>
        <meta name="language" content="EN" />
        <meta name="description" content="nextjs calculator" />
        <meta
          name="keywords"
          content="calculator nextjs js react advanced online-calculator"
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <div className="home__container">
        <div className="home__header">
          <div className="home__output">{state.output}</div>
          <div className="home__input">{state.input}</div>
        </div>
        <div className="home__body">
          <div onClick={handleClear}>AC</div>
          <div onClick={handleDelete}>&#8592;</div>
          <div className="button__symbol" onClick={handleExp}>
            %
          </div>
          <div className="button__symbol" onClick={handleExp}>
            ÷
          </div>
          <div onClick={handleExp}>7</div>
          <div onClick={handleExp}>8</div>
          <div onClick={handleExp}>9</div>
          <div className="button__symbol" onClick={handleExp}>
            ✕
          </div>
          <div onClick={handleExp}>4</div>
          <div onClick={handleExp}>5</div>
          <div onClick={handleExp}>6</div>
          <div className="button__symbol" onClick={handleExp}>
            -
          </div>
          <div onClick={handleExp}>1</div>
          <div onClick={handleExp}>2</div>
          <div onClick={handleExp}>3</div>
          <div className="button__symbol" onClick={handleExp}>
            !
          </div>
          <div onClick={handleExp}>0</div>
          <div onClick={handleExp}>.</div>
          <div className="button__symbol" onClick={handleExp}>
            +
          </div>
          <div onClick={handleEquals}>=</div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Home
