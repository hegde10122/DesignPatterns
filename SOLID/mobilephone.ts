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
  
  class PhoneFilterUtils {
    static filterByPriceRange(phones: MobilePhone[], minPrice: number, maxPrice: number): MobilePhone[] {
      return phones.filter(phone => phone.price >= minPrice && phone.price <= maxPrice);
    }
  }

/**
  To understand OCP better, let us introduce an interface and a class that implements the interface,
  just like we did with the SRP in the earlier blog.
  
  This time we have the MobilePhone interface with three properties and one method to describe the phone.

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

  interface MobilePhone {
    brand: string;
    model: string;
    price: number;
    screenSize: number;
    batteryCapacity: number;
    cameraMegapixels: number;

    // Additional method to describe the phone
    getDescription(): string;
}

class MobilePhone {
  constructor(
    public brand: string,
    public model: string,
    public price: number,
    public screenSize: number,
    public batteryCapacity: number,
    public cameraMegapixels: number
  ) {}

  getDescription(): string {
    return `${this.brand} ${this.model} - Price: ₹${this.price}, Screen: ${this.screenSize} inches, Battery: ${this.batteryCapacity}mAh, Camera: ${this.cameraMegapixels}MP`;
  }
}

/**
  From the above combinatorics calculation, we have the total possible filtering functions possible = 2^6 - 1 or 63.

 */