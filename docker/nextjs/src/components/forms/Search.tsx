import { Formik, FormikHelpers, Form, Field } from 'formik'

import { Filters } from '../../types'
import SelectMenu from './SelectMenu'

const SearchFilters: Filters = {
  all: 'All',
  address: 'Address',
  block: 'Block',
  token: 'Token',
  domain: 'Domain',
}

interface Values {
  input: string
  filter: keyof typeof SearchFilters
}

const Search = () => {
  return (
    <Formik
      initialValues={{
        filter: 'all',
        input: '',
      }}
      onSubmit={(
        values: Values,
        { setSubmitting }: FormikHelpers<Values>
      ) => {
        console.log(values)
        setSubmitting(false)
      }}
    >
      <Form>
        <div className="flex space-x-3">
          <div className="w-40">
            <SelectMenu options={SearchFilters} defaultValue="all" label="Search for" />
          </div>
          <label htmlFor="input" className="sr-only">Search</label>
          <Field id="input" 
            className="w-full px-3 ring-indigo-600 outline-indigo-600"
            name="input" 
            placeholder="Search by Address, Txn Hash, Block, Token or ENS name" />

          <button type="submit" className="bg-indigo-600 text-white rounded-lg px-6">
            Search
          </button>
        </div>
      </Form>
    </Formik>
  )
}

export default Search