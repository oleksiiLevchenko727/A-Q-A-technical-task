import { test, expect, APIResponse } from '@playwright/test';

test.describe('Room API', () => {
  test('Create a room and verify existence', async ({ request }) => {
    // Should to create a room with the name "121" and verify that it exists in the list of rooms
    const createResponse: APIResponse = await request.post(
      'https://automationintesting.online/api/room',
      {
        headers: {
          cookie: 'token=xcij642jVh9kiAqQ',
        },
        data: {
          roomName: '126',
          type: 'Single',
          accessible: false,
          description: 'The beast room in the hotel',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBNNZ5VpxMV57cgRiNNOqdN5iWA2JYeakvpw&s',
          roomPrice: '300',
          features: ['WiFi', 'TV', 'Refreshments', 'Safe', 'Free breakfast'],
        },
      },
    );
    
    expect(createResponse.ok()).toBeTruthy();

    // Take list of rooms
    const getResponse: APIResponse = await request.get(
      'https://automationintesting.online/api/room',
    );
    expect(getResponse.ok()).toBeTruthy();
    const rooms = (await getResponse.json()).rooms;

    // Check if the room exists
    const isExist = rooms.some((room: any) => room.roomName === '126');
    expect(isExist).toBeTruthy();
  });

  test('Book a room', async ({ request }) => {
    const body = {
      roomid: 7,
      firstname: 'Oleksii',
      lastname: 'Levchenko',
      depositpaid: true,
      bookingdates: {
        checkin: '2025-08-21',
        checkout: '2025-08-22',
      },
      email: 'o.levchenko@neolit.ua',
      phone: '380961686620',
    };
    const response: APIResponse = await request.post(
      'https://automationintesting.online/api/booking',
      {
        data: body,
      },
    );
    expect(response.ok()).toBeTruthy();
  });


  test('Edit room and check changes in the User page', async ({ request }) => {
    const getRoomsResponse = await request.get('https://automationintesting.online/api/room');
    expect(getRoomsResponse.ok()).toBeTruthy();
    const roomsData = await getRoomsResponse.json();
    const rooms = roomsData.rooms;
    const targetRoom = rooms.find((room: any) => room.roomName === '126');
    expect(targetRoom).toBeTruthy();
    const roomId = targetRoom.roomid;
    console.log('Found Room ID:', roomId);
    const updateResponse: APIResponse = await request.put(
      `https://automationintesting.online/api/room/${roomId}`,
      {
        headers: {
          cookie: 'token=xcij642jVh9kiAqQ',
          'Content-Type': 'application/json'
        },
        data: {
          roomid: roomId,
          roomName: '126',
          type: 'Double',
          accessible: false,
          description: 'The beast room in the Ukraine',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBNNZ5VpxMV57cgRiNNOqdN5iWA2JYeakvpw&s',
          roomPrice: '499',
          features: ['WiFi', 'TV', 'Refreshments', 'Safe', 'Free breakfast'],
        },
      },
    );

    console.log('Status:', updateResponse.status());

    console.log('Body:', await updateResponse.text());

    expect(updateResponse.ok()).toBeTruthy();

    // Check result 
    const getResponseAfter: APIResponse = await request.get(
      'https://automationintesting.online/api/room',
    );
    expect(getResponseAfter.ok()).toBeTruthy();
    const roomsAfter = (await getResponseAfter.json()).rooms;
    const updatedRoom = roomsAfter.find((r: any) => r.roomName === '126');
    expect(updatedRoom.type).toBe('Double');
    expect(updatedRoom.description).toBe('The beast room in the Ukraine');
  });



  test('Delete room with name "126"', async ({ request }) => {
  const getRoomsResponse = await request.get('https://automationintesting.online/api/room');
  expect(getRoomsResponse.ok()).toBeTruthy();

  const roomsData = await getRoomsResponse.json();
  const rooms = roomsData.rooms;

  const targetRoom = rooms.find((room: any) => room.roomName === '126');
  expect(targetRoom).toBeTruthy();

  const roomId = targetRoom.roomid;
  console.log('Room to delete:', roomId);

  const deleteResponse = await request.delete(
    `https://automationintesting.online/api/room/${roomId}`,
    {
      headers: {
        cookie: 'token=xcij642jVh9kiAqQ', 
      }
    }
  );

  console.log('Delete status:', deleteResponse.status());
  console.log('Delete response:', await deleteResponse.text());

  expect(deleteResponse.ok()).toBeTruthy();

  // Should check that the room is deleted
  const getRoomsAfter = await request.get('https://automationintesting.online/api/room');
  const updatedRooms = (await getRoomsAfter.json()).rooms;
  const roomStillExists = updatedRooms.some((room: any) => room.roomid === roomId);
  expect(roomStillExists).toBeFalsy();
});
  
});



