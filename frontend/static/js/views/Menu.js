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
            result += `<div class = "card shadow-sm bg-white rounded"><div class = "card-body"><h5 id = "theFood">${foods[i]}</h5></div></div>`;
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
            `Egg Roll`,
            `Shrimp Egg Roll`,
            `Fantail Shrimp`,
            `Spring Roll`,
            `BBQ Spare Ribs(w/ bone)`,
            `Boneless Spare Ribs`,
            `Chicken Wings with Garlic Sauce(4)`,
            `French Fries`,
            `Fried Wonton(10)`,
            `Chicken Nuggets(10)`,
            `Fried Scallops(12)`,
            `Beef Stick(4)`,
            `Onion Rings`,
            `Shrimp Toast(4)`,
            `Scallion Pancakes`,
            `Pork Dumplings(8)(Steamed or Fried)`,
            `Vegetable Dumplings`,
            `Spinach Chicken Dumplings(8)`,
            `Crab Rangoon(8)`,
            `Golden Fingers(5)`,
            `Wonton with Spicy Sauce`,
            `Cold Noodle with Sesame Sauce`,
            `Shrimp Dumplings(8)`,
            `Combination Dumplings(8)`,
            `Pu Pu Platter for 2`,
            `Chicken Stick(4)`
        ];
        result = this.htmlHelper(foods);
        return result;
                   
    }

    getSoup() {
        var result = ``;
        var foods = [
            `Cantonese Wonton Soup(Shrimp and Pork)`,
            `Wonton Soup`,
            `Egg Drop Soup`,
            `Chicken Rice Soup`,
            `Chicken Noodle Soup`,
            `Mixed Wonton Egg Drop Soup`,
            `Hot and Sour Soup`,
            `Vegetable Bean Curd Soup`,
            `House Special Soup`,
            `Seafood Soup`,
            `Minced Chicken and Corn Soup`
        ];
        result = this.htmlHelper(foods);
        return result;
    }

    getFriedRice() {
        var result = ``;
        var foods = [
            `Vegetable Fried Rice`,
            `Chicken Fried Rice`,
            `Roast Pork Fried Rice`,
            `Beef Fried Rice`,
            `Shrimp Fried Rice`,
            `House Special Fried Rice`,
            `Lobster Fried Rice`,
            `Seafood Pineapple Fried Rice`
        ];
        result = this.htmlHelper(foods);
        return result;
    }

    getGrilled() {
        var result = ``;
        var foods = [
            `Grilled Shrimp with Teriyaki Sauce`,
            `Grilled Beef with Teriyaki Sauce`,
            `Grilled Chicken with Teriyaki Sauce`
        ];
        result = this.htmlHelper(foods);
        return result;
                    
    }

    getMeinSuey() {
        var result = ``;
        var foods = [
            `Vegetable Chow Mein or Chop Suey`,
            `Pork Chow Mein or Chop Suey`,
            `Chicken Chow Mein or Chop Suey`,
            `Beef Chow Mein or Chop Suey`,
            `Shrimp Chow Mein or Chop Suey`
        ];
        result = this.htmlHelper(foods);
        return result;
    }

    getLoMein() {
        var result = ``;
        var foods = [
            `Vegetable Lo Mein`,
            `Roast Pork Lo Mein`,
            `Chicken Lo Mein`,
            `Beef Lo Mein`,
            `Shrimp Lo Mein`,
            `House Special Lo Mein`
        ];
        result = this.htmlHelper(foods);
        return result;
                    
    }

    getMeiChow() {
        var result = ``;
        var foods = [
            `Roast Pork Mei Fun or Chow Fun`,
            `Chicken Mei Fun or Chow Fun`,
            `Beef Mei Fun or Chow Fun`,
            `Shrimp Mei Fun or Chow Fun`,
            `Singapore Style Mei Fun or Chow Fun`,
            `Vegetable Mei Fun or Chow Fun`
        ];
        result = this.htmlHelper(foods);
        return result;    
    }
    
    getEFG() {
        var result = ``;
        var foods = [
            `Vegetable Egg Foo Young`,
            `Roast Pork Egg Foo Young`,
            `Chicken Egg Foo Young`,
            `Mushroom Egg Foo Young`,
            `Beef Egg Foo Young`,
            `Shrimp Egg Foo Young`,
            `House Special Egg Foo Young`
        ];
        result = this.htmlHelper(foods);
        return result;
    }

    getPork() {
        var result = ``;
        var foods = [
            `Roast Pork with Broccoli`,
            `Roast Pork with Bean Sprouts`,
            `Roast Pork with Chinese Vegetables`,
            `Shredded Pork with String Beans`,
            `Sweet and Sour Pork`,
            `Pork with Mixed Vegetables`,
            `Moo Shu Pork`,
            `Shredded Pork with Szechuan Sauce`,
            `Shredded Pork with Garlic Sauce`,
            `Double Sauteed Sliced Pork`
        ];
        result = this.htmlHelper(foods);
        return result;

                    
    }

    getChicken() {
        var result = ``;
        var foods = [
            `Chicken with Lobster Sauce`,
            `Chicken with Bean Curd`,
            `Chicken with Broccoli`,
            `Chicken with Almond Ding`,
            `Chicken with Black Bean Sauce`,
            `Chicken with Pepper and Tomato`,
            `Moo Goo Gai Pan`,
            `Curry Chicken with Onion`,
            `Kung Pao Chicken`,
            `Diced Chicken and Cashew`,
            `Chicken with Stirng Beans`,
            `Chicken with Eggplants`,
            `Sweet and Sour Chicken`,
            `Chicken with Mixed Vegetables`,
            `Moo Shu Chicken`,
            `Chicken with Garlic Sauce`,
            `Chicken Hunan Style`,
            `Szechuan Chicken`
        ];
        result = this.htmlHelper(foods);
        return result;
                    
    }

    getBeef() {
        var result = ``;
        var foods = [
            `Beef with Potato`,
            `Beef with Broccoli`,
            `Beef with Peppers and Onions`,
            `Beef with Pepper and Tomato`,
            `Beef with Chinese Vegetables`,
            `Beef with Mushrooms`,
            `Beef with Bean Sprouts`,
            `Beef with Oyster Sauce`,
            `Beef with Eggplant`,
            `Beef with String Beans`,
            `Beef with Mixed Vegetables`,
            `Moo Shu Beef`,
            `Beef with Garlic Sauce`,
            `Beef with Hunan Style`,
            `Hot and Spicy Shredded Beef`
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
