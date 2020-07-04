function formatPrice(price: number): string {
  return Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format(price);
}

export default formatPrice;
