const URL = 'https://dogsapi.origamid.dev/json';
export default URL;

export function TOKEN_POST(body) {
	return {
		url: `${URL}/jwt-auth/v1/token`,
		options: {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		},
	};
}

export function TOKEN_VALIDATE_POST(token) {
	return {
		url: `${URL}/jwt-auth/v1/token/validate`,
		options: {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${token}`
			}
		},
	};
}

export function GET_USER(token) {
	return {
		url: `${URL}/api/user`,
		options: {
			method: 'GET',
            headers: {
				Authorization: `Bearer ${token}`
			}
		},
	};
}
