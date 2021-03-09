import { Form, Button } from 'react-bootstrap';

const SearchForm = () => {
    return (
      <Form >
        <Form.Label htmlFor="inlineFormInputName2" srOnly>
          Address, Postal code etc.
    </Form.Label>
        <Form.Control
          className="mb-2 mr-sm-2"
          id="inlineFormInputName2"
          placeholder="Address, Postal code etc."
        />
        <Button type="submit" className="mb-2">
          Search
    </Button>
      </Form>
    )
  }

  export default SearchForm;