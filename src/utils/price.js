export function priceValue(value) {
    value = value || 0;
    value = parseFloat(value);
    return value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}