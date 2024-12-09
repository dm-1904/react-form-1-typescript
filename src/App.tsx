import { useState, ComponentProps } from 'react'
import './App.css'

type TUserInformation = {
  firstName: string;
  lastName: string;
}
export function UserInfo({userInformation} : {userInformation: TUserInformation | null}){
  const firstName = userInformation?.firstName
  const lastName = userInformation?.lastName
  return <div>
    <div>First Name: {firstName}</div>
    <div>Last Name: {lastName}</div>
  </div>
}



type InputProps = ComponentProps<"input">


const TextInput = ({inputProps, label}: { inputProps: InputProps, label: string }) => {
  return (
    <div>
      <label>{label}: </label>
      <input
        type="text"
        {...inputProps} />
    </div>
  )
}

const UserInfoForm = ({handleUserInformation}: {
  handleUserInformation: (userInformation: TUserInformation) => void
}) => {
  const [firstNameInput, setFirstNameInput] = useState("")
  const [lastNameInput, setLastNameInput] = useState("")

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      handleUserInformation({
        firstName: firstNameInput,
        lastName: lastNameInput
      })
      setFirstNameInput('')
      setLastNameInput('')
    }}>
      <TextInput
        label={"First Name"}
        inputProps={{
          onChange: (e) => {
            setFirstNameInput(e.target.value)
          },
          value: firstNameInput
        }}
      />
      <TextInput
        label={"Last Name"}
        inputProps={{
          onChange: (e) => {
            setLastNameInput(e.target.value)
          },
          value: lastNameInput
        }}
      />
      <input type="submit" />
    </form>
  )
}


function App() {
  const [userInformation, setUserInformation] = useState<TUserInformation | null>(null)
  return (
    <div className="App">
      <UserInfo userInformation={userInformation} />
      <UserInfoForm handleUserInformation={(userInformation) => {

        setUserInformation(userInformation)
      }}/>
    </div>
  )
}


export default App
