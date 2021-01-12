import AbstractView from "./AbstractView.js";
import menuHelper from "../helpers/menuHelper.js";

export default class Menu extends AbstractView {
    constructor() {
        super();
    }

    activeHelper(myPath) {
        var helper = new menuHelper();
        helper.setActive(myPath);
    }

    htmlHelper(foods) {
        // Make adjustments to account for price
        // List is [[foot item, price]]
        var result = ``;
        for (var i = 0; i < foods.length; i++) {
            result += `<div class = "card shadow-sm bg-white rounded"><div class = "card-body"><h5 class = "card-title" id = "theFood">${foods[i][0]}</h5><h6 class = "card-subtitle text-muted" id = "pricing">${foods[i][1]}</h6></div></div>`;
        }
        return result; 
    }

    thaiHelper(rice, noodle, basil, coconut, mango) {
        var result = ``;
        var categories = {
            'Thai Style Fried Rice':rice,
            'Thai Noodle(Pad Thai)':noodle,
            'Thai Basil Sauce':basil,
            'Thai Coconut':coconut,
            'Thai Mango':mango
        };

        for (var key in categories) {
            var foods = this.htmlHelper(categories[key]);
            result += (`<h3>${key}</h3>` + foods + `<br>`);
        }
        return result;
    }
    getSpecialties() {
        var result = ``;
        var foods = [
            [`A. Fried Chicken Wings(4)`, `<strong>Plain:</strong> 5.75 <br><strong>Plain Fried Rice or French Fries:</strong> 7.75 <br><strong>Chicken or Roast Pork Fried Rice:</strong> 7.75 <br><strong>Beef or Shrimp Fried Rice:</strong> 8.55`],
            [`B. Fried Scallops(12)`, `<strong>Plain:</strong> 5.55 <br><strong>Plain Fried Rice or French Fries:</strong> 8.25 <br><strong>Chicken or Roast Pork Fried Rice:</strong> 8.25 <br><strong>Beef or Shrimp Fried Rice</strong> 9.25`],
            [`C. Fried Jumbo Shrimp(6)`, `<strong>Plain:</strong> 7.25 <br><strong>Plain Fried Rice or French Fries:</strong> 8.25 <br><strong>Chicken or Roast Pork Fried Rice:</strong> 8.25 <br><strong>Beef or Shrimp Fried Rice</strong> 8.95`],
            [`D. Fried Crab Meat Stick(6)`, `<strong>Plain:</strong> 4.75 <br><strong>Plain Fried Rice or French Fries</strong> 7.75 <br><strong>Chicken or Roast Pork Fried Rice:</strong> 7.75 <br><strong>Beef or Shrimp Fried Rice:</strong> 8.75`],
            [`E. French Fries`, `(S) 2.95 (L) 4.55`],
            [`F. Onion Rings`, `(S) 2.95 (L) 4.55`],
            [`G. Fried Half Chicken`, `<strong>Plain:</strong> 5.95 <br><strong>Plain Fried Rice or French Fries:</strong> 7.95 <br><strong>Chicken or Roast Pork Fried Rice:</strong> 7.95 <br><strong>Beef or Shrimp Fried Rice:</strong> 8.95`],
            [`H. Buffalo Chicken Wings(we. Blue Cheese)`, `<strong>Plain:</strong> 6.75`],
            [`I. Spare Rib Tips`, `<strong>Plain:</strong> 6.75 <br><strong>Plain Fried Rice or French Fries:</strong> 7.75 <br><strong>Chicken or Roast Pork Fried Rice:</strong> 7.75 <br><strong>Beef or Shrimp Fried Rice:</strong> 8.75`],
            [`J. Fried Plantains`, `<strong>Plain:</strong> 3.95`],
            [`K. Fried Fish`, `<strong>Plain:</strong> 5.75 <br><strong>Plain Fried Rice or French Fries:</strong> 7.75 <br><strong>Chicken or Roast Pork Fried Rice:</strong> 7.75 <br><strong>Beef or Shrimp Fried Rice:</strong> 8.75`],
            [`L. Chinese Donut(10)`, `<strong>Plain:</strong> 4.25`]
        ];
        result = this.htmlHelper(foods);
        return result;
    }

