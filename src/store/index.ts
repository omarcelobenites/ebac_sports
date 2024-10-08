import { configureStore } from '@reduxjs/toolkit'

import carrinhoReducer from './reducers/carrinho'
import favoritos from './reducers/favoritos'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favoritos: favoritos
  }
})

export type RootReducer = ReturnType<typeof store.getState>
