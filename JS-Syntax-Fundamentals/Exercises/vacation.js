function solve(numberOfPeople, groupType, dayOfWeek) {
    let price;

    switch (groupType) {
        case 'Students':
            switch (dayOfWeek) {
                case 'Friday':
                    price = 8.45;
                    break;
                case 'Saturday':
                    price = 9.80;
                    break;
                case 'Sunday':
                    price = 10.46;
                    break;
            }
            break;
        case 'Business':
            switch (dayOfWeek) {
                case 'Friday':
                    price = 10.90;
                    break;
                case 'Saturday':
                    price = 15.60;
                    break;
                case 'Sunday':
                    price = 16;
                    break;
            }
            break;
        case 'Regular':
            switch (dayOfWeek) {
                case 'Friday':
                    price = 15;
                    break;
                case 'Saturday':
                    price = 20;
                    break;
                case 'Sunday':
                    price = 22.50;
                    break;
            }
            break;
    }

    let totalprice = price * numberOfPeople;

    if (groupType == 'Students' && numberOfPeople >= 30) {
        totalprice -= totalprice * 0.15;
    } else if (groupType == 'Business' && numberOfPeople >= 100) {
        totalprice -= price * 10;
    } else if (groupType == 'Regular' && (numberOfPeople >= 10 && numberOfPeople <= 20)) {
        totalprice -= totalprice * 0.05;
    }

    console.log(`Total price: ${totalprice.toFixed(2)}`);
    
}

solve(30, 'Students', 'Sunday');
solve(40, 'Regular', 'Saturday');
