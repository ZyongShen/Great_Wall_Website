import AbstractView from "./AbstractView.js";
import menuHelper from "../helpers/menuHelper.js";

export default class Menu extends AbstractView {
    constructor() {
        super();
        this.setTitle("Menu");
    }

    activeHelper(myPath) {
        var helper = new menuHelper();
        helper.setActive(myPath);
    }

    htmlHelper(foods) {
        var result = ``;
        for (var i = 0; i < foods.length; i++) {
            result += `<div class = "card shadow-sm bg-white rounded"><div class = "card-body">${foods[i]}</div></div>`;
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
            result += (`<h3>${key}</h3>` + foods);
        }
        return result;
    }
    getSpecialties() {
        var result = ``;
        var foods = [
            `A. Fried Chicken Wings(4)`,
            `B. Fried Scallops(12)`,
            `C. Fried Jumbo Shrimp(6)`,
            `D. Fried Crab Meat Stick(6)`,
            `E. French Fries`,
            `F. Onion Rings`,
            `G. Fried Half Chicken`,
            `H. Buffalo Chicken Wings`,
            `I. Spare Rib Tips`,
            `J. Fried Plantains`,
            `K. Fried Fish`,
            `L. Chinese Donut(10)`
        ];
        result = this.htmlHelper(foods);
        return result;
    }

    getAppetizer() {
        var result = ``;
        var foods = [
            `1. Egg Roll`,
            `2. Shrimp Egg Roll`,
            `3. Fantail Shrimp`,
            `4. Spring Roll`,
            `5. BBQ Spare Ribs(w/ bone)`,
            `6. Boneless Spare Ribs`,
            `7. Chicken Wings with Garlic Sauce(4)`,
            `8. French Fries`,
            `9. Fried Wonton(10)`,
            `10. Chicken Nuggets(10)`,
            `11. Fried Scallops(12)`,
            `12. Beef Stick(4)`,
            `13. Onion Rings`,
            `14. Shrimp Toast(4)`,
            `15. Scallion Pancakes`,
            `16. Pork Dumplings(8)(Steamed or Fried)`,
            `17. Vegetable Dumplings`,
            `18. Spinach Chicken Dumplings(8)`,
            `19. Crab Rangoon(8)`,
            `20. Golden Fingers(5)`,
            `21. Wonton with Spicy Sauce`,
            `22. Cold Noodle with Sesame Sauce`,
            `23. Shrimp Dumplings(8)`,
            `24. Combination Dumplings(8)`,
            `25. Pu Pu Platter for 2`,
            `26. Chicken Stick(4)`
        ];
        result = this.htmlHelper(foods);
        return result;
                   
    }

    getSoup() {
        var result = ``;
        var foods = [
            `27. Cantonese Wonton Soup(Shrimp and Pork)`,
            `28. Wonton Soup`,
            `29. Egg Drop Soup`,
            `30. Chicken Rice Soup`,
            `30. Chicken Noodle Soup`,
            `31. Mixed Wonton Egg Drop Soup`,
            `32. Hot and Sour Soup`,
            `33. Vegetable Bean Curd Soup`,
            `34. House Special Soup`,
            `35. Seafood Soup`,
            `36. Minced Chicken and Corn Soup`
        ];
        result = this.htmlHelper(foods);
        return result;
    }

    getFriedRice() {
        var result = ``;
        var foods = [
            `37. Vegetable Fried Rice`,
            `38. Chicken Fried Rice`,
            `39. Roast Pork Fried Rice`,
            `40. Beef Fried Rice`,
            `41. Shrimp Fried Rice`,
            `42. House Special Fried Rice`,
            `43. Lobster Fried Rice`,
            `44. Seafood Pineapple Fried Rice`
        ];
        result = this.htmlHelper(foods);
        return result;
    }

    getGrilled() {
        var result = ``;
        var foods = [
            `45. Grilled Shrimp with Teriyaki Sauce`,
            `46. Grilled Beef with Teriyaki Sauce`,
            `47. Grilled Chicken with Teriyaki Sauce`
        ];
        result = this.htmlHelper(foods);
        return result;
                    
    }

