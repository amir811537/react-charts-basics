import SinglePriceOption from "../SinglePriceOption/SinglePriceOption";

const PriceOption = () => {

const PriceOption= [
    {
      "id": "1",
      "name": "Basic Membership",
      "price": "$29.99/month",
      "features": [
        "Access to cardio equipment",
        "Use of weightlifting area",
        "Locker room access",
        "Fitness classes available at an extra cost",
        "Online workout tracking",
        "Discounted personal training sessions",
        "Monthly fitness newsletter"
      ]
    },
    {
      "id": "2",
      "name": "Premium Membership",
      "price": "$49.99/month",
      "features": [
        "All Basic Membership features",
        "Unlimited fitness classes",
        "Access to sauna and steam room",
        "Personal trainer consultation (1 session/month)",
        "Towel service",
        "Access to exclusive member events",
        "Discounts on gym merchandise"
      ]
    },
    {
      "id": "3",
      "name": "VIP Membership",
      "price": "$99.99/month",
      "features": [
        "All Premium Membership features",
        "Priority booking for fitness classes",
        "Free guest pass (1 guest/month)",
        "Nutritional consultation (1 session/month)",
        "Complimentary smoothie bar access",
        "Access to VIP lounge area",
        "Personalized workout plans"
      ]
    }
  ]
  



    
    return (
        <div className="m-12 text-center">
            <h2 className="text-5xl py-6 bg-yellow-300 rounded-full w-1/4 text-white hover:bg-yellow-600   mx-auto  ">Best prices!!</h2>
           <div className="grid md:grid-cols-3 gap-4">
           {
                PriceOption.map(option =><SinglePriceOption key={option.id} option={option}></SinglePriceOption>)
            }
           </div>
      
        </div>
    );
};

export default PriceOption;