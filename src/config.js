let BASE_URL, SECOND_URL;

if (window.location.host === 'localhost:3000') {
    BASE_URL = `http://www.omdbapi.com`;
    SECOND_URL = 'http://img.omdbapi.com';
} else if (window.location.host === 'mining-hotel.4-com.pro') {
    BASE_URL = `http://www.omdbapi.com`;
    SECOND_URL = 'http://img.omdbapi.com';
} else {
    BASE_URL = `http://www.omdbapi.com`;
    SECOND_URL = 'http://img.omdbapi.com';
}

export const API_BASE_URL = BASE_URL;
export const API_SECOND_URL = SECOND_URL;
export const apiKey = '2c4ccd06';
