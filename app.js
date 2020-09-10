const notesContainer = document.querySelector('.notes__container');
const numOfNotes = document.querySelector('#num-of-notes');

myNotes = [
  {
    title: 'Hello',
    text: 'Hello from local storage',
  },
  {
    title: 'Hello 2',
    text:
      'To start with, in main.js, we test whether the storage object has already been populated (i.e., the page was previously accessed)',
  },
];

localStorage.setItem('notes', JSON.stringify(myNotes));

if (localStorage.getItem('notes') === null) {
  // display message that user don't have notes yet
  console.log("display message that user don't have notes yet");
}

const retriveNotes = JSON.parse(localStorage.getItem('notes'));

{
  /* <div class="note">
  <h4 class="note__title">Groceries</h4>
  <p class="note__text">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. At vitae
    nihil sed eum labore enim laborum voluptatem perspiciatis aperiam.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
    distinctio iure odio voluptatem, architecto officiis
    necessitatibus corporis quia dicta rerum.
  </p>
  <button class="btn btn-xs">Delete</button>
</div> */
}

retriveNotes.forEach((note) => {
  const noteElement = document.createElement('div');
  noteElement.classList.add('note');

  const titleElement = document.createElement('h4');
  titleElement.classList.add('note__title');
  titleElement.textContent = note.title;
  noteElement.appendChild(titleElement);

  const textElement = document.createElement('p');
  textElement.classList.add('note__text');
  textElement.textContent = note.text;
  noteElement.appendChild(textElement);

  notesContainer.appendChild(noteElement);
});

numOfNotes.textContent = retriveNotes.length;

console.log(retriveNotes);
