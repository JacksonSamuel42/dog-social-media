import React from 'react';
import styles from './Input.module.css';

const Input = ({label, type, name, value, onChange, error, onBlur}) => {
	return (
		<div className={styles.wrapper}>
			<label htmlFor={name} className={styles.label}>
				{label}
			</label>
			<input
				type={type}
				value={value}
				onChange={onChange}
				id={name}
				className={styles.input}
        		onBlur={onBlur}
			/>
			{error && <p className={styles.error}>{error}</p>}
		</div>
	);
};

export default Input;
