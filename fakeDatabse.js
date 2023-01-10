const notes = []

export function getNotes() {
  return notes
}

export function addNote(title, content) {
  notes.push({
    id: notes.length+1,
    title,
    content
  })
}

export function deleteNote(id) {
  // Delete from the database
  notes.splice(id-1, 1)
}