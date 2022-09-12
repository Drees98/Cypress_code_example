export function birthYear(isSpouse) {
  const { random, checkErrors } = this

  const randomNumber = random(0, years.length - 3)
  let year

  if (!isSpouse) {
    year = years[randomNumber]
    this.user1.birthYear = year
  }
  if (isSpouse) {
    year = this.user1.birthYear + random(-5, 5)
  }

  cy.get("#basic_next").should("not.exist")
  cy.get("#year").clear()

  if (checkErrors === true) {
    cy.get("#year").type(200).blur()
    cy.get("#year_error").should("contain", "Please enter a more recent year.")
    cy.get("#basic_next").should("not.exist")
    cy.get("#year").clear()
    cy.get("#year").type(2050).blur()
    cy.get("#year_error").should("contain", "Year must be in the past.")
    cy.get("#basic_next").should("not.exist")
    cy.get("#year").clear()
    cy.get("#year").type(2012).blur()
    cy.get("#year_error").should("contain", "Year must be before 2004.")
    cy.get("#basic_next").should("not.exist")
    cy.get("#year").clear()
  }

  cy.get("#year").type(year).blur()
  cy.get("#basic_next").click()
}

var years = [
  1950, 1957, 1964, 1971, 1975, 1979, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1994,
  1996, 1998, 2000, 2002,
]
