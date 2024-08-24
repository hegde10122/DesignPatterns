/**
  To understand OCP better, let us introduce an interface and a class that implements the interface,
  just like we did with the SRP in the earlier blog.
  
  This time we have the MobilePhone interface with three properties and one method to describe the phone.

  interface MobilePhone {
    brand: string;
    model: string;
    price: number;

    // Additional method to describe the phone
    getDescription(): string;
}

class BasicMobilePhone implements MobilePhone {
    brand: string;
    model: string;
    price: number;
  
    constructor(brand: string, model: string, price: number) {
      this.brand = brand;
      this.model = model;
      this.price = price;
    }
  
    getDescription(): string {
      return `${this.brand} ${this.model} is priced at ₹${this.price}.`;
    }
  }
  Let us define another class that includes all filtering functions based on brand,model,price and a variety of
  other combinations. This class is defined as PhoneFilterUtils.

  We have the filterByPriceRange function that takes in an array (or inventory) of MobilePhone objects and produces a
  filtered array of phones that lie within a certain price range.

 Note that, filterByPriceRange is a utility functions. What do you mean by that ?

  Utility Functions: When you have methods that operate on data passed to them,
  rather than on data stored within an instance of a class,
  it’s common to make them static. This is why filterByPriceRange is static.
  In the PhoneFilterUtils class, the filterByPriceRange method is static,
  so it can be used directly via the class name without needing to create a
  PhoneFilterUtils object saving memory.

  Before we look further into the code, we need to understand that as the number of
  attributes increase from 3 to 6 to 9 or even more, the number of functions that are required to filter the
  products based on 1,2,3 or more attributes increase quickly. We fall abck upon the
  combinatorics formula C(n,k) where n is the total attributes of the product and k is the
  number of combinations of filters taken k at a time from n.

  Meaning, if we have 3 attributes the possible filters for product could be solo filters
  (based on just one attribute) at a time or 2 filters (Any 2 out of 3) or all 3 attributes considered
  at a time.

  The combinatorics formula for the above problem will give us the sum total of filtering functions possible.
  So for just one attribute considered at a time it is C(3,1) = 3 ways.
  For 2 attributes considered out of 3 we have C(3,2) = 3 ways.
  For all 3 attributes considered we have C(3,3) = 1 ways.

  So total number of filtering functions that exist are 3+3+1 = 7.

  Thus, our PhoneFilterUtils class has 7 functions which is a mamangeable number. But
  if the dynamic nature of the mobile phone market ensures that the comapny needs to do more data analytics,
  based on a higher number of atttributes then the number of functions in the PhoneFilterUtils class grow
  quickly making the issue of extensibility tougher to handle.

  Looking at the above combinatorics formula, we can also say that the total number of possible
  filtering functions is 2^n - 1 where n is the number of attributes. So for 3 attributes the answer is 2^3 - 1  = 7.

  Say, if we change the interface and the class defined by adding three additional properties, because they
  form the new core of the business, then we shall see soon that the number of filtering functions become
  too much to write and test properly.

  Say we add three more attributes and revamp the interface. The revised interface and the class are
  mentioned below.
 *
 */