    getAppetizer() {
        var result = ``;
        var foods = [
            [`Egg Roll`, `1.75`],
            [`Shrimp Egg Roll`, `1.75`],
            [`Fantail Shrimp`, `1.75`],
            [`Spring Roll`, `1.95`],
            [`BBQ Spare Ribs(w/ bone)`, `(S) 8.75 (L) 13.95`],
            [`Boneless Spare Ribs`, `(S) 8.75 (L) 13.95`],
            [`Chicken Wings with Garlic Sauce(4)`, `6.75`],
            [`French Fries`, `2.95`],
            [`Fried Wonton(10)`, `5.25`],
            [`Chicken Nuggets(10)`, `5.50`],
            [`Fried Scallops(12)`, `5.55`],
            [`Beef Stick(4)`, `8.75`],
            [`Onion Rings`, `2.95`],
            [`Shrimp Toast(4)`, `5.25`],
            [`Scallion Pancakes`, `5.95`],
            [`Pork Dumplings(Steamed or Fried)(8)`, `6.75`] ,
            [`Vegetable Dumplings(8)`, `6.75`],
            [`Spinach Chicken Dumplings(8)`, `7.95`],
            [`Crab Rangoon(8)`, `(4) 4.25 (8) 6.50`],
            [`Golden Fingers(5)`, `(S) 6.45 (L) 9.55`],
            [`Wonton with Spicy Sauce`, `5.75`],
            [`Cold Noodle with Sesame Sauce`, `5.75`],
            [`Shrimp Dumplings(8)`, `8.95`],
            [`Combination Dumplings(8)`, `8.95`],
            [`Spicy Dumplings(8)`, `7.95`],
            [`Pu Pu Platter for 2`, `14.35`],
            [`Chicken Stick(4)`, `8.25`]
        ];
        result = this.htmlHelper(foods);
        return result;
                   
    }

    getSoup() {
        var result = ``;
        var foods = [
            [`Cantonese Wonton Soup(Shrimp and Pork)`, `Pt. 3.05 Qt. 5.25`],
            [`Wonton Soup`, `Pt. 3.05 Qt. 5.25`],
            [`Egg Drop Soup`, `Pt. 2.25 Qt. 4.50`],
            [`Chicken Rice Soup`, `Pt. 3.05 Qt. 5.25`],
            [`Chicken Noodle Soup`, `Pt. 3.05 Qt. 5.25`],
            [`Mixed Wonton Egg Drop Soup`, `Pt. 3.05 Qt. 5.25`],
            [`Hot and Sour Soup`, `Pt. 3.25 Qt. 5.55`],
            [`Vegetable Bean Curd Soup`, `4.95`],
            [`House Special Soup`, `6.95`],
            [`Seafood Soup`, `7.25`],
            [`Minced Chicken and Corn Soup`, `5.55`]
        ];
        result = this.htmlHelper(foods);
        return result;
    }

    getFriedRice() {
        var result = ``;
        var foods = [
            [`Vegetable Fried Rice`, `Pt. 5.25 Qt. 7.75`],
            [`Chicken Fried Rice`, `Pt. 5.45 Qt. 8.25`],
            [`Roast Pork Fried Rice`, `Pt. 5.45 Qt. 8.25`],
            [`Beef Fried Rice`, `Pt. 6.00 Qt. 9.25`],
            [`Shrimp Fried Rice`, `Pt. 6.00 Qt. 9.25`],
            [`House Special Fried Rice`, `Pt. 6.35 Qt. 9.50`],
            [`Lobster Fried Rice`, `Pt. 6.75 Qt. 10.45`],
            [`Seafood Pineapple Fried Rice`, `Pt. 6.00 Qt. 9.25`]
        ];
        result = this.htmlHelper(foods);
        return result;
    }

    getGrilled() {
        var result = ``;
        var foods = [
            [`Grilled Shrimp with Teriyaki Sauce`, `11.95`],
            [`Grilled Beef with Teriyaki Sauce`, `10.25`],
            [`Grilled Chicken with Teriyaki Sauce`, `10.25`]
        ];
        result = this.htmlHelper(foods);
        return result;
                    
    }

