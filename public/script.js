async function loadNotes() {
  const res = await fetch('/notes');
  const notes = await res.json();
  const ul = document.getElementById('notes-list');
  ul.innerHTML = '';
  notes.forEach((note, index) => {
    const li = document.createElement('li');
    li.innerHTML = `${note} <form action="/delete" method="POST" style="display:inline;">
      <input type="hidden" name="index" value="${index}">
      <button type="submit">Delete</button>
    </form>`;
    ul.appendChild(li);
  });
}

window.onload = loadNotes;
