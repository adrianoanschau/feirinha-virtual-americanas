export function priceValue(value) {
    value = value || 0;
    return value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}