export const rules = {
    required: (message: string = "Это обезательное поле!") => ({
        required: true,
        message,
    }),
    equalInputs: (message: string, watchedInput: string) => ({
        validator(_: any, value: string) {
            if (value === watchedInput) {
                return Promise.resolve();
            }
            return Promise.reject(new Error(message));
        }
    })
}