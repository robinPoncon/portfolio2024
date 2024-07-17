export type CustomObject = {
	[key: string]: string | FormDataEntryValue;
};

export type Formatters = {
	[key: string]: (value: string) => string;
};

export type Validators = {
	[key: string]: (value: string) => string[] | null;
};
