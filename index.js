const Cashfree = require('cashfree-sdk');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const crypto = require('crypto');

// const clientId = ' TEST36894926ff0ed516529b3d6754949863';
// const clientSecret = 'TEST5ef3f05321339e1bfa9d7d4747f28720a5da63db';

const clientId = '36894926ff0ed516529b3d6754949863';
const clientSecret = '5ef3f05321339e1bfa9d7d4747f28720a5da63db';
// const cashfree = new Cashfree({ clientId,clientSecret });
const cashfree =  ({ clientId,clientSecret });

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); // Enable CORS for API





// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:anamika_1234@cluster0.lvywqj9.mongodb.net/batcave?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB Atlas');
});



// Define a route for receiving webhooks
app.post('/webhook', (req, res) => {
  // Handle the webhook here
  const webhookData = req.body;
  // Verify the signature 
  // Process the webhook event
  // Save payment status to database
  console.log('Received Cashfree Webhook:', webhookData);
  res.sendStatus(200); // Return a 200 status to acknowledge receipt
});


function verifySignature(signature, postData, clientSecret) {
  const hash = crypto.createHmac('sha256', clientSecret).update(postData).digest('base64');
  return hash === signature;
}

const userSchema = new mongoose.Schema({
  full_name: String,
  email: String,
  mobile: String,
  address: String,
  dob: String,
  gender: String,
  city: String,
});

const User = mongoose.model('User', userSchema);

