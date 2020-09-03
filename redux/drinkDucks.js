// ========== Constants ==========
const initialState = {
    drinks: [
        {
            name: 'Jameson',
            price: 170.90,
            img: 'https://next-app-bucket-2020.s3.us-east-2.amazonaws.com/drink_1.png'
        },
        {
            name: 'Jack Daniel\'s',
            price: 160.90,
            img: 'https://next-app-bucket-2020.s3.us-east-2.amazonaws.com/drink_2.png'
        },
        {
            name: 'Johnnie Walker Red Label',
            price: 175.90,
            img: 'https://next-app-bucket-2020.s3.us-east-2.amazonaws.com/drink_3.jpg'
        },
        {
            name: 'Flor de Caña',
            price: 39.90,
            img: 'https://next-app-bucket-2020.s3.us-east-2.amazonaws.com/drink_4.jpg'
        },
        {
            name: 'Johnnie Walker Black Label',
            price: 189.90,
            img: 'https://next-app-bucket-2020.s3.us-east-2.amazonaws.com/drink_5.jpg'
        }
    ]
}

const GET_DRINKS = 'GET_DRINKS';
// ===============================


// ========== Reducers ==========
export const drinkReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_DRINKS:
            return {...state, drinks: action.data.drinks}
        default:
            return state;
    }
}
// ==============================


// ========== Actions ==========
export const getDrinksAction = () => (dispatch, getState) => {
    try{
        const { drinks } = getState().drinks;

        dispatch({
            type: GET_DRINKS,
            data: {
                drinks
            }
        })
    } catch(err){
        console.error(err);
    }
}
// =============================