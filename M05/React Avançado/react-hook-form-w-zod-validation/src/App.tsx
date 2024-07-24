import { useState } from 'react'
import './styles/global.css'
import { useForm, useFieldArray } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Trash2 } from 'lucide-react'

const emailProviders = [
  '@hotmail.com',
  '@outlook.com',
  '@yahoo.com',
  '@gmail.com',
  '@live.com',
  '@protonmail.com',
  '@icloud.com',
]

const createUserFormSchema = z.object({
  name: z.string()
    .nonempty('O nome é obrigatório')
    .transform(name => {
      return name.trim().split(' ').map(word => {
        return word[0].toLocaleUpperCase().concat(word.substring(1))
      }).join(' ')
    }),
  email: z.string()
    .nonempty('O e-mail é obrigatório')
    .email('Formato de e-mail inválido')
    .toLowerCase()
    .refine(email => {
      return emailProviders.some(provider => email.endsWith(provider))
    }, 'Provedor de e-mail inválido'),
  password: z.string()
    .min(8, 'A senha precisa de no mínimo 8 caracteres')
    .refine(password => /[A-Z]/.test(password), 'A senha deve conter pelo menos uma letra maíuscula')
    .refine(password => /[a-z]/.test(password), 'A senha deve conter pelo menos uma letra minúscula')
    .refine(password => /\d/.test(password), 'A senha deve conter pelo menos um número')
    .refine(password => /[!@#$%^&*(),.?":{}|<>]/.test(password), 'A senha deve conter pelo menos um símbolo'),
  techs: z.array(z.object({
    title: z.string().nonempty('O nome da tecnologia é obrigatório'),
    knowledge: z.coerce.number().min(1).max(100)
  })).min(2, 'Insira pelo menos duas tecnologias'),
})

type createUserFormData = z.infer<typeof createUserFormSchema>

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<createUserFormData>({
    resolver: zodResolver(createUserFormSchema)
  })

  const { fields, append, remove } = useFieldArray({
    name: 'techs',
    control,
  })

  function addNewTech() {
    append({ title: '', knowledge: 1 })
  }

  const [output, setOutput] = useState('')

  function createUser(data: createUserFormData) {
    setOutput(JSON.stringify(data, null, 2))
  }

  return (
    <main className='w-full  bg-zinc-950 text-zinc-300 flex flex-col gap-10 items-center justify-center py-5 px-3'>
      <form
        onSubmit={handleSubmit(createUser)}
        className='flex flex-col gap-4 w-full max-w-lg'
      >
        <h1 className='text-center text-4xl font-sans font-bold'>
          Teste de formulário utilizando <span className='text-emerald-500'>React Hook Form</span>, com validação pelo <span className='text-emerald-500'>Zod</span> e Tipagem estrita combinando <span className='text-emerald-500'>TypeScript</span> com <span className='text-emerald-500'>ZodResolver</span> do <span className='text-emerald-500'>Hookform Resolvers</span>
        </h1>
        <div className='flex flex-col gap-1'>
          <label
            className='font-semibold'
            htmlFor="name"
          >
            Nome
          </label>
          <input
            type="text"
            className=' bg-zinc-800 border border-zinc-800 text-white shadow-sm rounded h-10 px-3'
            {...register('name')}
          />
          {errors.name && <span className='text-red-500 text-sm'>{errors.name.message}</span>}
        </div>

        <div className='flex flex-col gap-1'>
          <label
            className='font-semibold'
            htmlFor="email
          ">
            E-mail
          </label>
          <input
            type="email"
            className=' bg-zinc-800 border border-zinc-800 text-white shadow-sm rounded h-10 px-3'
            {...register('email')}
          />
          {errors.email && <span className='text-red-500 text-sm'>{errors.email.message}</span>}
        </div>

        <div className='flex flex-col gap-1'>
          <label
            className='font-semibold'
            htmlFor="passw
          ord">
            Senha
          </label>
          <input
            type="password"
            className=' bg-zinc-800 border border-zinc-800 text-white shadow-sm rounded h-10 px-3'
            {...register('password')}
          />
          {errors.password && <span className='text-red-500 text-sm'>{errors.password.message}</span>}
        </div>

        <div className='flex flex-col gap-1'>
          <label
            className='flex items-center justify-between font-semibold'
            htmlFor=""
          >
            Tecnologias
            <button
              type='button'
              className='text-emerald-500 text-base font-semibold hover:underline'
              onClick={addNewTech}
            >
              Adicionar
            </button>
          </label>
          {
            fields.map((field, index) => {
              return (
                <div
                  className='flex gap-2'
                  key={field.id}
                >
                  <div className='flex flex-1 flex-col gap-1'>
                    <input
                      type="text"
                      className=' bg-zinc-800 border border-zinc-800 text-white shadow-sm rounded h-10 px-3'
                      {...register(`techs.${index}.title`)}
                    />
                    {errors.techs?.[index]?.title && <span className='text-red-500 text-sm'>{errors.techs?.[index]?.title.message}</span>}
                  </div>

                  <div className='flex flex-col gap-1'>
                    <input
                      type="number"
                      className='w-16 bg-zinc-800 border border-zinc-800 text-white shadow-sm rounded h-10 px-3'
                      {...register(`techs.${index}.knowledge`)}
                    />
                    {errors.techs?.[index]?.knowledge && <span className='text-red-500 text-sm'>{errors.techs?.[index]?.knowledge.message}</span>}
                  </div>
                  <button
                    className='text-emerald-500'
                    onClick={() => remove(index)}
                    type="button"
                  >
                    <Trash2 size={21} />
                  </button>
                </div>
              )
            })
          }
          {errors.techs && <span className='text-red-500 text-sm'>{errors.techs.message}</span>}
        </div>

        <button type="submit"
          className='bg-emerald-500 rounded font-semibold text-white h-10 hover:bg-emerald-600'
        >
          Salvar
        </button>
      </form>
      <pre>
        {output}
      </pre>
    </main>
  )
}

export default App