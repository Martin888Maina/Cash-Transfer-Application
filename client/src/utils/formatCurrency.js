// format as KES since this is a Kenyan fintech app
const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'KES',
    }).format(amount);
};

export default formatCurrency;
