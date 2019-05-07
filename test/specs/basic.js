let GetRandomString =  require('../Keywords/GetRandomString')

describe('Phptravels sign up Page', () => {
    it('should sign up successfully', () => {
        browser.url('https://www.phptravels.net/register');
        browser.getTitle().should.be.equal('Register');
  
        const firstname = $('//*[@name = "firstname"]');
        firstname.setValue('Luu');

        const lastname = $('//*[@name = "lastname"]');
        lastname.setValue('Luu'); 

        const phone = $('//*[@name = "phone"]');
        phone.setValue('0123456789'); 

        randomEmail = GetRandomString.randomStringGenerator('email','@gmail.com');
        const email = $('//*[@name = "email"]');
        email.setValue("nguyetluu" + randomEmail); 

        const password = $('//*[@name = "password"]');
        password.setValue('123456'); 

        const confirmpassword = $('//*[@name = "confirmpassword"]');
        confirmpassword.setValue('123456'); 

        const submit = $("//*[contains(@class, 'signupbtn') and normalize-space(text())='Sign Up']");
        submit.click();
    });
});