    getMeinSuey() {
        var result = ``;
        var foods = [
            [`Vegetable Chow Mein or Chop Suey`, `Pt. 5.60 Qt. 8.85`],
            [`Pork Chow Mein or Chop Suey`, `Pt. 5.85 Qt. 9.10`],
            [`Chicken Chow Mein or Chop Suey`, `Pt. 5.85 Qt. 9.10`],
            [`Beef Chow Mein or Chop Suey`, `Pt. 6.20 Qt. 9.35`],
            [`Shrimp Chow Mein or Chop Suey`, `Pt. 6.20 Qt. 9.35`],
            [`House Special Chow Mein or Chop Suey`, `Pt. 6.60 Qt. 10.55`]
        ];
        result = this.htmlHelper(foods);
        return result;
    }

    getLoMein() {
        var result = ``;
        var foods = [
            [`Vegetable Lo Mein`, `(S) 5.85 (L) 8.85`],
            [`Roast Pork Lo Mein`, `(S) 6.10 (L) 9.10`],
            [`Chicken Lo Mein`, `(S) 6.10 (L) 9.10`],
            [`Beef Lo Mein`, `(S) 6.45 (L) 9.35`],
            [`Shrimp Lo Mein`, `(S) 6.45 (L) 9.35`],
            [`House Special Lo Mein`, `(S) 6.85 (L) 10.55`]
        ];
        result = this.htmlHelper(foods);
        return result;
                    
    }

    getMeiChow() {
        var result = ``;
        var foods = [
            [`Roast Pork Mei Fun or Chow Fun`, `(Mei) 9.35 (Chow) 10.35`],
            [`Chicken Mei Fun or Chow Fun`, `(Mei) 9.35 (Chow) 10.35`],
            [`Beef Mei Fun or Chow Fun`, `(Mei) 9.85 (Chow) 10.85`],
            [`Shrimp Mei Fun or Chow Fun`, `(Mei) 9.85 (Chow) 10.85`],
            [`Singapore Style Mei Fun or Chow Fun`, `(Mei) 10.55 (Chow) 11.55`],
            [`Vegetable Mei Fun or Chow Fun`, `(Mei) 8.55 (Chow) 9.55`]
        ];
        result = this.htmlHelper(foods);
        return result;    
    }
    
    getEFG() {
        var result = ``;
        var foods = [
            [`Vegetable Egg Foo Young`, `8.75`],
            [`Roast Pork Egg Foo Young`, `8.75`],
            [`Chicken Egg Foo Young`, `8.75`],
            [`Mushroom Egg Foo Young`, `8.75`],
            [`Beef Egg Foo Young`, `9.25`],
            [`Shrimp Egg Foo Young`, `9.25`],
            [`House Special Egg Foo Young`, `9.75`]
        ];
        result = this.htmlHelper(foods);
        return result;
    }

    getPork() {
        var result = ``;
        var foods = [
            [`Roast Pork with Broccoli`, `Pt. 6.60 Qt. 9.65`],
            [`Roast Pork with Bean Sprouts`, `Pt. 6.60 Qt. 10.65`],
            [`Roast Pork with Chinese Vegetables`, `Pt. 6.60 Qt. 10.65`],
            [`Shredded Pork with String Beans`, `Pt. 6.60 Qt. 10.65`],
            [`Sweet and Sour Pork`, `Pt. 6.60 Qt. 10.65`],
            [`Pork with Mixed Vegetables`, `Pt. 6.60 Qt. 10.65`],
            [`Moo Shu Pork`, `10.65`],
            [`Shredded Pork with Szechuan Sauce`, `10.65`],
            [`Shredded Pork with Garlic Sauce`, `10.65`],
            [`Double Sauteed Sliced Pork`, `10.65`]
        ];
        result = this.htmlHelper(foods);
        return result;

                    
    }

