# Introduction

The application MVP detail can be found in note.txt.

The application is composed of the following pieces:
* page
    * pageHome - "/"
    * pageLogin - "/login"
    * pageProfile - "/profile"
    * pageReserveClass - "/reserve"
    * pageManageClass - "/manage"
* components
    * classCard.js
    * classDetail.js
    * footer.js
    * formLogin.js
    * formProfile.js
    * header.js
    * listOfClass.js
    * navigationBar.js
    * taskManageClass.js
    * taskReserveClass.js
    * userOnBoarding.js

## Each Page Compositoin

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