    getMeinSuey() {
        var result = ``;
        var foods = [
            `48. Vegetable Chow Mein or Chop Suey`,
            `49. Pork Chow Mein or Chop Suey`,
            `50. Chicken Chow Mein or Chop Suey`,
            `51. Beef Chow Mein or Chop Suey`,
            `52. Shrimp Chow Mein or Chop Suey`
        ];
        result = this.htmlHelper(foods);
        return result;
    }

    getLoMein() {
        var result = ``;
        var foods = [
            `53. Vegetable Lo Mein`,
            `54. Roast Pork Lo Mein`,
            `55. Chicken Lo Mein`,
            `56. Beef Lo Mein`,
            `57. Shrimp Lo Mein`,
            `58. House Special Lo Mein`
        ];
        result = this.htmlHelper(foods);
        return result;
                    
    }

    getMeiChow() {
        var result = ``;
        var foods = [
            `59. Roast Pork Mei Fun or Chow Fun`,
            `60. Chicken Mei Fun or Chow Fun`,
            `61. Beef Mei Fun or Chow Fun`,
            `62. Shrimp Mei Fun or Chow Fun`,
            `63. Singapore Style Mei Fun or Chow Fun`,
            `64. Vegetable Mei Fun or Chow Fun`
        ];
        result = this.htmlHelper(foods);
        return result;    
    }
    
    getEFG() {
        var result = ``;
        var foods = [
            `65. Vegetable Egg Foo Young`,
            `66. Roast Pork Egg Foo Young`,
            `67. Chicken Egg Foo Young`,
            `68. Mushroom Egg Foo Young`,
            `69. Beef Egg Foo Young`,
            `70. Shrimp Egg Foo Young`,
            `71. House Special Egg Foo Young`
        ];
        result = this.htmlHelper(foods);
        return result;
    }

    getPork() {
        var result = ``;
        var foods = [
            `72. Roast Pork with Broccoli`,
            `73. Roast Pork with Bean Sprouts`,
            `74. Roast Pork with Chinese Vegetables`,
            `75. Shredded Pork with String Beans`,
            `76. Sweet and Sour Pork`,
            `77. Pork with Mixed Vegetables`,
            `78. Moo Shu Pork`,
            `79. Shredded Pork with Szechuan Sauce`,
            `80. Shredded Pork with Garlic Sauce`,
            `81. Double Sauteed Sliced Pork`
        ];
        result = this.htmlHelper(foods);
        return result;

                    
    }

    getChicken() {
        var result = ``;
        var foods = [
            `82. Chicken with Lobster Sauce`,
            `83. Chicken with Bean Curd`,
            `84. Chicken with Broccoli`,
            `85. Chicken with Almond Ding`,
            `86. Chicken with Black Bean Sauce`,
            `87. Chicken with Pepper and Tomato`,
            `88. Moo Goo Gai Pan`,
            `89. Curren Chicken with Onion`,
            `90. Kung Pao Chicken`,
            `91. Diced Chicken and Cashew`,
            `92. Chicken with Stirng Beans`,
            `93. Chicken with Eggplants`,
            `94. Sweet and Sour Chicken`,
            `95. Chicken with Mixed Vegetables`,
            `96. Moo Shu Chicken`,
            `97. Chicken with Garlic Sauce`,
            `98. Chicken Hunan Style`,
            `99. Szechuan Chicken`
        ];
        result = this.htmlHelper(foods);
        return result;
                    
    }