    getChicken() {
        var result = ``;
        var foods = [
            [`Chicken with Lobster Sauce`, `Pt. 6.55 Qt. 10.65`],
            [`Chicken with Bean Curd`, `Pt. 6.55 Qt. 10.65`],
            [`Chicken with Broccoli`, `Pt. 6.70 Qt. 10.75`],
            [`Chicken with Almond`, `Pt. 6.55 Qt. 10.65`],
            [`Chicken with Black Bean Sauce`, `Pt. 6.55 Qt. 10.65`],
            [`Chicken with Pepper and Tomato`, `Pt. 6.55 Qt. 10.65`],
            [`Moo Goo Gai Pan`, `Pt. 6.55 Qt. 10.65`],
            [`Curry Chicken with Onion`, `Pt. 6.55 Qt. 10.65`],
            [`Kung Pao Chicken`, `Pt. 6.55 Qt. 10.65`],
            [`Diced Chicken and Cashew`, `Pt. 6.55 Qt. 10.65`],
            [`Chicken with Stirng Beans`, `Pt. 7.00 Qt. 10.65`],
            [`Chicken with Eggplants`, `Pt. 6.55 Qt. 10.65`],
            [`Sweet and Sour Chicken`, `Pt. 6.55 Qt. 10.65`],
            [`Chicken with Mixed Vegetables`, `Pt, 6.55 Qt. 10.65`],
            [`Moo Shu Chicken`, `10.65`],
            [`Chicken with Garlic Sauce`, `10.65`],
            [`Chicken Hunan Style`, `10.95`],
            [`Szechuan Chicken`, `10.95`]
        ];
        result = this.htmlHelper(foods);
        return result;
                    
    }

    getBeef() {
        var result = ``;
        var foods = [
            [`Beef with Potato`, `Pt. 7.00 Qt. 11.95`],
            [`Beef with Broccoli`, `Pt. 7.00 Qt. 11.75`],
            [`Beef with Peppers and Onions`, `Pt. 7.00 Qt. 11.25`],
            [`Beef with Pepper and Tomato`, `Pt. 7.00 Qt. 11.25`],
            [`Beef with Chinese Vegetables`, `Pt. 7.00 Qt. 11.25`],
            [`Beef with Mushrooms`, `Pt. 7.00 Qt. 11.25`],
            [`Beef with Bean Sprouts`, `Pt. 7.00 Qt. 11.25`],
            [`Beef with Oyster Sauce`, `Pt. 7.00 Qt. 11.25`],
            [`Beef with Eggplant`, `Pt. 7.00 Qt. 11.25`],
            [`Beef with String Beans`, `Pt. 7.00 Qt. 11.95`],
            [`Beef with Mixed Vegetables`, `Pt. 7.00 Qt. 11.25`],
            [`Moo Shu Beef`, `11.25`],
            [`Beef with Garlic Sauce`, `11.95`],
            [`Beef with Hunan Style`, `11.95`],
            [`Hot and Spicy Shredded Beef`, `11.95`]
        ];
        result = this.htmlHelper(foods);
        return result;
                    
    }

    getSeafood() {
        var result = ``;
        var foods = [
            [`Shrimp with Lobster Sauce`, `Pt. 7.30 Qt. 11.55`],
            [`Shrimp with Chinese Vegetables`, `Pt. 7.30 Qt. 11.55`],
            [`Shrimp with Pepper and Tomato`, `Pt. 7.30 Qt. 11.55`],
            [`Shrimp with Black Bean Sauce`, `Pt. 7.30 Qt. 11.55`],
            [`Shrimp with Broccoli`, `Pt. 7.50 Qt. 11.75`],
            [`Curry Shrimp with Onion`, `Pt. 7.30 Qt. 11.55`],
            [`Shrimp with Eggplant`, `Pt. 7.30 Qt. 11.55`],
            [`Baby Shrimp with Bean Sprouts`, `Pt. 7.30 Qt. 11.55`],
            [`Baby Shrimp with Cashew Nuts`, `Pt. 7.30 Qt. 11.55`],
            [`Kung Pao Baby Shrimp`, `Pt. 7.30 Qt. 11.55`],
            [`Shrimp with Mixed Vegetables`, `Pt. 7.30 Qt. 11.55`],
            [`Moo Shu Shrimp`, `11.55`],
            [`Hot and Spicy Shrimp`, `11.55`],
            [`Shrimp with Garlic Sauce`, `11.55`],
            [`Sweet and Sour Shrimp`, `12.55`],
            [`Scallop with Garlic Sauce`, `12.55`],
            [`Szechuan Shrimp`, `12.55`]
        ];
        result = this.htmlHelper(foods);
        return result;
    }

