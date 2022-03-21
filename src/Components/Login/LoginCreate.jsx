import React from 'react'
import { GET_POST } from '../../Api/Api'
import { UserContext } from '../../Contexts/UserContext'
import Error from '../../Helpers/Error'
import useFetch from '../../Hooks/useFetch'
import useForm from '../../Hooks/useForm'
import Button from '../Forms/Button/Button'
import Input from '../Forms/Input/Input'

const LoginCreate = () => {
  const username = useForm()
  const email = useForm('email')
  const password = useForm()
  const {userLogin} = React.useContext(UserContext)
  const {loading, error, request} = useFetch()

  const handleSubmit = async(e) => {
    e.preventDefault();

    if(username.validate() && password.validate() && email.validate()){
			const {url, options} = GET_POST({
        username: username.value,
        email: email.value,
        password: password.value,
      })

      const {response} = await request(url, options);
      if(!response.ok) userLogin(username.value, password.value)
      console.log(response);
		}
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username}/>
        <Input label="Email" type="text" name="email" {...email}/>
        <Input label="Senha" type="text" name="password" {...password}/>
        {loading ? (<Button disabled>Cadastrando...</Button>) : <Button>Cadastrar</Button>}
        <Error error={error}/>
      </form>
    </section>
  )
}

export default LoginCreate