//console.log("Working");

document.addEventListener("DOMContentLoaded", () => {
    Object.keys(yugioh).forEach(key => {
      fetchData(key).then(({data}) => saveData(flatten(data), key)).then(data => renderCards(flatten(botwData)))
    })
  })