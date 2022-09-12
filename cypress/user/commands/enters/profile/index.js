import { firstName } from "./firstName"
import { birthYear } from "./birthYear"
import { gender } from "./gender"
import { hasPension } from "./hasPension"

export { maritalStatus } from "./maritalStatus"
export { ownsRealEstate } from "./ownsRealEstate"
export { hasKids } from "./hasKids"
export { kidsBirthYears } from "./kidsBirthYears"

export const spouses = {
  firstName: function () {
    return firstName.apply(this, [true])
  },
  birthYear: function () {
    return birthYear.apply(this, [true])
  },
  gender: function () {
    return gender.apply(this, [true])
  },
  hasPension: function () {
    return hasPension.apply(this, [true])
  },
}

export { firstName, birthYear, gender, hasPension }
