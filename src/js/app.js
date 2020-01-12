

const protsentRegular = 0.01;
const protsentIncreased = 0.05;
const protsentSpecial = 0.3;
const cashbackLimit = 3000;
const REGULAR_CATEGORY = 'regular';
const INCREASED_CATEGORY = 'increased';
const SPECIAL_CATEGORY = 'special'; 



const  purchases = [
    {
    amount: 1510,
    category: REGULAR_CATEGORY,
    },
    {
        amount: 274,
        category: INCREASED_CATEGORY,
    },
    {
        amount: 1245,
        category: SPECIAL_CATEGORY,
    },
];

let cashback = 0;


 for(const purchase of purchases){
    if (purchase.category == REGULAR_CATEGORY){
        cashback = protsentRegular * purchases[0].amount, REGULAR_CATEGORY;
    } else if (purchase.category == INCREASED_CATEGORY){
        cashback = protsentIncreased * purchases[1].amount, INCREASED_CATEGORY;
    } else if (purchase.category == SPECIAL_CATEGORY){
        cashback = protsentSpecial * purchases[2].amount, SPECIAL_CATEGORY;
    }  
 }


if (cashback > cashbackLimit) {
     cashback = cashbackLimit
};

 console.log(cashback +' рублей');
