import { textInput } from "./textInput"

export function types(text) {
  const {} = this

  return {
    into: {
      textInput: function (id) {
        return textInput.apply(this, [id, text])
      },
    },
  }
}
