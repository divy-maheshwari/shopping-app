const express = require('express');
const router = express.Router();
const Product = require('../models/productModel');
const security = require('../util.js/jwt');
const isAuth = security.isAuth;
const isAdmin = security.isAdmin;

router.get('/',(req,res) => {
    Product.find({})
                .then(products => {
                    res.json(products);
                });
});


router.get('/:id',(req, res) => {
     Product.findOne({ _id: req.params.id },(err,product) => {
        if (product) {
            res.json(product);
          } else if (err) {
            res.status(404).json({ message: 'Product Not Found.' });
          }
     });
   
  });

router.post('/',isAuth,(req,res) => {
   const product = new Product({
       name: req.body.name,
       image: req.body.image,
       price: req.body.price,
       brand: req.body.brand,
       category: req.body.category,
       rating: req.body.rating,
       description: req.body.description,
       numReviews: req.body.numReviews,
       countInStock: req.body.countInStock
   })
   product.save()
   .then(product => {
       res.json(product);
   })
});

router.put('/:id',isAuth,(req,res) => {
    Product.findByIdAndUpdate(req.params.id,req.body,(err,updatedProduct) => {
        if(err) {
            res.json({msg: 'failed to update the product'})
        }
        else {
            updatedProduct.save()
            .then(product => {
                res.json(product)
            })
        }
    });
});

router.delete('/:id',isAuth,(req,res) => {
    Product.findByIdAndDelete(req.params.id,req.body,(err,deletedProduct) => {
        if(deletedProduct) {
            res.json({msg: 'product deleted'});
        }
        else {
            res.json({msg: 'product failed to delete'})
        }
    })
});
    
router.post('/upload',(req,res) => {
    if(req.files === null) {
        return res.status(401).json({msg:'no file uploaded'});
    }
    const file = req.files.file;
    file.mv(`C:/Users/divy maheshwari/MernProjects/E-commerce/client/public/uploads/${file.name}`,err => {
        if(err) {
           return res.status(500).json(err);
        }
        res.json(file.name);
    });
});
 


module.exports = router;