const axios = require('axios');
const getFirstAlbumTitle = require('./getAlbumTitle');


it('returns the title of the first album', async () => {
    jest.mock('axios');

    const expectedResponse = { 
        data: [
            {
                userId: 1,
                id: 1,
                title: 'My First Album'
            },
            {
                userId: 1,
                id: 2,
                title: 'Album: The Sequel'
            }
        ]
    };

    axios.get = jest.fn().mockResolvedValue({
        data: [
            {
                userId: 1,
                id: 1,
                title: 'My First Album'
            }
        ]
    });

    const result = await getFirstAlbumTitle();

    expect(result).toEqual(expectedResponse.data[0]);
});
