//To handle long texts in table.

const ellipsizeText = (text, outputLength = 30) => {
  if (text !== undefined && text.length > outputLength) {
    return text.substring(0, outputLength) + "..."
  } else {
    return text
  }
}

//To capitalize first letter all over the panel

const capitalizeFirstLetter = (string) => {
  if (string) {
    var newStr = string.replace(/_/g, " ")
    return newStr.charAt(0).toUpperCase() + newStr.slice(1).toLowerCase()
  }
}

export { ellipsizeText, capitalizeFirstLetter }