    getTofu() {
        var result = ``;
        var foods = [
            [`Ma Po Tofu`, `10.75`],
            [`Bean Curd with Mixed Vegetables`, `10.75`],
            [`Seasame Bean Curd`, `10.75`],
            [`General Tso's Bean Curd`, `10.75`]
        ];
        result = this.htmlHelper(foods);
        return result;
    }

    getVeg() {
        var result = ``;
        var foods = [
            [`Mixed Vegetables`, `Pt. 6.50 Qt. 9.25`],
            [`Broccoli with Spicy Garlic Sauce`, `Pt. 6.50 Qt. 9.25`],
            [`Sauteed String Beans`, `Pt. 6.50 Qt. 10.25`],
            [`Sauteed Chinese Eggplant in Garlic Sauce`, `Pt. 6.50 Qt. 10.25`],
            [`Moo Shu Vegetables`, `9.25`]
        ];
        result = this.htmlHelper(foods);
        return result;
    }

    getHS() {
        var result = ``;
        var foods = [
            [`Seafood Delight`, `14.25`],
            [`Butterfly Shrimp`, `13.45`],
            [`Boneless Duck`, `15.95`],
            [`Boneless Chicken`, `10.45`],
            [`Oyster Beef with Scallops`, `13.45`],
            [`Chicken with Orange Flavor`, `11.50`],
            [`Beef with Scallion`, `11.75`],
            [`Peking Beef`, `12.45`],
            [`Sesame Chicken`, `11.55`],
            [`Sesame Shrimp`, `12.45`],
            [`General Tso's Chicken`, `11.55`],
            [`Scallops and Shrimp with Garlic Sauce`, `12.45`],
            [`Happy Family`, `14,45`],
            [`Orange Beef`, `12.95`],
            [`Sesame Beef`, `12.95`],
            [`Dragon and Phoenix`, `12.45`],
            [`General Tso's Shrimp`, `12.45`],
            [`Four Seasons`, `12.00`],
            [`Kung Pao Triple Delight`, `11.75`],
            [`Seafood Pan Fried Noodles`, `13.75`],
            [`Hunan Triple Delight`, `12.75`],
            [`Szechuan Pork and Chicken`, `10.75`]
        ];
        result = this.htmlHelper(foods);
        return result;
    }

    getHealth() {
        var result = ``;
        var foods = [
            [`Chinese Vegetable with Chicken`, `11.95`],
            [`Triple Jade Delight`, `12.75`],
            [`Crystal Prawns with Chicken`, `12.45`],
            [`Spring Flower Chicken`, `12.00`],
            [`Vegetarian Paradise`, `11.45`],
            [`Four Season Delight`, `11.45`],
            [`May Flowers`, `11.45`]
        ];
        result = this.htmlHelper(foods);
        return result;
    }

