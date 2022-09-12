///<reference types="Cypress"/>
//npx cypress open
//npx cypress run --headless

//ACTIONS
//---------------------------------------------------------------------------------------
cy.get("#inputEmail").type("Ben@gmail.com")
cy.get("#inputEmail").type("Ben@gmail.com", { delay: 1000 })

cy.get(".covered-button").click({ force: true })
cy.get("button").click({ multiple: true })

cy.get("#courses").select("selenium") //dropdown

cy.get("#Banana").check() //type checkbox
cy.get('[type="checkbox"]').check(["Banana", "Fries"]) //get all, check only a few
cy.get("#Banana").uncheck() //type checkbox

cy.get("#inputEmail").clear()

cy.get('.container > [type="text"]').focus()
cy.get('.container > [type="text"]').blur()

cy.get(".trigger-button").trigger("mouseover")
cy.get(".trigger-button").trigger("mouseout")

cy.go("back")
cy.go("forward")

//ASSERTIONS
//---------------------------------------------------------------------------------------

cy.get("[data-cy=selenium-course]").should("have.text", "Selenium")
cy.get(".course-container").should("contain", "Selenium").and("contain", "Cypress")
cy.get(".course-container").should("contain", "Selenium") // one of many
cy.get(".list10").should("not.be.visible")
cy.get(".list10").should("have.value", "200")
cy.get(".todo-list li").should("have.length", 2)

const newItem = "Feed the cat"
cy.get("[data-test=new-todo]").type(`${newItem}{enter}`)

cy.url().then((url) => expect(url).to.contains("/"))
cy.get(".container").each((d) => console.log(d.text()))

cy.get("#scroll-vertical button").scrollIntoView().should("be.visible")
cy.get("#scrollable-vertical").scrollTo(250, 250)

//-----Wrap Objects
const car = {
  color: "red",
}

cy.wrap(car).should("have.property", "color", "red")

//HEADLESS
//---------------------------------------------------------------------------------------
// npx cypress run
// npx cypress run --spec 'cypress/integration/ui/filter.spec.js'
// npx cypress run --spec 'cypress/integration/ui/*.js'
// npx cypress run --browser firefox --headless

const packageJsonScripts = {
  "e2e:chome": "npx cypress run --browser chrome --headless",
}
//npm run e2e:chrome

//FIXTURES
//---------------------------------------------------------------------------------------
cy.fixture("user").then((user) => cy.log(user.email))

//LOGGING
//---------------------------------------------------------------------------------------
cy.log("logging to console")

//NAVIGATION
//---------------------------------------------------------------------------------------

cy.visit("http://localhost:3000")
cy.visit("../../index.html")

const cypressJson = {
  baseUrl: "https://example.cypress.io",
}
cy.visit("/")

//REQUESTS
//---------------------------------------------------------------------------------------
it("should add a todo correctly using api", () => {
  cy.request({
    method: "POST",
    url: "http://localhost:8080/todos",
    body: {
      name: "todo1",
      isComplete: false,
    },
  }).then((response) => {
    id = response.body.id
    expect(response.status).to.eq(201)
    expect(response.body.name).to.eq("todo1")
  })
})

//SELECTORS
//---------------------------------------------------------------------------------------

cy.get("css selector")
cy.get("h1") //html tag
cy.get("h1#header") //with tag and id
cy.get(".header1") //class
cy.get(".header1.main") //two classes
cy.get(".course-list").children(".list1") //child class of parent class
cy.get(".course-container").find(".list1") //even if not direct children
cy.get("li").first()
cy.get("li").last()
cy.get("li").eq(3) //third element
cy.get("li").filter(".web")

cy.get(".list9093", { timeout: 300 })

//-----Reccomended
cy.get('[attribute="value"]')
cy.get('[data-cy="selenium-course"]') //example

cy.contains(/pricing/i)

//VARIABLES
//---------------------------------------------------------------------------------------

cy.url().as("url")
console.log(cy.get("@url"))

//--To make global
describe("Login Feature Test", () => {
  beforeEach(() => {
    cy.visit("../../index.html")
    cy.url().as("url")
  })
  it("visits html page", function () {
    cy.log(this.url)
  })
})

//VIEW
//---------------------------------------------------------------------------------------
cy.viewport(500, 750)

//Quirky Rules
/*---------------------------------------------------------------------------------------

Can't save as variables, must write as cy.get(url).as('url')
Can't run other functions that are not within cy because they will run before, cy awaits all prior cy functions

*/
