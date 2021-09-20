# Introduction

The application MVP are the following

[] 1. User can create/register as a `client` and login with the registered credentials.

[] 2. User can create/register as an `instructor` by entering an additional Auth Code during signup, and can login with the registered credentials.

[] 3. `client` and `instructor` are both presented with the appropriate on-boarding walkthrough on first sign-in, with an option to skip it.

[] 4. Authenticated `Instructor` can create update and delete a `class`. At a minimum, each `class` must have the following properties:
    * `Name`
    * `Type`
    * `Start time`
    * `Duration`
    * `Intensity level`
    * `Location`
    * `Current number of registered attendees`
    * `Max class size`

[] 5. Authenticated `client` can search for available classes. At a minimum, they must be able to search by the following criteria:
   * `class time`
   * `class date`
   * `class duration`
   * `class type`
   * `intensity level`
   * `class location`

[] 6. Authenticated `instructor` can create virtual punch pass categories for each type of group fitness class they offer (yoga, insanity, RIPPED, pilates, etc.)

[] 7. Authenticated `user` can reserve a spot in a `class` with available seats open, and can reschedule or cancel their current `reservation` from the mobile app.

## Single Page Composition

The application is composed of the following pages:
 * pageHome - "/" (for the public viewing)
 * pageLogin - "/login" (for both student and instructor)
 * pageProfile - "/profile" (for both student and instructor)
 * pageReserveClass - "/reserve" (for student only)
 * pageManageClass - "/manage" (for instructor only)

These are the components used to composite a page.
  * (common web page component)
    * header.js - the header of a web page
    * navigationBar.js - the navigation bar of a web page
    * footer.js - the footer of a web page
  
  * (common form for user login and profile)  
    * formLogin.js - form for logging in
    * formProfile.js - form for create, edit a user profile
  
  * (various level of class object)
    * classCard.js - a card with interactive button(s) and input(s)
    * classDetail.js - a div that show full detail of a class
    * listOfClass.js - a list for showing multiple classCard.js
  
  * (interactive component for users to add, edit,remove, and view data)
    * taskManageClass.js - the interactive portal for an instructor to add, edit, or remove class(es)
    * taskReserveClass.js - the interactive portal for a student to reserve or un-reserve a class
    * userOnBoarding.js - the interactive portal for a brand new user

### pageHome - "/"

    This page is composed of these components : `CompHeader`, `CompFooter`.

### pageLogin - "/login"

    This page is composed of these components : `CompHeader`, `CompFooter`,`CompFormLogin`, and `CompUserOnboarding`.

    This page allow a user to signup for an account.

    Additionally, user can on skip the onboarding process (`CompUserOnboarding`).

    After a user successfully login, a user should be directed to an appropriate page.

### pageProfile - "/profile"

    This page is composed of these components : `CompHeader`, `CompFooter`,  and `CompFormProfile`.

    This page allow a user to edit the profile content. The profile content must have the following fields
    * first name
    * last name
    * email address
    * birth year
    * account type - student or instructor

### pageReserveClass - "/reserve"

    This page is composed of these components : `CompHeader`, `CompFooter`, `CompTaskReserveClass`, `CompListOfClass`,`CompClassDetail`, and `CompClassCard`.

    This page is protected and should be accessed by authorized student account only.

    The interaction of below components shall be defined on pageReserveClass component and render/re-render as needed.
    * `CompTaskReserveClass`
    * `CompListOfClass`
    * `CompClassDetail`
    * `CompClassClassCard`

### pageManageClass - "/manage"

    This page is composed of these components : `CompHeader`, `CompFooter`, `CompTaskManageClass`, `CompListOfClass`,`CompClassDetail`, and `CompClassCard`.

    This page is protected and should be accessed by authorized instructor account only.

      The interaction of below components shall be defined on pageManageClass component  and render/re-render as needed.
      * `CompTaskManageClass`
      * `CompListOfClass`
      * `CompClassDetail`
      * `CompClassClassCard`
  
### page404

    This page is composed of these components : `CompHeader`, `CompFooter`.

    This page is not part of MVP and only used when routing table does not match and valid URL.

