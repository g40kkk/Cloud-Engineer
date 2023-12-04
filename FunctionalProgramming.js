//functional programming

function showStudent(ssn) {
  let student = db.get(ssn)
  if (student !== null) {
    document.querySelector(`#${element}`).innerHTML =
      `${student.ssn},
       ${student.firstname},
       ${student.lastname}`
  } else {
    throw new Error('Student not found!')
  }
}

showStudent('444-44-4444')

///
const find = curry((db, id) => {
  let obj = db.find(id)
  if (obj === null) {
    throw new Error('Object not found')
  }
  return obj
})
const csv = student => `${student.ssn}, ${student.firstname}, ${student.lastname}`
const append = curry((selector, info) => {
  document.querySelector(selector).innerHTML = info
})

var showStudent = run(append('#student-info'), csv, find(db))

showStudent('44-444-4444')
