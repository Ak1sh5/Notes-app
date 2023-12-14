const notesdata = JSON.parse(localStorage.getItem('notesdata')) || [];
const display = document.querySelector('.notes-card');
let editIndex = -1; 

function updateNotes() {
        display.innerHTML = ''; 

        notesdata.forEach((note, index) => {
        const html = `
            <div>
                <p>${note.title}</p>
                <p>${note.content}</p>
                 <button onclick="editNote(${index})">Edit</button>
                <button onclick="deleteNote(${index})">Delete</button>
            </div>
            `;
            display.innerHTML += html;
        });
}

if (notesdata) updateNotes();

function shownotescard() {
    document.querySelector('.addnotescard').style.display = 'block';
}

function hidenotescard() {
    document.querySelector('.addnotescard').style.display = 'none';
    editIndex = -1;
}

function addNote() {
    let heading = document.querySelector('.notestitle').value;
    let description = document.querySelector('.notes-description').value;
    
    if (editIndex != -1) {
        notesdata[editIndex] = { title: heading, content: description };
        editIndex = -1;
    }
    else {
        notesdata.push({
        title: heading,
        content: description
    });
        
    }
    localStorage.setItem('notesdata', JSON.stringify(notesdata));
    updateNotes();

    console.log(notesdata);

    document.querySelector('.notestitle').value = '';
    document.querySelector('.notes-description').value = '';
    hidenotescard();
}
  function editNote(index) {
            document.querySelector('.notestitle').value = notesdata[index].title;
            document.querySelector('.notes-description').value = notesdata[index].content;
            editIndex = index; 
            shownotescard(); 
        }
function deleteNote(index) {
    notesdata.splice(index, 1);
    updateNotes();
    localStorage.setItem('notesdata', JSON.stringify(notesdata));
   console.log(notesdata);
}