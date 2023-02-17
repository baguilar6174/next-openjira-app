import { ChangeEvent, useState } from 'react';

export const useForm = (initialForm: any) => {
	const [form, setForm] = useState(initialForm);

	const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		const element = event.target as HTMLInputElement;
		const { name, value } = element;
		setForm({
			...form,
			[name]: value
		});
	};

	const onResetForm = (): void => setForm(initialForm);

	return {
		...form,
		form,
		onInputChange,
		onResetForm
	};
};