    getDinner() {
        var result = ``;
        var foods = [
            [`C1. Chicken Finger`, `(L) 6.65 (D) 8.85`],
            [`C2. Boneless Spare Ribs`, `(L) 6.85 (D) 9.05`],
            [`C3. Shrimp Teriyaki`, `(L) 6.95 (D) 8.95`],
            [`C4. Shrimp and Chicken`, `(L) 7.25 (D) 8.95`],
            [`C5. General Tso's Chicken`, `(L) 6.75 (D) 9.05`],
            [`C6. Sesame Chicken`, `(L) 6.75 (D) 8.85`],
            [`C7. Chicken with Garlic Sauce`, `(L) 6.65 (D) 8.85`],
            [`C8. Sweet and Sour Chicken`, `(L) 6.65 (D) 8.85`],
            [`C9. Chicken with Broccoli`, `(L) 6.65 (D) 8.85`],
            [`C10. Kung Po Chicken`, `(L) 6.65 (D) 8.85`],
            [`C11. Chicken with Cashew Nuts`, `(L) 6.65 (D) 8.85`],
            [`C12. Curry Chicken`, `(L) 6.65 (D) 8.85`],
            [`C13. Chicken with String Beans`, `(L) 6.65 (D) 8.85`],
            [`C14. Chicken with Mixed Vegetables`, `(L) 6.65 (D) 8.85`],
            [`C15. Moo Goo Gai Pan`, `(L) 6.65 (D) 8.85`],
            [`C16. Chicken with Eggplant`, `(L) 6.65 (D) 8.85`],
            [`C17. Pepper Steak with Onion`, `(L) 6.75 (D) 8.85`],
            [`C18. Beef with Broccoli`, `(L) 6.75 (D) 8.85`],
            [`C19. Beef with Snow Peas`, `(L) 7.10 (D) 8.85`],
            [`C20. Beef with Chinese Vegetables`, ``],
            [`C21. Steak with Potato`, `(L) 6.95 (D) 8.95`],
            [`C22. Hot and Spicy Beef`, `(L) 6.75 (D) 8.85`],
            [`C23. Beijing Beef`, `(L) 6.95 (D) 8.95`],
            [`C24. Beef Szechuan Style`, `(L) 6.75 (D) 8.95`],
            [`C25. Beef with Mushrooms`, `(L) 6.75 (D) 8.85`],
            [`C26. Sweet and Sour Pork`, `(L) 6.65 (D) 8.85`],
            [`C27. Roast Pork Egg Foo Young`, `(L) 6.65 (D) 8.85`],
            [`C28. Roast Pork with Broccoli`, `(L) 6.65 (D) 8.85`],
            [`C29. Shredded Pork with Garlic Sauce`, `(L) 6.65 (D) 8.85`],
            [`C30. Double Sauteed Sliced Pork`, `(L) 6.65 (D) 8.85`],
            [`C31. Mixed Vegetables`, `(L) 6.65 (D) 8.85`],
            [`C32. Broccoli with Garlic Sauce`, `(L) 6.65 (D) 8.85`],
            [`C33. Eggplant with Garlic Sauce`, `(L) 6.65 (D) 8.85`],
            [`C34. Shrimp with Lobster Sauce`, `(L) 6.95 (D) 8.95`],
            [`C35. Shrimp with Broccoli`, `(L) 6.95 (D) 8.85`],
            [`C36. Shrimp with Garlic Sauce`, `(L) 6.95 (D) 8.85`],
            [`C37. Shrimp with Mixed Vegetables`, `(L) 6.95 (D) 8.85`],
            [`C38. Hunan Shrimp`, `(L) 6.95 (D) 8.85`],
            [`C39. Baby Shrimp with Cashew Nuts`, `(L) 6.95 (D) 8.85`],
            [`C40. Kung Po Baby Shrimp`, `(L) 6.95 (D) 8.85`],
            [`C41. Hot and Spicy Shrimp`, `(L) 6.95 (D) 8.85`],
            [`C42. Chow Mein`, `(L) 6.65 (D) 8.85`],
            [`C43. Lo Mein`, `(L) 6.65 (D) 8.85`]
        ];
        result = this.htmlHelper(foods);
        return result
    }

    getAmerDish() {
        var result = ``;
        var foods = [
            [`Chicken Fingers & Beef Stick`, `(L) 7.75 (D) 9.75`],
            [`General Tso's Chicken & Boneless Spare Ribs`, `(L) 7.75 (D) 9.75`],
            [`Chicken Fingers & Boneless Spare Ribs`, `(L) 7.75 (D) 9.75`],
            [`Chicken Stick & General Tso's Chicken`, `(L) 7.75 (D) 9.75`],
            [`Beef Stick & Boneless Spare Ribs`, `(L) 7.75 (D) 9.75`],
            [`Crab Rangoon & Chicken Fingers`, `(L) 7.75 (D) 9.75`],
            [`General Tso's Chicken & Crab Rangoon`, `(L) 7.75 (D) 9.75`],
            [`Crab Rangoon & Boneless Spare Ribs`, `(L) 7.75 (D) 9.75`],
            [`Chicken Wings & General Tso's Chicken`, `(L) 7.75 (D) 9.75`]
        ];
        result = this.htmlHelper(foods);
        return result;
    }

