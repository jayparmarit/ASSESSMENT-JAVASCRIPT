 let students = [];
    let idCounter = 1;

    function addEntry() {
      const name = document.getElementById("nameInput").value.trim();
      const email = document.getElementById("emailInput").value.trim();
      const course = document.getElementById("courseInput").value.trim();
      const contact = document.getElementById("contactInput").value.trim();

      if (name && email && course && contact) {
        students.push({
          id: idCounter++,
          name: name,
          email: email,
          course: course,
          contact: contact
        });

        // Clear fields
        document.getElementById("nameInput").value = "";
        document.getElementById("emailInput").value = "";
        document.getElementById("courseInput").value = "";
        document.getElementById("contactInput").value = "";

        displayTable();
      } else {
        alert("Please fill all fields.");
      }
    }

    function displayTable() {
      let table = document.getElementById("dataTable");
      table.innerHTML = "";

      students.forEach(student => {
        table.innerHTML += `
          <tr>
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.course}</td>
            <td>${student.contact}</td>
            <td>
              <button class="btn btn-warning btn-sm me-2" onclick="editEntry(${student.id})">Edit</button>
              <button class="btn btn-danger btn-sm" onclick="deleteEntry(${student.id})">Delete</button>
            </td>
          </tr>
        `;
      });
    }

    function editEntry(id) {
      let student = students.find(s => s.id === id);
      if (student) {
        const newName = prompt("Enter new name:", student.name);
        const newEmail = prompt("Enter new email:", student.email);
        const newCourse = prompt("Enter new course:", student.course);
        const newContact = prompt("Enter new contact:", student.contact);

        if (newName && newEmail && newCourse && newContact) {
          student.name = newName;
          student.email = newEmail;
          student.course = newCourse;
          student.contact = newContact;
          displayTable();
        }
      }
    }

    function deleteEntry(id) {
      if (confirm("Are you sure you want to delete this student?")) {
        students = students.filter(s => s.id !== id);
        displayTable();
      }
    }