// Create a route to handle user data submission
app.post('/users', async (req, res) => {
  try {
    const userData = req.body;
    const newUser = new User(userData);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});







// Define a route to retrieve paymentSessionId
app.post('/getpaymentsessionid', async (req, res) => {

    try {
      // Replace with your actual order data
      const userId = req.body.userId; // You need to retrieve user-specific data here.
      const baseMembershipCost = 14999; // Base membership cost
  
      // Replace 'YOUR_ORDER_ID' and 'YOUR_ORDER_AMOUNT' with dynamic values
      const order_id = `order_${Date.now()}_${userId}`;
      const order_amount = calculateOrderAmount(baseMembershipCost, req.body.couponCode); // Calculate based on user and coupon
  
      const orderData = {
        orderId: order_id,
        orderAmount: order_amount,
        orderCurrency: 'INR',
      };

    // // Create a Cashfree instance
    // const cashfree = new Cashfree({ clientId, clientSecret });

    // Generate the paymentSessionId
    const response = await cashfree.orders.paymentSessionId(orderData);

    if (response.status === 200) {
      const paymentSessionId = response.data.paymentSessionId;
      res.json({ success: true, paymentSessionId });
    } else {
      res.status(response.status).json({ error: 'Failed to retrieve paymentSessionId from Cashfree' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve the paymentSessionId.' });
  }
});


// Function to calculate the order amount based on fixed discounts
function calculateOrderAmount(baseAmount, couponCode) {
  const influencerDiscounts = {
    BC499: 499,
    WELCOME999: 999,
    PASSIONPASS: 1499,
  };
  const discount = influencerDiscounts[couponCode] || 0; // Default to 0 if the code is not recognized.
  return baseAmount - discount;
}



const couponCodeSchema = new mongoose.Schema({
  influencerName: String,
  couponCode: String,
  category: String,
});

const CouponCode = mongoose.model('CouponCode', couponCodeSchema);

// app.use(express.json());




// Sample data to insert
const couponData = [
  {
    influencerName: "Influencer1",
    couponCode: "BC499",
    category: "BC499",
  },
  {
    influencerName: "Influencer2",
    couponCode: "WELCOME999",
    category: "WELCOME999",
  },
  {
    influencerName: "Influencer3",
    couponCode: "PASSIONPASS",
    category: "PASSIONPASS",
  },
];





// Define a mapping of influencer codes to fixed discount amounts in Indian Rupees (INR).
const influencerDiscounts = {
  BC499: 499, // Rs. 499 discount for BC499
  WELCOME999: 999, // Rs. 999 discount for WELCOME999
  PASSIONPASS: 1499, // Rs. 1499 discount for PASSIONPASS
};



// }

// Route to create an order with dynamic discounts
app.post('/createorder', async (req, res) => {
  try {
    // Extract user data and coupon code from the request
    // const { userId, name, email, phone, couponCode } = req.body;

    const userId = req.body.userId; // Replace with your logic to get the user's ID.
    const couponCode = req.body.couponCode; // Get the influencer code input from the user.
    // const category = req.body.category; // Receiving category, if applicable


    
    const baseMembershipCost = 14999; 

    // // Use the influencer code to get the fixed discount amount
    // const discountInINR = influencerDiscounts[couponCode] || 0; // Default to 0 if the code is not recognized.

    let discount = influencerDiscounts[couponCode] || 0; // Default to 0 if the code is not recognized.


    // Calculate the order amount based on fixed discount and membership cost
    const order_amount = calculateOrderAmount(baseMembershipCost, discount);

    // Generate a unique order ID, e.g., based on timestamp and user ID
    const order_id = `order_${Date.now()}_${userId}`;

    // Replace with your logic to get user information from your database.
    const user = {
      name: req.body.name, // Use this field for the user's name
      email: req.body.email, // Use this field for the user's email
      phone: req.body.phone, // Use this field for the user's phone
    };

    const orderData = {
      order_id,
      order_amount,
      order_currency: 'INR',
      order_note: 'Membership Cost',
      customer_details: {
        customer_id: userId,
        customer_name: user.name,
        customer_email: user.email,
        customer_phone: user.phone,
      },
      discount, // Include the discount in the response
    };

    const response = await axios.post('https://sandbox.cashfree.com/pg/orders', orderData, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-version': '2022-09-01', // Your API version
        'x-client-id': 'TEST10025712c114b4b5476f68bb7dbc21752001', // Your App ID
        'x-client-secret': 'TEST2887a0cb7e71ccd5358b928fbd590e40321b2f6c', // Your Secret Key
      },
    });

    const paymentSessionId = response.data.payment_session_id;
    const cashfree = new Cashfree({ paymentSessionId });


    // Now you can send the paymentSessionId to the client or use it for frontend integration.

    res.json({ success: true, paymentSessionId }); // Include  response data as needed
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create the order.' });
  }
});


// Route for coupon code validation and discount calculation
app.post('/validatecoupon',async (req, res) => {
  // const { couponCode } = req.body;
  const couponCode = req.body.couponCode; // Use 'couponCode' directly
  console.log('Received coupon code:', couponCode); // Add this line for debugging



  try {
    // const { couponCode } = req.body;
    // const couponCode = req.body.couponCode; // Use 'couponCode' directly


    // Find the coupon in the database
    const coupon = await CouponCode.findOne({ couponCode });
    // const coupon = await CouponCode.findOne({ category: couponCode }); // Use 'category' to find the coupon
    console.log('Found coupon:', coupon); // debug

    if (coupon) {

      // Apply the discount based on the influencer's category
      const discount = influencerDiscounts[coupon.category] || 0;

  

      if (discount > 0) {
        // Valid coupon with a discount
      res.json({ success: true, discount });
   } else {
       
        res.json({ success: false, message: 'Invalid coupon code' });
      } 
    //   else if (coupon.couponCode === 'PASSIONPASS') {
    //     res.json({ success: false, message: 'Invalid coupon code' });
    //   }
    //  }
  } else {
    // Coupon not found
    res.json({ success: false, message: 'coupon code not found' });
     
   }
  } catch (error) {
    console.error('Coupon code validation error:', error);
    res.status(500).json({ success: false, message: 'Coupon code validation failed' });
  }
// });
  





const clientId = '08c4dd3f51031e07bc9c976bd562dc25'; // Replace with car api client ID
const secretKey = 'ukDKJT2j9hkJHpEn3qTMfZ3pSqyusaprBGkbJvFHXCgPUoEXK2vFMiorsFy24uHpN'; // Replace with car API secret key



const vehicleInfoSchema = new mongoose.Schema({
  carDetails: Object,
});

const VehicleInfo = mongoose.model('VehicleInfo', vehicleInfoSchema);

app.post('/fetchdetails', async (req, res) => {
  try {
    const { carRegistrationNumber } = req.body;

   
    // const response = await axios.get(`https://api.invincibleocean.com/invincibleVehicleFastest?registrationNumber=${registrationNumber}`, {
        // const response = await axios.get(`https://api.invincibleocean.com/invincibleVehicleFastest?carRegistrationNumber=${ carRegistrationNumber}`, {
    const response = await axios.get('https://api.invincibleocean.com/invincibleVehicleFastest', {
  params: {
    carRegistrationNumber: carRegistrationNumber
  },
// });
       headers: {
        'Content-Type': 'application/json',
        'clientId': clientId,
        'secretKey': secretKey,
      }
      // params: {
      //   carRegistrationNumber: carRegistrationNumber,
      // },
    });

    if (response.status === 200) {
      const carDetails = response.data;

      const newVehicleInfo = new VehicleInfo({ carDetails });
      await newVehicleInfo.save();

      return res.status(200).json({ message: 'Car details saved successfully' });
    } else {
      return res.status(response.status).json({ error: 'Failed to fetch car details from API' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});


})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
