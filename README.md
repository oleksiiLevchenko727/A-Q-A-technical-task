-------------------------------------------------------------------------------------------------------------
To execute the test cases, you need to create folders in your Explorer as "e2e" and "page".
After that, you should put test cases into these folders, as their locations are below, and it will work.
-------------------------------------------------------------------------------------------------------------
The location of test cases:

1. Check that the room can be booked with valid data
Location of spec file: tests/e2e/validData.spec.ts
Location of page file: tests/pages/ValidDataPage.ts

2. Check that the room can’t be booked with invalid data
Location of spec file: tests/e2e/invalidData.spec.ts
Location of page file: tests/pages/InvalidData.page.ts

3. Check that the earlier booked dates show as Unavailable
Location of spec file: tests/e2e/UnavailableRoom.spec.ts
Location of page file: tests/pages/UnavailableRoomPage.ts

4. Should create and delete a room using the API
Location of spec file: tests/e2e/apiCreateRoom.spec.ts
-------------------------------------------------------------------------------------------------------------
