import Button from 'components/Button'
import Head from 'next/head'
import { useSelector } from 'react-redux'
import React from 'react'

const Home = () => {
  const state = useSelector((state) => state)

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
          <Button text="AC" />
          <Button text="&#8592;" />
          <Button text="%" textcolor="#f54c4c" />
          <Button text="÷" textcolor="#f54c4c" />
          <Button text={7} />
          <Button text={8} />
          <Button text={9} />
          <Button text="✕" textcolor="#f54c4c" />
          <Button text={4} />
          <Button text={5} />
          <Button text={6} />
          <Button text="-" textcolor="#f54c4c" />
          <Button text={1} />
          <Button text={2} />
          <Button text={3} />
          <Button text="!" textcolor="#f54c4c" />
          <Button text={0} />
          <Button text="." textcolor="#f54c4c" />
          <Button text="+" textcolor="#f54c4c" />
          <Button text="=" textcolor="#fff" />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Home
