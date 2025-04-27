// Business logic
function Contact(firstName, lastName, phone, email) {
    this.firstName = firstName;
    this.lastName  = lastName;
    this.phone     = phone;
    this.email     = email;
  }
  
  function AddressBook() {
    this.contacts = [];
  }
  
  AddressBook.prototype.add = function(contact) {
    this.contacts.push(contact);
  };
  
  AddressBook.prototype.removeAt = function(index) {
    this.contacts.splice(index, 1);
  };
  
  AddressBook.prototype.findByName = function(name) {
    return this.contacts.filter(c =>
      (`${c.firstName} ${c.lastName}`).toLowerCase() === name.toLowerCase()
    );
  };
  
  // UI logic
  document.addEventListener('DOMContentLoaded', () => {
    const book      = new AddressBook();
    const form      = document.getElementById('contact-form');
    const listEl    = document.getElementById('contacts-list');
    const modal     = document.getElementById('details-modal');
    const detailNm  = document.getElementById('detail-name');
    const detailPh  = document.getElementById('detail-phone');
    const detailEm  = document.getElementById('detail-email');
    const closeBtn  = document.getElementById('close-modal');
  
    function render() {
      listEl.innerHTML = '';
      book.contacts.forEach((c, i) => {
        const li = document.createElement('li');
        li.textContent = `${c.firstName} ${c.lastName}`;
        
        const viewBtn = document.createElement('button');
        viewBtn.textContent = 'View';
        viewBtn.addEventListener('click', () => showDetails(i));
        
        const delBtn = document.createElement('button');
        delBtn.textContent = 'Delete';
        delBtn.addEventListener('click', () => {
          book.removeAt(i);
          render();
        });
  
        li.appendChild(viewBtn);
        li.appendChild(delBtn);
        listEl.appendChild(li);
      });
    }
  
    function showDetails(index) {
      const c = book.contacts[index];
      detailNm.textContent = `${c.firstName} ${c.lastName}`;
      detailPh.textContent = c.phone;
      detailEm.textContent = c.email;
      modal.classList.remove('hidden');
    }
  
    closeBtn.addEventListener('click', () => {
      modal.classList.add('hidden');
    });
  
    form.addEventListener('submit', e => {
      e.preventDefault();
      const contact = new Contact(
        form['first-name'].value,
        form['last-name'].value,
        form.phone.value,
        form.email.value
      );
      book.add(contact);
      form.reset();
      render();
    });
  
    // initial render (empty)
    render();
  });
  