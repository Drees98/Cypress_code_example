export function set(action) {
  cy.window().its("store").invoke("dispatch", action)
}
