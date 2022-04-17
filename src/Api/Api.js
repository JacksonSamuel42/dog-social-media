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

export function USER_GET(token) {
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

export function USER_POST(body) {
	return {
		url: `${URL}/api/user`,
		options: {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body)
		},
	};
}

export function PHOTOS_POST(formData, token) {
	return {
		url: `${URL}/api/photo`,
		options: {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${token}`
			},
			body: formData
		},
	};
}

export function PHOTOS_GET({page, total, user}) {
	return {
		url: `${URL}/api/photo?_page=${page}&_total=${total}&_user=${user}`,
		options: {
			method: 'GET',
            cache: 'no-store'
		},
	};
}

export function PHOTO_GET(id) {
	return {
		url: `${URL}/api/photo/${id}`,
	};
}

export function COMMENT_POST(id, body, token) {
	return {
		url: `${URL}/api/comment/${id}`,
		options: {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`
			},
			body: JSON.stringify(body)
		},
	};
}

export function POST_DELETE(id, token) {
	return {
		url: `${URL}/api/photo/${id}`,
		options: {
			method: 'DELETE',
			headers: {
				Authorization: `Bearer ${token}`
			},
		},
	};
}
