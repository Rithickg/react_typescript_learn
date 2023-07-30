import React, { FC, createContext } from 'react'
import { Person, HairColor } from './component/Person'
import './App.css'
import { Greet } from './component/Greet'
import { Status } from './component/Status'
import { Heading } from './component/Heading'
import { Oscar } from './component/Oscar'
import { Button } from './component/Button'
import { Input } from './component/Input'
import { Style } from './component/Style'
import { State } from './component/hook/State'
import { Counter } from './component/Counter'
import { Box } from './component/Box'
import { ThemeContext } from './component/hook/Context'
import { Ref } from './component/hook/Ref'
import { MutableRef } from './component/hook/MutableRef'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { Login } from './component/Login'

interface AppContextInterface {
  name: string
}
export const AppContext = createContext<AppContextInterface | null>(null)

export const App: FC = () => {
  const contextValue = {
    name: "This is context hook"
  }

  const nameArray = [
    { first: "rok", last: "boi" },
    { first: "rok", last: "boi" },
    { first: "rok", last: "boi" },
    { first: "rok", last: "boi" },

  ]
  return (
    <Provider store={store}>

      <AppContext.Provider value={contextValue}>

        <div className='App'>
          <Person name='Rithick' age={21} email='rithick@gmail' hairColor={HairColor.Brown} />
          <Greet name="Jon Snow" messgeCount={5} nameArray={nameArray} />
          <Status status='Success' />
          <Oscar>
            <Heading>Oscar goas to Matt Damon</Heading>
          </Oscar>
          <Button handleClick={(event, id) => { console.log("Button Clicked", event, id) }} />
          <Input value='' handleChange={(event) => console.log(event)} />
          <Style styles={{ border: '1px solid black', padding: '1rem', margin: '10px' }} />
          <State />
          <Counter />
          <ThemeContext>
            <Box />
          </ThemeContext>
          <Ref />
          <MutableRef />
          <Login />
        </div>
      </AppContext.Provider >
    </Provider>


  )
}