var MobilePhone = /** @class */ (function () {
    function MobilePhone(brand, model, price, screenSize, batteryCapacity, cameraMegapixels) {
        this.brand = brand;
        this.model = model;
        this.price = price;
        this.screenSize = screenSize;
        this.batteryCapacity = batteryCapacity;
        this.cameraMegapixels = cameraMegapixels;
    }
    MobilePhone.prototype.getDescription = function () {
        return "".concat(this.brand, " ").concat(this.model, " - Price: \u20B9").concat(this.price, ", Screen: ").concat(this.screenSize, " inches, Battery: ").concat(this.batteryCapacity, "mAh, Camera: ").concat(this.cameraMegapixels, "MP");
    };
    return MobilePhone;
}());
var PhoneFilterUtils = /** @class */ (function () {
    function PhoneFilterUtils() {
    }
    PhoneFilterUtils.filterByPriceRange = function (phones, minPrice, maxPrice) {
        return phones.filter(function (phone) { return phone.price >= minPrice && phone.price <= maxPrice; });
    };
    return PhoneFilterUtils;
}());
var BrandSpecification = /** @class */ (function () {
    function BrandSpecification(brand) {
        this.brand = brand;
    }
    BrandSpecification.prototype.isSatisfied = function (item) {
        return item.brand === this.brand;
    };
    return BrandSpecification;
}());
var ModelSpecification = /** @class */ (function () {
    function ModelSpecification(model) {
        this.model = model;
    }
    ModelSpecification.prototype.isSatisfied = function (item) {
        return item.model === this.model;
    };
    return ModelSpecification;
}());
var PriceSpecification = /** @class */ (function () {
    function PriceSpecification(minPrice, maxPrice) {
        this.minPrice = minPrice;
        this.maxPrice = maxPrice;
    }
    PriceSpecification.prototype.isSatisfied = function (item) {
        return item.price >= this.minPrice && item.price <= this.maxPrice;
    };
    return PriceSpecification;
}());
var ScreenSizeSpecification = /** @class */ (function () {
    function ScreenSizeSpecification(minSize, maxSize) {
        this.minSize = minSize;
        this.maxSize = maxSize;
    }
    ScreenSizeSpecification.prototype.isSatisfied = function (item) {
        return item.screenSize >= this.minSize && item.screenSize <= this.maxSize;
    };
    return ScreenSizeSpecification;
}());
var BatteryCapacitySpecification = /** @class */ (function () {
    function BatteryCapacitySpecification(minCapacity) {
        this.minCapacity = minCapacity;
    }
    BatteryCapacitySpecification.prototype.isSatisfied = function (item) {
        return item.batteryCapacity >= this.minCapacity;
    };
    return BatteryCapacitySpecification;
}());
var CameraMegaPixelsSpecification = /** @class */ (function () {
    function CameraMegaPixelsSpecification(minMegaPixels) {
        this.minMegaPixels = minMegaPixels;
    }
    CameraMegaPixelsSpecification.prototype.isSatisfied = function (item) {
        return item.cameraMegapixels >= this.minMegaPixels;
    };
    return CameraMegaPixelsSpecification;
}());
var AndSpecification = /** @class */ (function () {
    function AndSpecification(specs) {
        this.specs = specs;
    }
    AndSpecification.prototype.isSatisfied = function (item) {
        return this.specs.every(function (spec) { return spec.isSatisfied(item); });
    };
    return AndSpecification;
}());
var OrSpecification = /** @class */ (function () {
    function OrSpecification(specs) {
        this.specs = specs;
    }
    OrSpecification.prototype.isSatisfied = function (item) {
        return this.specs.some(function (spec) { return spec.isSatisfied(item); });
    };
    return OrSpecification;
}());
var FilterCombination = /** @class */ (function () {
    function FilterCombination() {
    }
    FilterCombination.prototype.filter = function (items, spec) {
        return items.filter(function (item) { return spec.isSatisfied(item); });
    };
    return FilterCombination;
}());
var inventory = [
    new MobilePhone("Apple", "iPhone 14", 79900, 6.1, 3095, 12),
    new MobilePhone("Samsung", "Galaxy S23", 74999, 6.2, 4000, 50),
    new MobilePhone("Google", "Pixel 7", 59999, 6.3, 4355, 50),
    new MobilePhone("OnePlus", "9 Pro", 64990, 6.7, 4500, 48),
    new MobilePhone("Apple", "iPhone 13", 64999, 6.1, 3095, 12),
    new MobilePhone("Apple", "iPhone 15 Pro", 129000, 6.1, 3095, 48),
];
//create a filter instance
var filter = new FilterCombination();
//define specification
var priceSpec = new PriceSpecification(12000, 65000);
var modelSpec = new ModelSpecification("iPhone 13");
var combineSpec = new AndSpecification([priceSpec, modelSpec]);
//apply filter
var filteredPhones = filter.filter(inventory, combineSpec);
filteredPhones.forEach(function (phone) {
    console.log(phone.getDescription());
});
//Example 1: phones that are apple and have a screen size larger than 6 inches
var appleSpec = new BrandSpecification("Apple");
var largeScreenSpec = new ScreenSizeSpecification(6, Infinity);
var appleAndLargeScreenSpec = new AndSpecification([
    appleSpec,
    largeScreenSpec,
]);
var appleAndLargeScreenPhones = filter.filter(inventory, appleAndLargeScreenSpec);
console.log("phones that are apple and have a screen size larger than 6 inches");
appleAndLargeScreenPhones.forEach(function (phone) {
    console.log(phone.getDescription());
});