    getBeef() {
        var result = ``;
        var foods = [
            `100. Beef with Potato`,
            `101. Beef with Broccoli`,
            `102. Beef with Peppers and Onions`,
            `103. Beef with Pepper and Tomato`,
            `104. Beef with Chinese Vegetables`,
            `105. Beef with Mushrooms`,
            `106. Beef with Bean Sprouts`,
            `107. Beef with Oyster Sauce`,
            `108. Beef with Eggplant`,
            `109. Beef with String Beans`,
            `110. Beef with Mixed Vegetables`,
            `111. Moo Shu Beef`,
            `112. Beef with Garlic Sauce`,
            `113. Beef with Hunan Style`,
            `114. Hot and Spicy Shredded Beef`
        ];
        result = this.htmlHelper(foods);
        return result;
                    
    }

    getSeafood() {
        var result = ``;
        var foods = [
            `Shrimp with Lobster Sauce`,
            `Shrimp with Chinese Vegetables`,
            `Shrimp with Pepper and Tomato`,
            `Shrimp with Black Bean Sauce`,
            `Shrimp with Broccoli`,
            `Curry Shrimp with Onion`,
            `Shrimp with Eggplant`,
            `Baby Shrimp with Bean Sprouts`,
            `Baby Shrimp with Cashew Nuts`,
            `Kung Pao Baby Shrimp`,
            `Shrimp with Mixed Vegetables`,
            `Moo Shu Shrimp`,
            `Hot and Spicy Shrimp`,
            `Shrimp with Garlic Sauce`,
            `Sweet and Sour Shrimp`,
            `Scallop with Garlic Sauce`,
            `Szechuan Shrimp`
        ];
        result = this.htmlHelper(foods);
        return result;
    }

    getTofu() {
        var result = ``;
        var foods = [
            `Ma Po Tofu`,
            `Bean Curd with Mixed Vegetables`,
            `Seasame Bean Curd`,
            `General Tso's Bean Curd`
        ];
        result = this.htmlHelper(foods);
        return result;
    }

    getVeg() {
        var result = ``;
        var foods = [
            `Mixed Vegetables`,
            `Broccoli with Spicy Garlic Sauce`,
            `Sauteed String Beans`,
            `Sauteed Chinese Eggplant in Garlic Sauce`,
            `Moo Shu Vegetables`
        ];
        result = this.htmlHelper(foods);
        return result;
    }

    getHS() {
        var result = ``;
        var foods = [
            `Seafood Delight`,
            `Butterfly Shrimp`,
            `Boneless Duck`,
            `Boneless Chicken`,
            `Oyster Beef with Scallops`,
            `Chicken with Orange Flavor`,
            `Beef with Scallion`,
            `Peking Beef`,
            `Sesame Chicken`,
            `Sesame Shrimp`,
            `General Tso's Chicken`,
            `Scallops and Shrimp with Garlic Sauce`,
            `Happy Family`,
            `Orange Beef`,
            `Sesame Beef`,
            `Dragon and Phoenix`,
            `General Tso's Shrimp`,
            `Four Seasons`,
            `Kung Pao Triple Delight`,
            `Seafood Pan Fried Noodles`,
            `Hunan Triple Delight`,
            `Szechuan Pork and Chicken`
        ];
        result = this.htmlHelper(foods);
        return result;
    }

    getHealth() {
        var result = ``;
        var foods = [
            `Chinese Vegetable with Chicken`,
            `Triple Jade Delight`,
            `Crystal Prawns with Chicken`,
            `Spring Flower Chicken`,
            `Vegetarian Paradise`,
            `Four Season Delight`,
            `May Flowers`
        ];
        result = this.htmlHelper(foods);
        return result;
    }