    getThai() {
        var result = ``;
        var rice = [
            [`Chicken Fried Rice`, `10.99`],
            [`Pork Fried Rice`,  `10.99`],
            [`Beef Fried Rice`, `11.99`],
            [`Shrimp Fried Rice`, `11.99`]
        ];
        var noodle = [
            [`Chicken Pad Thai`, `11.99`],
            [`Pork Pad Thai`, `11.99`],
            [`Beef Pad Thai`, `11.99`],
            [`Shrimp Pad Thai`, `11.99`]
        ];
        var basil = [
            [`Chicken Basil Sauce`, `11.99`],
            [`Pork Basil Sauce`, `11.99`],
            [`Beef Basil Sauce`, `12.99`],
            [`Shrimp Basil Sauce`, `12.99`]
        ];
        var coconut = [
            [`Chicken Green or Red Curry`, `12.99`],
            [`Beef Green or Red Curry`, `12.99`],
            [`Shrimp Green or Red Curry`, `12.99`]
        ];
        var mango = [
            [`Chicken Thai Mango`, `13.25`],
            [`Beef Thai Mango`, `13.25`],
            [`Shrimp Thai Mango`, `13.25`]
        ];
        result = this.thaiHelper(rice, noodle, basil, coconut, mango);
        return result;
    }

    getDiet() {
        var result = ``;
        var foods = [
            [`Steamed White Meat Chicken and Broccoli`, `10.75`],
            [`Steamed Beef with Broccoli`, `11.25`],
            [`Steamed Shrimp with Broccoli`, `11.25`],
            [`Steamed Mixed Vegetables`, `9.00`],
            [`Steamed Chicken with Mixed Vegetables`, `10.75`],
            [`Steamed Shrimp with Mixed Vegetables`, `11.25`],
            [`Steamed Bean Curd with Vegetables`, `9.00`],
            [`Steamed Triple Delight`, `11.75`]
        ];
        result = this.htmlHelper(foods);
        return result;
    }

    paramHandler(myPath) {
        var specifics = ``;
        if (myPath.indexOf("specialties") > -1 || myPath == "/menu") {
            specifics = this.getSpecialties();
            
        }
        if (myPath.indexOf("appetizer") > 1) {
            specifics = this.getAppetizer();
        }
        if (myPath.indexOf("soup") > -1) {
            specifics = this.getSoup();
        }
        if (myPath.indexOf("friedrice") > -1) {
            specifics = this.getFriedRice();
        }
        if (myPath.indexOf("grilled") > -1) {
            specifics = this.getGrilled();
        }
        if(myPath.indexOf("meinsuey") > -1) {
            specifics = this.getMeinSuey();
        }
        if(myPath.indexOf("lomein") > -1) {
            specifics = this.getLoMein();
        }
        if(myPath.indexOf("meichow") > -1) {specifics = this.getMeiChow();}
        if(myPath.indexOf("efg") > -1) {specifics = this.getEFG();}
        if(myPath.indexOf("pork") > -1) {specifics = this.getPork();}
        if(myPath.indexOf("diet") > -1) {specifics = this.getDiet();}
        if(myPath.indexOf("chicken") > -1) {specifics = this.getChicken();}
        if(myPath.indexOf("beef") > -1) {specifics = this.getBeef();}
        if(myPath.indexOf("seafood") > -1) {specifics = this.getSeafood();}
        if(myPath.indexOf("tofu") > -1) {specifics = this.getTofu();}
        if(myPath.indexOf("vegetable") > -1) {specifics = this.getVeg();}
        if(myPath.indexOf("housespecial") > -1) {specifics = this.getHS()}
        if(myPath.indexOf("healthdelight") > -1) {specifics = this.getHealth();}
        if(myPath.indexOf("dinner") > -1) {specifics = this.getDinner();}
        if(myPath.indexOf("amerdish") > -1) {specifics = this.getAmerDish();}
        if(myPath.indexOf("thai") > -1) {specifics = this.getThai();}

        return specifics;
    }

