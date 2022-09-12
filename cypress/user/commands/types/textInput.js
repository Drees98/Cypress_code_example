export function textInput(id, value) {
  const {} = this
  cy.get(`#${id}_error`).should("not.be.visible")
  cy.get("#name").type("B").blur()
  cy.get(`#${id}_error`).should("be.visible")
  cy.get("#name").type("en")
  cy.get(`#${id}_error`).should("not.be.visible")
}