    getDinner() {
        var result = ``;
        var foods = [
            `C1. Chicken Finger`,
            `C2. Boneless Spare Ribs`,
            `C3. Shrimp Teriyaki`,
            `C4. Shrimp and Chicken`,
            `C5. General Tso's Chicken`,
            `C6. Sesame Chicken`,
            `C7. Chicken with Garlic Sauce`,
            `C8. Sweet and Sour Chicken`,
            `C9. Chicken with Broccoli`,
            `C10. Kung Po Chicken`,
            `C11. Chicken with Cashew Nuts`,
            `C12. Curry Chicken`,
            `C13. Chicken with String Beans`,
            `C14. Chicken with Mixed Vegetables`,
            `C15. Moo Goo Gai Pan`,
            `C16. Chicken with Eggplant`,
            `C17. Pepper Steak with Onion`,
            `C18. Beef with Broccoli`,
            `C19. Beef with Snow Peas`,
            `C20. Beef with Chinese Vegetables`,
            `C21. Steak with Potato`,
            `C22. Hot and Spicy Beef`,
            `C23. Beijing Beef`,
            `C24. Beef Szechuan Style`,
            `C25. Beef with Mushrooms`,
            `C26. Sweet and Sour Pork`,
            `C27. Roast Pork Egg Foo Young`,
            `C28. Roast Pork with Broccoli`,
            `C29. Shredded Pork with Garlic Sauce`,
            `C30. Double Sauteed Sliced Pork`,
            `C31. Mixed Vegetables`,
            `C32. Broccoli with Garlic Sauce`,
            `C33. Eggplant with Garlic Sauce`,
            `C34. Shrimp with Lobster Sauce`,
            `C35. Shrimp with Broccoli`,
            `C36. Shrimp with Garlic Sauce`,
            `C37. Shrimp with Mixed Vegetables`,
            `C38. Hunan Shrimp`,
            `C39. Baby Shrimp with Cashew Nuts`,
            `C40. Kung Po Baby Shrimp`,
            `C41. Hot and Spicy Shrimp`,
            `C42. Chow Mein`,
            `C43. Lo Mein`
        ];
        result = this.htmlHelper(foods);
        return result
    }

    getAmerDish() {
        var result = ``;
        var foods = [
            `Chicken Fingers & Beef Stick`,
            `General Tso's Chicken & Boneless Spare Ribs`,
            `Chicken Fingers & Boneless Spare Ribs`,
            `Chicken Stick & General Tso's Chicken`,
            `Beef Stick & Boneless Spare Ribs`,
            `Crab Rangoon & Chicken Fingers`,
            `General Tso's Chicken & Crab Rangoon`,
            `Crab Rangoon & Boneless Spare Ribs`,
            `Chicken Wings & General Tso's Chicken`
        ];
        result = this.htmlHelper(foods);
        return result;
    }

    getThai() {
        var result = ``;
        var rice = [
            `Chicken Fried Rice`,
            `Pork Fried Rice`,
            `Beef Fried Rice`,
            `Shrimp Fried Rice`
        ];
        var noodle = [
            `Chicken Pad Thai`,
            `Pork Pad Thai`,
            `Beef Pad Thai`,
            `Shrimp Pad Thai`
        ];
        var basil = [
            `Chicken Basil Sauce`,
            `Pork Basil Sauce`,
            `Beef Basil Sauce`,
            `Shrimp Basil Sauce`
        ];
        var coconut = [
            `Chicken Green or Red Curry`,
            `Beef Green or Red Curry`,
            `Shrimp Green or Red Curry`
        ];
        var mango = [
            `Chicken Thai Mango`,
            `Beef Thai Mango`,
            `Shrimp Thai Mango`
        ];
        result = this.thaiHelper(rice, noodle, basil, coconut, mango);
        return result;
    }

    getDiet() {
        var result = ``;
        var foods = [
            `Steamed White Meat Chicken and Broccoli`,
            `Steamed Beef with Broccoli`,
            `Steamed Shrimp with Broccoli`,
            `Steamed Mixed Vegetables`,
            `Steamed Chicken with Mixed Vegetables`,
            `Steamed Shrimp with Mixed Vegetables`,
            `Steamed Bean Curd with Vegetables`,
            `Steamed Triple Delight`
        ];
        result = this.htmlHelper(foods);
        return result;
    }

    paramHandler(myPath) {
        var specifics = ``;
        if (myPath.indexOf("specialties") > -1) {
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
        // Handle the different possibilities
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

                <div class = "col-6">
                    <div id = "items">
                        ${specifics}
                    </div>
                </div>
            </div>
        </div>
    `;
    }
}
