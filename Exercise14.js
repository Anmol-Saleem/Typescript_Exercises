"use strict";
//  Exercise 14
//Changing Guest List:
// You just heard that one of your guests can’t make the dinner, so you need to send out a new set 
//of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 13. Add a print statement at the end of your program stating the name of the
// guest who can’t make it.
Object.defineProperty(exports, "__esModule", { value: true });
exports.guest = void 0;
let guest = ["Kamran Tessori", "Daniyal Nagori", "Zia Khan"];
exports.guest = guest;
console.log("    Invitation");
guest.forEach((sir) => {
    console.log(`Dear ${sir}, I would be honored if you could join us for a delightful dinner at my home.`);
});
console.log("\nAnouncment!\n");
let guest2 = guest[0];
console.log(`Regrettably, Our guest ${guest2} is unable to join us for dinner due to unforeseen circumstances.`);
console.log("    New invitation\n ");
let new_guest = "Anwar-ul Haq Kakar";
guest[0] = new_guest;
guest.forEach((sir) => {
    console.log(`Dear ${sir}, I would be honored if you could join us for a delightful dinner at my home.`);
});
