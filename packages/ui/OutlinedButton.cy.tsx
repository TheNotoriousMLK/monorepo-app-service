import { OutlinedButton } from './OutlinedButton'

describe('OutlinedButton', () => {
  it('renders outlined button', () => {
    cy.mount(<OutlinedButton>Click Me!</OutlinedButton>)
    cy.get('button').should('have.text', 'Click Me!')
  })
})
