import React from 'react'
import Input from '../Forms/Input/Input'
import Button from '../Forms/Button/Button'
import useForm from '../../Hooks/useForm'
import useFetch from '../../Hooks/useFetch'
import Error from '../../Helpers/Error'
import { PASSWORD_RESET } from '../../Api/Api'
import { useNavigate } from 'react-router-dom'

const LoginPasswordReset = () => {
  const [login, setLogin] = React.useState('')
  const [key, setKey] = React.useState('')
  const { loading, error, request, data } = useFetch()
  const password = useForm()
  const navigate = useNavigate()

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const key = params.get('key')
    const login = params.get('login')
    if (key) setKey(key)
    if (login) setLogin(login)
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value
      })

      const { response } = await request(url, options);
      if (response.ok) navigate('/login')
    }
  }

  return (
    <section className='animeLeft'>
      <Head title="Resete a senha" />
      <p className='title'>Resetar Senha</p>
      {data ? <p style={{color: '#4c1'}}>{data}</p> :
        (<form onSubmit={handleSubmit}>
          <Input label="Nova Senha" type="password" name="password" {...password} />
          {loading ? <Button disabled>Resetando...</Button> : <Button>Resetar</Button>}
        </form>)}
      <Error error={error} />
    </section>
  )
}

export default LoginPasswordReset