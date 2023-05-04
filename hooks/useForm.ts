import { useState } from "react";

interface IState {
  name: string,
  surname: string,
}

export default function useForm(data : IState) {
  const [state, setState] = useState(data);

  const onChangeText = (name : string, surname : string) => {
    setState(() => ({
      name,
      surname,
    }))
  }

  const onSubmit = () => {
    console.log(state)
    // logica para modificar usuario
  }

  // const setInitialValues = (data : IState) => {
  //   setState((state) => ({
  //     ...state,
  //     data
  //   }))
  // }

  return {
    state,
    onChangeText,
    onSubmit,
    // setInitialValues,
  }
}