    async getHtml(myPath) {
        var specifics = ``;
        var options = ``;
        var helper = new menuHelper();
        // Handle the different possibilities
        options = helper.getOptions();
        specifics = this.paramHandler(myPath);
        return `
        <div class = "container">
            <div class = "row">
                <div class = "col-3">
                    <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <a class="nav-link" id="specialties" data-toggle="pills" href="/menu/specialties" role="tab" aria-controls="v-pills-home" aria-selected="false">Specialties</a>
                    <a class="nav-link" id="appetizer" data-toggle = "pills" href="/menu/appetizer" role="tab" aria-controls="v-pills-profile" aria-selected="false">Appetizer</a>
                    <a class="nav-link" id="soup" data-toggle="pills" href="/menu/soup" role="tab" aria-controls="v-pills-messages" aria-selected="false">Soup</a>
                    <a class="nav-link" id="friedrice" data-toggle="pills" href="/menu/friedrice" role="tab" aria-controls="v-pills-settings" aria-selected="false">Fried Rice</a>
                    <a class="nav-link" id="grilled" data-toggle="pills" href="/menu/grilled" role="tab" aria-controls="v-pills-settings" aria-selected="false">Grilled</a>
                    <a class="nav-link" id="meinsuey" data-toggle="pills" href="/menu/meinsuey" role="tab" aria-controls="v-pills-settings" aria-selected="false">Chow Mein/Chop Suey</a>
                    <a class="nav-link" id="lomein" data-toggle="pills" href="/menu/lomein" role="tab" aria-controls="v-pills-settings" aria-selected="false">Lo Mein</a>
                    <a class="nav-link" id="meichow" data-toggle="pills" href="/menu/meichow" role="tab" aria-controls="v-pills-settings" aria-selected="false">Mei Chow</a>
                    <a class="nav-link" id="efg" data-toggle="pills" href="/menu/efg" role="tab" aria-controls="v-pills-settings" aria-selected="false">Egg Foo Young</a>
                    <a class="nav-link" id="pork" data-toggle="pills" href="/menu/pork" role="tab" aria-controls="v-pills-settings" aria-selected="false">Pork</a>
                    <a class="nav-link" id="diet" data-toggle="pills" href="/menu/diet" role="tab" aria-controls="v-pills-settings" aria-selected="false">Special Diet Dishes</a>
                    <a class="nav-link" id="chicken" data-toggle="pills" href="/menu/chicken" role="tab" aria-controls="v-pills-settings" aria-selected="false">Chicken</a>
                    <a class="nav-link" id="beef" data-toggle="pills" href="/menu/beef" role="tab" aria-controls="v-pills-settings" aria-selected="false">Beef</a>
                    <a class="nav-link" id="seafood" data-toggle="pills" href="/menu/seafood" role="tab" aria-controls="v-pills-settings" aria-selected="false">Seafood</a>
                    <a class="nav-link" id="tofu" data-toggle="pills" href="/menu/tofu" role="tab" aria-controls="v-pills-settings" aria-selected="false">Tofu</a>
                    <a class="nav-link" id="vegetable" data-toggle="pills" href="/menu/vegetable" role="tab" aria-controls="v-pills-settings" aria-selected="false">Vegetable</a>
                    <a class="nav-link" id="housespecial" data-toggle="pills" href="/menu/housespecial" role="tab" aria-controls="v-pills-settings" aria-selected="false">House Special</a>
                    <a class="nav-link" id="healthdelight" data-toggle="pills" href="/menu/healthdelight" role="tab" aria-controls="v-pills-settings" aria-selected="false">Healthy Delight Entree's</a>
                    <a class="nav-link" id="dinner" data-toggle="pills" href="/menu/dinner" role="tab" aria-controls="v-pills-settings" aria-selected="false">Dinner</a>
                    <a class="nav-link" id="amerdish" data-toggle="pills" href="/menu/amerdish" role="tab" aria-controls="v-pills-settings" aria-selected="false">American Dish Specials</a>
                    <a class="nav-link" id="thai" data-toggle="pills" href="/menu/thai" role="tab" aria-controls="v-pills-settings" aria-selected="false">Thai Food</a>
                    </div>

                </div>

                <div class = "col-9">
                    <div id = "items">
                        <div class = "scrollItems">
                            ${specifics}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    }
}
