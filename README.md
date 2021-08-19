## Firebase feature comparison (v8 to v9)

> Last updated: 8/19/2021 at 12:26am

### Follow me on Twitter [@klutchdev](https://twitter.com/klutchdev)

> This is a reference for translating current Firebase functionality into the new tree-shakeable functionality found in the new v9 beta.

### Documented features

- [x] Analytics
  - [x] Log event
  - [x] Set user properties
  - [x] Measure eCommerce
- [x] Authentication
  - [x] Sign in
    - [x] Email and password
    - [x] Email link
    - [x] Phone
    - [x] Google
    - [x] Facebook
    - [x] Apple
    - [x] Twitter
    - [x] Github
    - [x] Microsoft
    - [x] Yahoo
  - [x] Sign out
  - [x] Auth state listener
  - [x] Update/delete a user
  - [x] Verify email
  - [x] Reset password
- [x] Config
- [x] Firestore
  - [x] Add/set a document
  - [x] Add/set a document w/ auto ID
  - [x] Merge/update a document
  - [x] Get a document
  - [x] Get a collection
  - [x] Listen to a document
  - [x] Listen to a collection
  - [x] Delete a document
  - [x] Server timestamp
  - [x] Array union
  - [x] Array remove
  - [x] Increment
  - [x] Batch read/write/delete
- [x] Functions
  - [x] Callable functions
- [x] Initialization
- [x] Messaging
  - [x] Get a registration token
  - [x] Foreground message
  - [x] Background message
- [ ] Realtime database (80% completed)
  - [x] Write data
  - [x] Read data
  - [x] Read data once
  - [ ] Update data (coming soon)
  - [ ] Delete data (coming soon)
- [ ] Storage (coming soon)

### Quick example

#### Get/read a single Firestore document

![Comparison example](comparison-example.png)

### Additional examples from Twitter

#### [Part 1 - Initialization, imports and exports](https://twitter.com/KlutchDev/status/1423835443628584960)

![Part 1](screenshot-part1.png)

#### [Part 2 - Basic auth features](https://twitter.com/KlutchDev/status/1423957300772065287)

![Part 2](screenshot-part2.png)

#### [Part 3.1 - Get/read a single Firestore doc](twitter.com/KlutchDev/status/1427435257993834503)

![Part 3.1](screenshot-part3-1.png)
