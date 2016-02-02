describe("Address Book", function() {
    
    it("should add contact", function() {
      var addressBook = new AddressBook(),
              contact = new Contact();

      addressBook.addContact(contact); 

      expect(addressBook.getContact(0)).toBe(contact);
    });

    it("should delete contact", function() {
      var addressBook = new AddressBook(),
              contact = new Contact();

      addressBook.addContact(contact); 
      addressBook.deleteContact(0);

      expect(addressBook.getContact(0)).not.toBeDefined();
    });
});