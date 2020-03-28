const initialState = {
    isLoading: false,
    list: [
        {
            id: 1,
            titile: " test notification title",
            description: "test notification description",
            isRed: false,
        },
        {
            id: 1,
            titile: " test notification title 2",
            description: "test notification description",
            isRed: true,
        }

    ]
}

export default (state = initialState, action: any) => {
    switch (action.type) {
        default:
            return state;

    }
}