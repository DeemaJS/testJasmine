describe("AddressBook", function() {
    it("should add contact", function() {
      var addressBook = new AddressBook(),
              contact = new Contact();
      addressBook.addContact(contact); 
    });
});