# AnyShop - An Online Leather Store

Pesto alpha team is proudly launching its own Online Leather Store **AnyShop**. The store will sell major leather items like handbags, shoes, belts, purses and wallets.

# Product Requirements

### Different parts/modules of the shop are. These are explained in detail later:

- [ ] Authentication
  - [ ] Signup
  - [ ] Login
  - [ ] Forgot Password
  - [ ] Reset Password
- [ ] Homepage
- [ ] Category Page
- [ ] Product Page
- [ ] Cart Page
- [ ] Checkout Page
- [ ] Thank You/Order Placed Page
- [ ] User Profile
  - [ ] Account Settings
  - [ ] Payment Settings
  - [ ] Addresses
  - [ ] Past Orders
  - [ ] Wishlist
  - [ ] Recently Viewed
- [ ] Other Pages
  - [ ] About Us
  - [ ] Contact Us
  - [ ] Return Policy
  - [ ] Refund Policy
  - [ ] Privacy Policy
  - [ ] Terms and Conditions
        
### Authentication
If user visits homepage, show login/signup popup modal
    
    
-   #### Signup
    The user can signup using these methods:
    - **Email**
        
        _Fields:_ Name, Email, Password
    
    - **Phone**
        
        _Fields:_ Name, Phone Number, Password
    
    - **Google and Facebook**
        
        Show buttons for "Continue with Google", "Continue with Facebook".
        
        If the user authenticates using google/facebook account, then ask for name, email, phone number permissions. On successful authentication, create user account using the name, email, phone number. Also, login the user and save user token.
    
        ***Notes***
    
        1.Show Login/Signup option on user's first visit.

        2.After signup, login the user. But add a header bar that "Your account is not verified. Kindly verify your email/phone number".
 
        3.Treat users signed using Google, Facebook as verified and do not show "Verify Header".

        4.If email / phone is already taken (account exists), show button to reset password.


- #### Login
    
    The user can login using these methods:
    
    - **Email, Phone**
    
        Identify on backend if submitted value is valid email. If not, then it should be considered phone number.

    - **Google and Facebook**
    
        On successful authentication, login the user and save user token.

    

- #### Signup and Login Page elements
    ```
    [Input - Name (only on signup*)]
    [Input - Email / Phone]
    [Input - Password]
    [Button - Login / Create Account]
    [Button - Continue with Google]
    [Button - Continue with Facebook]
    ```

- #### Forgot Password Page

    - **Page Elements**
       ```
       [Input - Email / Phone]
       [Button - Submit]
       ```

       ***Notes***
    
         1.If email address entered and account exists with that email address, send email with password reset link and show message that we have sent a password reset link on email. If the user clicks on the link in email, take them to "Reset Password Page". Else, show error that no account found.

         2.If phone number entered and account exists, send a OTP to phone numbe and change field to "Enter OTP" and button to "Verify OTP".Else, show error that no account found.

- #### Reset Password Page
    
    - **Page Elements**
        ```
        [Input - Enter New Password]
        [Input - Verify New Password]
        [Button - Submit]
        ```

        ***Notes***
    
        1.If both the passwords match and pass validation, then login the user and take them to home page.
