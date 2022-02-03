import useFormData from '../../hooks/UseFormData'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ReactQuill from 'react-quill'
import { useState } from 'react'
import '../../../node_modules/react-quill/dist/quill.snow.css'

const FormQuestion = () => {
  const [data, setData] = useState('')
  const navigate = useNavigate()

  const { user } = useSelector(state => state.auth)

  const { form, formData, updateFormData } = useFormData()

  const submitForm = (e) => {
    e.preventDefault()
    const form2 = { ...formData, descripcion: data }
  }

  return (
    <div className=''>

      <form ref={form} onSubmit={submitForm} onChange={updateFormData} className='flex flex-col space-y-4'>
        <label className=' font-bold'>Titulo</label>
        <input type='text' name='question' className='py-2 px-2 border shadow-sm' />
        <input type='text' name='userId' hidden value={user?.uid} className='py-2 px-2 border shadow-sm' />
        <label className=' font-bold'>Type</label>
        <select required className='px-2 border shadow-sm' name='type' defaultValue=''>
          <option disabled type='' value='' />
          <option type='String'>OPEN</option>
          <option type='String'>OPINION</option>
          <option type='String'>WITH_RESULT</option>
          <option type='String'>WITH_EVIDENCE</option>
        </select>
        <label className='font-bold'>Category</label>
        <select required name='category' className='px-2 border shadow-sm' defaultValue=''>
          <option disabled type='' value='' />
          <option type='String'>TECHNOLOGY_AND_COMPUTER</option>
          <option type='String'>SCIENCES</option>
          <option type='String'>SOFTWARE_DEVELOPMENT</option>
          <option type='String'>SOCIAL_SCIENCES</option>
          <option type='String'>LANGUAGE</option>
        </select>
        <label className='mt-20 font-bold'>Descripcion</label>
        <ReactQuill
          className='  bg-slate-400 shadow-sm '
          modules={modules}
          formats={formats}
          value={data}
          onChange={(e) => { setData(e) }}
        />
        <button type='submit' className='font-bold border bg-green-200 rounded-full shadow-sm'>Enviar</button>
      </form>

    </div>
  )
}

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { header: [3, 4, 5, 6] }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['image'],
    ['clean'],
    ['code-block']
  ]
}
const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'link',
  'image',
  'video',
  'code-block'
]

export default FormQuestion
