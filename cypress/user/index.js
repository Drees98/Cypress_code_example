import * as commands from "./commands"
import { connectScope } from "./utils/connectScope"
import { types } from "./commands/types"
import { random } from "./utils/random"
import Controller from "../../client/src/controller"
import { mock } from "../fixtures"

function User() {
  this.connectScope = connectScope.bind(this)
  this.connectScope(commands)

  this.random = random.bind(this)
  this.checkErrors = true
  this.isMarried = false
  this.user1 = {
    birthYear: 2000,
  }

  return this
}

export default User
