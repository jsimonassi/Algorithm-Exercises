/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    const uniqueLocalEmails = new Set();
    for(const email of emails){
        let domain = email.split('@')[1];
        let localEmail = '';
        let indexCharacter = 0;
        while(email[indexCharacter] !== '@' && email[indexCharacter] !== '+'){
            if(email[indexCharacter] !== '.'){
                localEmail += email[indexCharacter];
            }
            indexCharacter++;
        }
        if(localEmail !== ''){
            uniqueLocalEmails.add(localEmail + "@" +domain);
        }
    }
    
    return uniqueLocalEmails.size;
};

const emails = ["test.email+alex@leetcode.com","test.email.leet+alex@code.com"];
console.log("OPA: ", numUniqueEmails(emails));