describe("Address Book", function() {
    it("should add contact", function() {
      var addressBook = new AddressBook(),
              contact = new Contact();

      addressBook.addContact(contact); 

      expect(addressBook.getContact(0).toBe(contact));
    });
});