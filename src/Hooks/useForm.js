import React from 'react';

const types = {
	email: {
		regex:  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
		message: 'preencha um email inválido',
	},
	number: {
		regex: /^\d+$/,
		message: 'Utilize número apenas.'
	}
};

const useForm = (type) => {
	const [value, setValue] = React.useState('');
	const [error, setError] = React.useState('');

	const validate = (value) => {
		if (type === false) return true;
		else if (value.length === 0) {
			setError('Preencha um valor');
			return false;
		} else if (types[type] && !types[type].regex.test(value)) {
			setError(types[type].message);
			return false;
		} else {
			setError(null);
			return true;
		}
	};

	const onChange = ({target}) => {
        if(error) validate(target.value)
		setValue(target.value);
	};

	return {
		value,
		setValue,
		onChange,
        error,
		validate: () => validate(value),
        onBlur: () => validate(value)
	};
};

export default useForm;
