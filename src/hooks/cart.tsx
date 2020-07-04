import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react';

interface PokemonItem {
  id: string;
  name: string;
  imageURL: string;
  price: number;
  amount: number;
}

interface Cart {
  pokemonList: PokemonItem[];
  total: number;
  addOnCart: (pokemon: PokemonItem) => void;
  incrementPokemonAmount: (id: string) => void;
  decrementPokemonAmount: (id: string) => void;
}

const CartContext = createContext<Cart>({} as Cart);

const CartProvider: React.FC = ({ children }) => {
  const [pokemonList, setPokemonList] = useState<PokemonItem[]>(() => {
    const pokemon = localStorage.getItem('@pokestore:pokemonList');

    if (!pokemon) return [];

    return JSON.parse(pokemon) || [];
  });
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = pokemonList.reduce((amount, item) => {
      return amount + item.price * item.amount;
    }, 0);

    setTotal(newTotal);

    localStorage.setItem('@pokestore:pokemonList', JSON.stringify(pokemonList));
  }, [pokemonList]);

  const addOnCart = useCallback((pokemon: PokemonItem) => {
    setPokemonList((state) => {
      const findPokemon = state.find((item) => item.id === pokemon.id);

      if (findPokemon) {
        return state.map((item) => {
          if (item.id !== findPokemon.id) return item;

          return {
            ...item,
            amount: item.amount + 1,
          };
        });
      }

      return [...state, pokemon];
    });
  }, []);

  const incrementPokemonAmount = useCallback((id: string) => {
    setPokemonList((state) => {
      return state.map((item) => {
        if (item.id !== id) return item;

        return {
          ...item,
          amount: item.amount + 1,
        };
      });
    });
  }, []);

  const decrementPokemonAmount = useCallback((id: string) => {
    setPokemonList((state) => {
      const findPokemon = state.find((item) => item.id === id);

      if (!findPokemon) {
        return state;
      }

      findPokemon.amount -= 1;

      if (findPokemon.amount < 0) {
        return state.filter((item) => item.id !== findPokemon.id);
      }

      return state.map((item) => {
        if (item.id !== findPokemon.id) return item;
        return findPokemon;
      });
    });
  }, []);

  return (
    <CartContext.Provider
      value={{
        pokemonList,
        total,
        addOnCart,
        incrementPokemonAmount,
        decrementPokemonAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

function useCart(): Cart {
  const context = useContext(CartContext);

  return context;
}

export { CartProvider, useCart };
