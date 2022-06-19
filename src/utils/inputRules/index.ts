export const rules = {
    required: (message: string = "Это обезательное поле!") => ({
        required: true,
        message,
    })
}